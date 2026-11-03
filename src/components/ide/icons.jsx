// Lucide arrows (stroke 1.5)
const ARROWS = {
  "up-right": (
    <>
      <path d="M7 7h10v10" />
      <path d="M7 17 17 7" />
    </>
  ),
  left: (
    <>
      <path d="m12 19-7-7 7-7" />
      <path d="M19 12H5" />
    </>
  ),
  right: (
    <>
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </>
  ),
  up: (
    <>
      <path d="m5 12 7-7 7 7" />
      <path d="M12 19V5" />
    </>
  ),
  down: (
    <>
      <path d="M12 5v14" />
      <path d="m19 12-7 7-7-7" />
    </>
  ),
  "down-to-line": (
    <>
      <path d="M12 17V3" />
      <path d="m6 11 6 6 6-6" />
      <path d="M19 21H5" />
    </>
  ),
};

export function Arrow({ dir = "up-right", className = "h-4 w-4" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`shrink-0 ${className}`}
      aria-hidden="true"
    >
      {ARROWS[dir]}
    </svg>
  );
}

export function SunIcon({ className = "h-[18px] w-[18px]" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2m-7.07-17.07 1.41 1.41m11.32 11.32 1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
    </svg>
  );
}

export function MoonIcon({ className = "h-[18px] w-[18px]" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
  );
}

export function InfoIcon({ className = "h-[15px] w-[15px]" }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" className={className} aria-hidden="true">
      <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.2" />
      <path d="M8 7.2v4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <circle cx="8" cy="5" r="0.85" fill="currentColor" />
    </svg>
  );
}

export function GridIcon({ className = "h-[18px] w-[18px]" }) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" className={className} aria-hidden="true">
      {[1.5, 6, 10.5].flatMap((y) =>
        [1.5, 6, 10.5].map((x) => (
          <rect key={`${x}-${y}`} x={x} y={y} width="4" height="4" rx="0.5" />
        ))
      )}
    </svg>
  );
}

export function FolderIcon({ className = "h-5 w-5" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M3 6.5A1.5 1.5 0 0 1 4.5 5h4.38a1.5 1.5 0 0 1 1.06.44L11.5 7h8A1.5 1.5 0 0 1 21 8.5v9a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 17.5v-11Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M3 10h18" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export function CloseIcon({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" className={className} aria-hidden="true">
      <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

/** Small file-type glyph shown in the explorer. */
export function FileGlyph({ kind }) {
  switch (kind) {
    case "readme":
      return <InfoIcon className="h-[15px] w-[15px] text-ide-ident" />;
    case "json":
      return <span className="text-[12px] font-semibold text-ide-json">{"{}"}</span>;
    case "ts":
      return <span className="text-[11px] font-bold tracking-tight text-ide-file">TS</span>;
    case "liquid":
      return <span className="text-[9px] leading-none text-ide-string">◆</span>;
    case "tsx":
    default:
      return <span className="text-[9px] leading-none text-ide-file">◆</span>;
  }
}
