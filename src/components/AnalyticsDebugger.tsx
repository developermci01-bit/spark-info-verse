import { useEffect, useState } from "react";

type Event = { path: string; title: string; time: string };

const AnalyticsDebugger = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const sync = () => setEvents([...(window.__ga4Events || [])]);
    window.__ga4Notify = sync;
    sync();
    return () => {
      if (window.__ga4Notify === sync) window.__ga4Notify = undefined;
    };
  }, []);

  if (!import.meta.env.DEV) return null;

  return (
    <div className="fixed bottom-4 left-4 z-[9999] font-mono text-xs">
      <button
        onClick={() => setOpen((o) => !o)}
        className="rounded bg-primary px-3 py-2 text-primary-foreground shadow-lg border border-background"
      >
        GA4 {open ? "▼" : "▲"} ({events.length})
      </button>
      {open && (
        <div className="mt-2 w-80 max-h-80 overflow-auto rounded border border-border bg-background p-3 shadow-xl">
          <div className="mb-2 font-semibold text-foreground">
            Last page_view events
          </div>
          {events.length === 0 && (
            <div className="text-muted-foreground">No events yet.</div>
          )}
          {events.map((e, i) => (
            <div
              key={i}
              className="mb-2 border-b border-border pb-2 last:border-0"
            >
              <div className="text-foreground">{e.path}</div>
              <div className="text-muted-foreground truncate">{e.title}</div>
              <div className="text-muted-foreground">
                {e.time} · Sent to GA4
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AnalyticsDebugger;
