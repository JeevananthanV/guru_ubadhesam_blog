import React, { useEffect, useState } from "react";
import "./Ubasana.css";
import varahiBg from "./assets/varahi_bg.png";
import varahiTemple from "./assets/varahi_temple.png";

const SectionTitle = ({ id, title }) => (
  <div className="ub-sec-head">
    <span className="ub-sec-icon">🪷</span>
    <h2 className="ub-section-title" id={id}>
      {title}
    </h2>
    <div className="ub-sec-orn">
      <span className="ub-sec-line"></span>
      <span className="ub-sec-star">✦</span>
      <span className="ub-sec-line"></span>
    </div>
  </div>
);

const WisdomQuote = ({ quote, author = "ஸ்ரீ பள்ளூர் வாராஹிதாசன்" }) => (
  <figure className="ub-quote-card ub-reveal">
    <span className="ub-quote-mark">“</span>
    <blockquote className="ub-quote">{quote}</blockquote>
    <div className="ub-quote-divider">
      <span className="ub-quote-line"></span>
      <span className="ub-quote-symbol">📿</span>
      <span className="ub-quote-line"></span>
    </div>
    <figcaption className="ub-quote-author">— {author}</figcaption>
  </figure>
);

const Ubasana = () => {
  const [progress, setProgress] = useState(0);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const max = el.scrollHeight - el.clientHeight;
      setProgress(max > 0 ? Math.min(100, (el.scrollTop / max) * 100) : 0);
      setShowTop(el.scrollTop > 500);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const els = document.querySelectorAll(".ub-reveal");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const toc = [
    { href: "#qualification", label: "உபாசகரின் தகுதி" },
    { href: "#example", label: "வாலை உபாசனை" },
    { href: "#kala", label: "காலக் கணிதம்" },
  ];

  return (
    <div className="ub-page">
      {/* Reading progress bar */}
      <div className="ub-progress" style={{ width: `${progress}%` }}></div>

      {/* Opening hero — full-screen fixed background, text only */}
      <header className="ub-hero" style={{ backgroundImage: `url(${varahiBg})` }}>
        <div className="ub-hero-overlay"></div>
        <div className="ub-hero-inner">
          <span className="ub-hero-tag ub-reveal">உபாசனா மார்க்கம்</span>
          <h1 className="ub-hero-title ub-reveal">ஜெய் கோட்டை வாராஹி</h1>
          <div className="ub-ornament ub-reveal">
            <span className="ub-ornament-line"></span>
            <span className="ub-ornament-symbol">🔱</span>
            <span className="ub-ornament-line"></span>
          </div>
          <p className="ub-hero-p ub-reveal">
            ஆன்மீகப் பாதையில் பயணிக்கும் அன்பர்களுக்கான வழிகாட்டி உரை. அன்னை வாராஹியின் பேரருளும், குருவின் திருவாக்கும்
            இணையும் புண்ணியத் தலம்.
          </p>
          <div className="ub-mantra ub-reveal">
            <p className="ub-mantra-title">✨ வாராஹி மூல மந்திரம் ✨</p>
            <p className="ub-mantra-text">
              "ஓம் ஐம் ஹ்ரீம் ஸ்ரீம் ஐம் க்லௌம் ஐம் நமோ பகவதி வாராஹி வாராஹமுகி ஸ்வஹா"
            </p>
          </div>
        </div>
        <div className="ub-scroll-hint">
          <i className="fa-solid fa-chevron-down"></i>
        </div>
      </header>

      {/* Article content — cards scroll over the fixed background */}
      <main className="ub-content">
        <div className="ub-layout">
          <nav className="ub-toc ub-reveal" aria-label="பக்க உள்ளடக்கம்">
            <span className="ub-toc-title">இந்த பக்கத்தில்</span>
            {toc.map((t, i) => (
              <a className="ub-toc-chip" key={i} href={t.href}>
                <span>{i + 1}</span> {t.label}
              </a>
            ))}
          </nav>

          <article className="ub-article">
            {/* Section 1 */}
            <section className="ub-section ub-reveal">
              <SectionTitle id="qualification" title="உபாசகரின் தகுதி மற்றும் பக்குவம்" />
              <div className="ub-card">
                <p className="ub-text">
                  ஒரு உபாசகர் எந்த ஒரு தெய்வத்தின் உபாசனையை மேற்கொள்ள விரும்பினாலும், முதலில் அந்த உபாசன மூர்த்திக்குத்
                  தகுதியானவராகத் தன்னை உருவாக்கிக் கொள்ள வேண்டும். தகுதியை வளர்த்துக் கொள்ளாமல் மேற்கொள்ளப்படும்
                  உபாசனை முழுமையான பலனை அளிக்காது.
                </p>
                <p className="ub-text">
                  இன்றைய காலத்தில் பலர், உபாசனையின் அடிப்படை நெறிமுறைகளைப் புரிந்துகொள்ளாமல் பல்வேறு தேவதைகளின்
                  உபாசனைகளை மேற்கொள்ள முயல்கின்றனர். அதில் எதிர்பார்த்த பலன் கிடைக்காதபோது, குருவையும், அவர் அளித்த
                  தீட்சையையும், அதன் முறையையும் குறை கூறுகின்றனர்.
                </p>
                <p className="ub-text">
                  ஆனால், உண்மையில் அது குருவின் குற்றமோ, தீட்சையின் குற்றமோ அல்ல. அந்த உபாசனைக்கு உரிய மனப்பக்குவம்,
                  ஒழுக்கம் மற்றும் தகுதியை உபாசகர் தம்முள் வளர்த்துக் கொள்ளாததே அதன் காரணமாகும்.
                </p>
              </div>
            </section>

            {/* Wisdom quote 1 */}
            <WisdomQuote quote="“ஒரு தெய்வத்தின் உபாசனையைத் தொடங்குவதற்கு முன், அந்த உபாசன மூர்த்தியின் வரலாறு, தத்துவம், குணநலன்கள், விருப்பங்கள், நெறிமுறைகள் ஆகியவற்றை நன்கு அறிந்து கொள்ள வேண்டும். பின்னர், அதற்கு ஏற்றவாறு தமது எண்ணம், சொல், செயல், பழக்கவழக்கங்கள் மற்றும் வாழ்க்கை முறையை மாற்றிக் கொள்ள வேண்டும். அப்போதுதான் உபாசனை சித்தியாகும்.”" />

            {/* Section 2 */}
            <section className="ub-section ub-reveal">
              <SectionTitle id="example" title="உபாசனை உதாரணம்: வாலை உபாசனை" />
              <div className="ub-card ub-split">
                <div className="ub-card-text">
                  <p className="ub-text">
                    உதாரணமாக, வாலை உபாசனையை மேற்கொள்பவர், வாலையை ஒரு குழந்தையாகவே பாவித்து உபாசனை செய்ய வேண்டும்.
                    அவ்வாறு உபாசனை செய்து கொண்டிருக்கும் ஒருவர், உலகியல் ஆசைகளுக்கும் காம எண்ணங்களுக்கும் அடிமையாக
                    இருந்தால், அந்த உபாசனையின் சித்தி எளிதில் கைகூடாது.
                  </p>
                  <p className="ub-text">
                    இதன் உட்பொருள், குழந்தையின் தூய்மை போன்ற மனநிலையுடன், வயதிற்கேற்ற ஒழுக்கமும் பக்குவமும் கொண்டு
                    உபாசனையை மேற்கொள்ள வேண்டும் என்பதாகும்.
                  </p>
                </div>
                <figure className="ub-media">
                  <div className="ub-media-frame">
                    <img src={varahiTemple} alt="Sri Varahi Temple Sanctum" className="ub-media-img" />
                  </div>
                  <figcaption className="ub-media-cap">பள்ளூர் ஸ்ரீ கோட்டை வாராஹி சந்நிதி</figcaption>
                </figure>
              </div>
            </section>

            {/* Section 3 */}
            <section className="ub-section ub-reveal">
              <SectionTitle id="kala" title="காலக் கணிதமும் வழிபாட்டு நெறிமுறைகளும்" />
              <div className="ub-card">
                <p className="ub-text">
                  மேலும், உபாசனையைச் சரியான முறையில் செயல்படுத்த, காலக் கணித அறிவு அவசியம். அது பஞ்சபட்சி சாஸ்திரமாக
                  இருக்கலாம், ஓரை முறையாக இருக்கலாம், ஜாமக்கோளாக இருக்கலாம், நாடி ஜோதிடமாக இருக்கலாம். இவற்றில்
                  ஏதேனும் ஒன்றில் ஆழ்ந்த தேர்ச்சி பெற்றிருப்பது சிறந்தது.
                </p>
                <p className="ub-text">
                  எல்லா முறைகளையும் ஒரே நேரத்தில் கற்றுத் தேர்ந்து செயல்படுத்த முயல்வது அவசியமல்ல. ஒரு முறையில்
                  தெளிவும் தேர்ச்சியும் பெறுவதே உயர்ந்த பயனை அளிக்கும்.
                </p>
                <p className="ub-text">
                  அதேபோல், உபாசனை செய்யும் தெய்வத்திற்கு உகந்தவை எவை, உகந்ததல்லாதவை எவை என்பதை அறிந்திருக்க வேண்டும்.
                  மலர்கள், நைவேத்தியங்கள், வாசனைத் திரவியங்கள், நிறங்கள், காலம், திசை, பூஜை முறைகள் என அனைத்திலும்
                  தெளிவு பெறுவது அவசியம்.
                </p>
              </div>
            </section>
          </article>
        </div>
      </main>

      {/* Closing — text only over the same fixed background, before the site footer */}
      <section className="ub-closing" style={{ backgroundImage: `url(${varahiBg})` }}>
        <div className="ub-closing-overlay"></div>
        <div className="ub-closing-inner">
          <div className="ub-closing-orn ub-reveal">⚜️</div>
          <p className="ub-closing-text ub-reveal">
            தன்னை மாற்றிக் கொள்ளாதவன், தெய்வ அனுகிரகத்தை முழுமையாகப் பெற முடியாது. தன்னைத் தகுதிப்படுத்திக் கொண்டவனே
            உபாசனையின் சித்தியையும், தெய்வ அருளின் பரிபூரண அனுபவத்தையும் பெறுவான்.
          </p>
          <p className="ub-closing-think ub-reveal">சிந்தியுங்கள்...</p>
          <p className="ub-closing-hello ub-reveal">ஜெய் வாராஹி!</p>
          <div className="ub-closing-author ub-reveal">
            <span className="ub-closing-respect">அடியேன்,</span>
            <span className="ub-closing-name">ஸ்ரீ பள்ளூர் வாராஹிதாசன்</span>
          </div>
        </div>
      </section>

      {/* Back to top */}
      <button className={`ub-top ${showTop ? "show" : ""}`} onClick={scrollToTop} aria-label="மேலே செல்ல">
        <i className="fa-solid fa-arrow-up"></i>
      </button>
    </div>
  );
};

export default Ubasana;
