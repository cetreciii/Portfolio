export function About() {
  return (
    <section id="about" className="bg-canvas py-28">
      <div className="mx-auto max-w-[820px] px-6">
        <span className="inline-block rounded-full bg-accent-soft px-3 py-1 text-[12px] font-semibold tracking-[0.125px] text-accent-text">
          About
        </span>
        <h2 className="display-48 mt-4 text-ink">
          Commitment in creating and sharing.
        </h2>
        <div className="mt-8 space-y-5 text-[17px] leading-[1.65] text-ink-soft">
          <p>
            I like building things. It could be an iOS app, a visionOS app or also something with LEGOs.
            The thing is that I like focusing on something and watch it grow, especially when I am
            part of it. Focusing onto something and working on it to make it a real thing is a very satisfying feeling!
          </p>
          <p>
            And when you create something, inevitably you will also learn new things! For that reason, I really like
            documenting what I build and share it with the community. Add on top of this the fact that I enjoy writing
            and sharing my knowledge and here you got my core interests!
          </p>
          <p>
            This process helps me learn new things, improve my knowledge by exposing to concepts that I do not know yet
            and share it with the community.
          </p>
          <p>
            That's why "Learn". That's why "Improve". That's why "Empower".
          </p>
        </div>

        <dl className="mt-14 grid grid-cols-2 gap-8 border-t border-[rgba(0,0,0,0.08)] pt-10 md:grid-cols-4">
          {[
            { k: "14", v: "Projects built" },
            { k: "6", v: "Apps on App Store" },
            { k: "3", v: "Platforms (iOS, visionOS, macOS)" },
            { k: "5", v: "Articles published" },
          ].map((s) => (
            <div key={s.v}>
              <dt className="text-[32px] font-bold tracking-[-0.03em] text-ink">
                {s.k}
              </dt>
              <dd className="mt-1 text-[14px] text-ink-soft">{s.v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
