export function Footer() {
  return (
    <footer className="border-t border-[rgba(0,0,0,0.08)] bg-canvas">
      <div className="mx-auto flex max-w-[1200px] flex-col justify-between gap-8 px-6 py-16 md:flex-row md:items-end">
        <div className="max-w-xl">
          <h3 className="display-40 text-ink">
            Thank you for visiting!
          </h3>
          <p className="mt-3 text-[16px] text-ink-soft">
            Hope to see you again soon! 💪🏼
          </p>
        </div>
        <a
          href="#"
          className="inline-flex items-center rounded-md bg-accent px-4 py-2 text-[14px] font-semibold text-white transition-colors hover:bg-accent-dark"
        >
          Back to top ↑
        </a>
      </div>
      <div className="border-t border-[rgba(0,0,0,0.06)] py-6 text-center text-[12px] tracking-[0.125px] text-ink-mute">
        © {new Date().getFullYear()} Igor Tarantino
      </div>
    </footer>
  );
}
