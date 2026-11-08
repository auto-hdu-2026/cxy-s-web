import Nav from "@/components/Nav";
import Reveal from "@/components/Reveal";
import { profile, majorInfo, interests } from "@/lib/profile";

function TerminalCard() {
  return (
    <div className="terminal">
      <div className="terminal__bar">
        <i />
        <i />
        <i />
        <span className="terminal__name">profile.js</span>
      </div>
      <div className="terminal__body">
        <div>
          <span className="cmt">// 一个自动化新生的运行时配置</span>
        </div>
        <div>
          <span className="key">const</span>{" "}
          <span className="pink">student</span>{" "}
          <span className="punc">=</span> <span className="punc">{"{"}</span>
        </div>
        <div>
          {"  "}name<span className="punc">:</span>{" "}
          <span className="str">&quot;{profile.nameEn}&quot;</span>
          <span className="punc">,</span>
        </div>
        <div>
          {"  "}school<span className="punc">:</span>{" "}
          <span className="str">&quot;HDU&quot;</span>
          <span className="punc">,</span>
        </div>
        <div>
          {"  "}major<span className="punc">:</span>{" "}
          <span className="str">&quot;Automation&quot;</span>
          <span className="punc">,</span>
        </div>
        <div>
          {"  "}grade<span className="punc">:</span>{" "}
          <span className="str">2026</span>
          <span className="punc">,</span>
        </div>
        <div>
          {"  "}status<span className="punc">:</span>{" "}
          <span className="str">&quot;booting...&quot;</span>
          <span className="punc">,</span>
        </div>
        <div>
          <span className="punc">{"}"}</span>
          <span className="punc">;</span>
        </div>
        <div style={{ marginTop: 10 }}>
          <span className="cmt">$</span> npm run build:future
          <span className="cursor" />
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* 背景层 */}
      <div className="bg-layer" aria-hidden="true">
        <div className="bg-glow" />
        <div className="bg-grid" />
        <div className="bg-grid-floor" />
        <div className="bg-scan" />
      </div>

      <Nav />

      <div className="shell">
        <main>
          {/* ============ 首屏 ============ */}
          <section className="hero" id="top">
            <div className="wrap hero__grid">
              <div>
                <div className="h-in">
                  <span className="status">
                    <span className="status__bar" />
                    System Online · 2026
                  </span>
                </div>

                <div className="h-in" style={{ animationDelay: "90ms" }}>
                  <h1 className="hero__title">
                    <span className="glitch" data-text={profile.name}>
                      {profile.name}
                    </span>
                    <span className="thin">{profile.role}</span>
                  </h1>
                </div>

                <div className="h-in" style={{ animationDelay: "180ms" }}>
                  <p className="hero__lead">
                    {profile.school} {profile.major}专业 {profile.grade}
                    新生。正在学习如何让机器听懂指令、让系统自己稳定下来，
                    不打球的晚上，通常在和电路、代码较劲。
                  </p>
                </div>

                <div className="h-in" style={{ animationDelay: "250ms" }}>
                  <div className="hero__meta">
                    <span>{profile.nameEn}</span>
                    <span>{profile.school}</span>
                    <span>{profile.major}</span>
                    <span>{profile.grade}</span>
                  </div>
                </div>

                <div className="h-in" style={{ animationDelay: "320ms" }}>
                  <div className="hero__actions">
                    <a className="btn btn--primary" href="#major">
                      查看专业方向 <span aria-hidden="true">→</span>
                    </a>
                    <a className="btn btn--ghost" href="#contact">
                      联系我
                    </a>
                  </div>
                </div>
              </div>

              <div className="h-in" style={{ animationDelay: "220ms" }}>
                <TerminalCard />
              </div>
            </div>
          </section>

          {/* ============ 个人简介 ============ */}
          <section id="about">
            <div className="wrap">
              <div className="sec-head">
                <div className="sec-head__left">
                  <Reveal>
                    <span className="sec-tag">01 — About</span>
                    <h2 className="sec-title">
                      关于<em>我</em>
                    </h2>
                  </Reveal>
                </div>
                <span className="sec-index">/ INTRO.LOG</span>
              </div>

              <div className="about__grid">
                <Reveal className="about__text">
                  {profile.bio.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </Reveal>

                <Reveal delay={120}>
                  <dl className="facts">
                    {majorInfo.facts.map((f) => (
                      <div className="facts__row" key={f.k}>
                        <dt>{f.k}</dt>
                        <dd>{f.v}</dd>
                      </div>
                    ))}
                  </dl>
                </Reveal>
              </div>
            </div>
          </section>

          {/* ============ 专业信息 ============ */}
          <section id="major">
            <div className="wrap">
              <div className="sec-head">
                <div className="sec-head__left">
                  <Reveal>
                    <span className="sec-tag">02 — Major</span>
                    <h2 className="sec-title">
                      专业<em>信息</em>
                    </h2>
                  </Reveal>
                  <Reveal delay={80}>
                    <p className="sec-desc">{majorInfo.summary}</p>
                  </Reveal>
                </div>
                <span className="sec-index">/ {majorInfo.code}</span>
              </div>

              <div className="tracks">
                {majorInfo.tracks.map((t, i) => (
                  <Reveal key={t.title} delay={i * 70}>
                    <article className="card">
                      <span className="card__tag">{t.tag}</span>
                      <h3 className="card__title">{t.title}</h3>
                      <p className="card__desc">{t.desc}</p>
                    </article>
                  </Reveal>
                ))}
              </div>

              <Reveal>
                <div className="sec-head" style={{ marginBottom: 28 }}>
                  <div className="sec-head__left">
                    <span className="sec-tag">Skill Matrix</span>
                    <h3 className="sec-title" style={{ fontSize: 22 }}>
                      技能进度 · 如实记录
                    </h3>
                  </div>
                  <span className="sec-index">/ SELF-ASSESSED</span>
                </div>
              </Reveal>

              <div className="skills">
                {majorInfo.skills.map((s, i) => (
                  <Reveal key={s.name} delay={i * 60}>
                    <div className="skill__top">
                      <span className="skill__name">{s.name}</span>
                      <span className="skill__pct">{s.level}%</span>
                    </div>
                    <div className="bar">
                      <span
                        className="bar__fill"
                        style={{ width: `${s.level}%` }}
                      />
                    </div>
                    <p className="skill__note">{s.note}</p>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          {/* ============ 兴趣 ============ */}
          <section id="interests">
            <div className="wrap">
              <div className="sec-head">
                <div className="sec-head__left">
                  <Reveal>
                    <span className="sec-tag">03 — Interests</span>
                    <h2 className="sec-title">
                      兴趣<em>板块</em>
                    </h2>
                  </Reveal>
                  <Reveal delay={80}>
                    <p className="sec-desc">
                      专业之外，这些事让我保持好奇。大部分和「动手」有关。
                    </p>
                  </Reveal>
                </div>
                <span className="sec-index">/ OFFLINE.MODE</span>
              </div>

              <div className="interest-grid">
                {interests.map((it, i) => (
                  <Reveal key={it.title} delay={i * 55}>
                    <article className="card interest">
                      <span className="interest__icon" aria-hidden="true">
                        {it.icon}
                      </span>
                      <div>
                        <h3 className="interest__title">{it.title}</h3>
                        <p className="interest__desc">{it.desc}</p>
                      </div>
                    </article>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          {/* ============ 联系 ============ */}
          <section id="contact" className="contact">
            <div className="wrap contact__inner">
              <Reveal>
                <span className="sec-tag">04 — Contact</span>
                <h2 className="sec-title" style={{ fontSize: "clamp(22px,3vw,30px)" }}>
                  有项目、想法或只是想聊聊？
                </h2>
                <p className="sec-desc" style={{ marginBottom: 0 }}>
                  随时可以找到我，一起把东西做出来。
                </p>
              </Reveal>

              <Reveal delay={100}>
                <div className="contact__links">
                  {profile.links.map((l) => (
                    <a
                      className="link-chip"
                      key={l.label}
                      href={l.href}
                      target={l.href.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer"
                    >
                      {l.label} <b>{l.value}</b>
                    </a>
                  ))}
                </div>
              </Reveal>
            </div>
          </section>
        </main>

        <footer>
          <div className="wrap foot">
            <span>© 2026 {profile.name} · Built with Next.js</span>
            <span className="foot__glitch">
              自动化 / 控制 / 创造 <span className="cursor" />
            </span>
          </div>
        </footer>
      </div>
    </>
  );
}
