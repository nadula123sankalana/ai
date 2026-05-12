import { useCallback, useEffect, useRef, useState } from "react";
import Player from "@vimeo/player";
import { Clock, Eye, Pause, Play, TrendingUp } from "lucide-react";
import { useTranslation } from "@/context/LanguageContext";
import { cn } from "@/lib/utils";

const HERO_VIMEO_ID = "1191428392";
const heroVimeoThumbnailSrc = `https://vumbnail.com/${HERO_VIMEO_ID}_large.jpg`;

function formatClock(seconds: number) {
  if (!Number.isFinite(seconds) || seconds < 0) return "0:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

/** Vimeo expects boolean-like embed flags; `controls=0` is often ignored for chromeless mode. */
function buildEmbedSrc(id: string) {
  const q = new URLSearchParams({
    badge: "0",
    autopause: "0",
    autoplay: "true",
    /** Required for autoplay in most browsers (policy); viewer can unmute via system / player if enabled. */
    muted: "true",
    title: "0",
    byline: "0",
    portrait: "0",
    controls: "false",
    progress_bar: "false",
    vimeo_logo: "false",
    quality_selector: "false",
    volume: "false",
    transcript: "false",
    cc: "false",
    loop: "true",
    dnt: "true",
    api: "1",
    playsinline: "1",
  });
  return `https://player.vimeo.com/video/${id}?${q.toString()}`;
}

export function HeroEmbeddedPreview() {
  const { t } = useTranslation();
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const playerRef = useRef<Player | null>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);

  const [duration, setDuration] = useState(0);
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(true);

  useEffect(() => {
    const el = iframeRef.current;
    if (!el) return;

    const player = new Player(el);
    playerRef.current = player;

    const refreshMeta = () => {
      void player.getDuration().then((d) => {
        if (Number.isFinite(d) && d > 0) setDuration(d);
      });
      void player.getCurrentTime().then((s) => {
        if (Number.isFinite(s) && s >= 0) setCurrent(s);
      });
      void player.getPaused().then(setPaused);
    };

    const onTime = (data: { seconds: number }) => {
      setCurrent(data.seconds);
      void player.getPaused().then(setPaused);
    };
    const onPlay = () => setPaused(false);
    const onPlaying = () => setPaused(false);
    const onPause = () => setPaused(true);
    const onDurationChange = (data: { duration: number }) => {
      if (Number.isFinite(data.duration) && data.duration > 0) setDuration(data.duration);
    };

    let cancelled = false;

    void player.ready().then(() => {
      if (cancelled) return;
      player.on("timeupdate", onTime);
      player.on("play", onPlay);
      player.on("playing", onPlaying);
      player.on("pause", onPause);
      player.on("ended", onPause);
      player.on("durationchange", onDurationChange);
      player.on("loaded", refreshMeta);
      refreshMeta();
    });

    return () => {
      cancelled = true;
      player.off("timeupdate", onTime);
      player.off("play", onPlay);
      player.off("playing", onPlaying);
      player.off("pause", onPause);
      player.off("ended", onPause);
      player.off("durationchange", onDurationChange);
      player.off("loaded", refreshMeta);
      playerRef.current = null;
      void player.destroy();
    };
  }, []);

  const togglePlay = useCallback(() => {
    const player = playerRef.current;
    if (!player) return;
    void player.getPaused().then((isPaused) => {
      if (isPaused) {
        setPaused(false);
        void player.setMuted(false).catch(() => {});
        void player
          .play()
          .then(() => {
            void player.getPaused().then(setPaused);
            void player.getCurrentTime().then((s) => Number.isFinite(s) && setCurrent(s));
          })
          .catch(() => void player.getPaused().then(setPaused));
      } else {
        setPaused(true);
        void player
          .pause()
          .then(() => void player.getPaused().then(setPaused))
          .catch(() => void player.getPaused().then(setPaused));
      }
    });
  }, []);

  const onProgressPointerDown = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      const player = playerRef.current;
      const bar = progressBarRef.current;
      if (!player || !bar || duration <= 0) return;

      const seekFromClientX = (clientX: number) => {
        const rect = bar.getBoundingClientRect();
        const ratio = Math.min(1, Math.max(0, (clientX - rect.left) / rect.width));
        void player.setCurrentTime(ratio * duration);
      };

      seekFromClientX(e.clientX);
      bar.setPointerCapture(e.pointerId);

      const onMove = (ev: PointerEvent) => seekFromClientX(ev.clientX);
      const onUp = (ev: PointerEvent) => {
        bar.releasePointerCapture(ev.pointerId);
        bar.removeEventListener("pointermove", onMove);
        bar.removeEventListener("pointerup", onUp);
        bar.removeEventListener("pointercancel", onUp);
      };

      bar.addEventListener("pointermove", onMove);
      bar.addEventListener("pointerup", onUp);
      bar.addEventListener("pointercancel", onUp);
    },
    [duration],
  );

  const progressPct = duration > 0 ? Math.min(100, (current / duration) * 100) : 0;

  return (
    <div className="relative w-full bg-black">
      <div className="relative w-full" style={{ padding: "56.25% 0 0 0" }}>
        <iframe
          ref={iframeRef}
          title={t("Hero preview video")}
          src={buildEmbedSrc(HERO_VIMEO_ID)}
          className="pointer-events-none absolute left-0 top-0 z-0 h-full w-full border-0"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
          loading="eager"
        />
        {/* Vimeo iframe is often black while idle; show real thumbnail whenever paused. */}
        <img
          src={heroVimeoThumbnailSrc}
          alt=""
          width={1280}
          height={720}
          className={cn(
            "pointer-events-none absolute inset-0 z-[1] h-full w-full object-cover transition-opacity duration-300 ease-out",
            paused ? "opacity-100" : "opacity-0",
          )}
          loading="eager"
          decoding="async"
          aria-hidden
        />
      </div>
      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-transparent via-transparent to-black/30" />

      <div className="pointer-events-none absolute left-2.5 top-2.5 z-10 flex items-center gap-1.5 rounded-xl border border-white/15 bg-black/55 px-2 py-1 backdrop-blur-md sm:left-6 sm:top-6 sm:gap-2 sm:px-3 sm:py-2">
        <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-primary/90 sm:h-7 sm:w-7">
          <Eye className="h-3 w-3 text-white sm:h-3.5 sm:w-3.5" strokeWidth={2.5} />
        </div>
        <div>
          <div className="font-heading text-xs font-800 leading-none text-white sm:text-sm">1.2M</div>
          <div className="text-[9px] text-white/75 sm:text-[10px]">{t("views · this week")}</div>
        </div>
      </div>

      <div className="pointer-events-none absolute right-2.5 top-2.5 z-10 flex items-center gap-1.5 rounded-xl border border-white/15 bg-black/55 px-2 py-1 backdrop-blur-md sm:right-6 sm:top-6 sm:gap-2 sm:px-3 sm:py-2">
        <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-[hsl(var(--warm))]/90 sm:h-7 sm:w-7">
          <TrendingUp className="h-3 w-3 text-white sm:h-3.5 sm:w-3.5" strokeWidth={2.5} />
        </div>
        <div>
          <div className="font-heading text-xs font-800 leading-none text-white sm:text-sm">+273%</div>
          <div className="text-[9px] text-white/75 sm:text-[10px]">{t("ROAS vs. baseline")}</div>
        </div>
      </div>

      <div className="pointer-events-auto absolute bottom-3 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2 rounded-full border border-white/20 bg-black/60 px-2.5 py-1.5 backdrop-blur-md sm:bottom-6 sm:gap-3 sm:px-4 sm:py-2.5">
        <button
          type="button"
          onClick={togglePlay}
          aria-label={paused ? t("Play video") : t("Pause video")}
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-black shadow-md transition hover:bg-white/95 sm:h-9 sm:w-9"
        >
          {paused ? (
            <Play className="ml-0.5 h-3.5 w-3.5 fill-black sm:h-4 sm:w-4" />
          ) : (
            <Pause className="h-3.5 w-3.5 fill-black sm:h-4 sm:w-4" />
          )}
        </button>
        <div
          ref={progressBarRef}
          role="slider"
          tabIndex={0}
          aria-valuemin={0}
          aria-valuemax={duration}
          aria-valuenow={Math.round(current)}
          aria-label={t("Video progress")}
          onPointerDown={onProgressPointerDown}
          onKeyDown={(e) => {
            const player = playerRef.current;
            if (!player || duration <= 0) return;
            const step = Math.max(5, duration * 0.05);
            if (e.key === "ArrowRight") {
              e.preventDefault();
              void player.setCurrentTime(Math.min(duration, current + step));
            }
            if (e.key === "ArrowLeft") {
              e.preventDefault();
              void player.setCurrentTime(Math.max(0, current - step));
            }
          }}
          className="h-1 w-28 cursor-pointer overflow-hidden rounded-full bg-white/15 sm:w-48 md:w-56"
        >
          <div
            className="h-full rounded-full bg-hero-gradient"
            style={{ width: `${progressPct}%` }}
          />
        </div>
        <div className="flex shrink-0 items-center gap-1.5 text-[11px] font-medium text-white/85 sm:text-xs">
          <Clock className="h-3 w-3 shrink-0" />
          <span className="tabular-nums">
            {formatClock(current)} / {formatClock(duration)}
          </span>
        </div>
      </div>
    </div>
  );
}
