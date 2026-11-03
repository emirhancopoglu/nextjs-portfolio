"use client";
import { useTranslation } from "react-i18next";

const STORES = [
  "#f97316", "#10b981", "#6366f1", "#ec4899",
  "#0ea5e9", "#eab308", "#8b5cf6", "#14b8a6",
  "#ef4444", "#84cc16", "#f43f5e", "#3b82f6",
  "#a855f7", "#22c55e", "#f59e0b", "#06b6d4",
];

function MiniStore({ color }) {
  return (
    <div className="flex aspect-[4/3] flex-col gap-[0.7cqw] rounded-[0.8cqw] border border-ide-border bg-ide-bg p-[0.9cqw] shadow-sm">
      <div className="flex items-center gap-[0.6cqw]">
        <span className="h-[1.4cqw] w-[1.4cqw] rounded-[0.3cqw]" style={{ background: color }} />
        <span className="h-[0.6cqw] w-[4cqw] rounded-full bg-ide-line" />
        <span className="ml-auto h-[0.6cqw] w-[2cqw] rounded-full bg-ide-line" />
        <span className="h-[0.6cqw] w-[2cqw] rounded-full bg-ide-line" />
      </div>
      <div
        className="flex flex-1 flex-col justify-end gap-[0.4cqw] rounded-[0.5cqw] p-[0.8cqw]"
        style={{ background: `linear-gradient(135deg, ${color}, ${color}99)` }}
      >
        <span className="h-[0.7cqw] w-[45%] rounded-full bg-white/80" />
        <span className="h-[0.5cqw] w-[30%] rounded-full bg-white/60" />
      </div>
      <div className="grid grid-cols-3 gap-[0.5cqw]">
        {[0, 1, 2].map((i) => (
          <div key={i} className="flex flex-col gap-[0.3cqw]">
            <span className="aspect-square rounded-[0.4cqw] bg-ide-active" />
            <span className="h-[0.45cqw] w-[70%] rounded-full bg-ide-line" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ThemesVisual({ className = "" }) {
  const { t } = useTranslation();

  return (
    <div
      className={`relative aspect-[16/10] w-full overflow-hidden bg-ide-panel [container-type:inline-size] ${className}`}
      role="img"
      aria-label={t("themes_visual_alt")}
    >
      <div className="absolute -inset-[18%] grid rotate-[-9deg] grid-cols-4 content-center gap-[2cqw]">
        {STORES.map((c, i) => (
          <MiniStore key={i} color={c} />
        ))}
      </div>

      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 55% 60% at center, var(--ide-panel) 30%, transparent 100%)",
        }}
      />

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex flex-col items-center rounded-[2cqw] border border-ide-border bg-ide-bg px-[5cqw] py-[3cqw] shadow-[0_20px_50px_-20px_rgba(0,0,0,0.5)]">
          <span className="flex items-center gap-[1cqw] font-mono text-[2.4cqw] text-ide-muted">
            <span className="h-[1.2cqw] w-[1.2cqw] rounded-full bg-[#95bf47]" />
            Shopify
          </span>
          <span className="mt-[0.8cqw] font-sans text-[13cqw] font-bold leading-none tracking-[-0.04em] text-ide-strong">
            150<span className="text-ide-accent-fg">+</span>
          </span>
          <span className="mt-[1cqw] font-mono text-[2.6cqw] text-ide-soft">{t("themes_visual_label")}</span>
        </div>
      </div>
    </div>
  );
}
