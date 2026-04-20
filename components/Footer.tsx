export function Footer() {
  return (
    <footer className="border-t border-[rgba(0,0,0,0.08)] bg-canvas-warm">
      <div className="mx-auto flex max-w-[1200px] flex-col justify-between gap-8 px-6 py-16 md:flex-row md:items-end">
        <div className="max-w-xl">
          <h3 className="display-40 text-ink">
            Thank you for visiting!
          </h3>
          <p className="mt-3 text-[16px] text-ink-soft">
            Hope to see you again soon! 💪🏼
          </p>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-[14px] font-medium text-ink-soft">
          <a
            href="https://github.com/cetreciii"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-ink"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/igor-tarantino/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-ink"
          >
            LinkedIn
          </a>
          <a
            href="https://medium.com/@igor.tarantino"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-ink"
          >
            Medium
          </a>
          <a
            href={`${process.env.NEXT_PUBLIC_BASE_PATH}/cv/CV_Igor_Tarantino.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-ink"
          >
            CV
          </a>
        </div>
      </div>
      <div className="border-t border-[rgba(0,0,0,0.06)] py-6 text-center text-[12px] tracking-[0.125px] text-ink-mute">
        © {new Date().getFullYear()} Igor Tarantino
      </div>
    </footer>
  );
}
