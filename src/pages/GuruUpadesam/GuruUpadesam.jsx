import React, { useEffect } from "react";
import "./GuruUpadesam.css";
import varahiBg from "./assets/varahi_bg.png";
import templeBg from "./assets/temple_bg.png";
import varahiDevi from "./assets/varahi_devi.png";
import varahiTemple from "./assets/varahi_temple.png";

const SectionTitle = ({ title }) => {
  return (
    <h2 className="gu-section-title">
      <span className="gu-title-accent">🪷</span> {title}
    </h2>
  );
};

const WisdomQuoteCard = ({ quote, author = "குரு உபதேசம்" }) => {
  return (
    <div className="gu-wisdom-card">
      <div className="gu-wisdom-border-top"></div>
      <div className="gu-wisdom-content">
        <span className="gu-wisdom-quote-icon">“</span>
        <blockquote className="gu-wisdom-blockquote">{quote}</blockquote>
        <div className="gu-wisdom-divider">
          <span className="gu-wisdom-line"></span>
          <span className="gu-wisdom-symbol">📿</span>
          <span className="gu-wisdom-line"></span>
        </div>
        <cite className="gu-wisdom-author">— {author}</cite>
      </div>
      <div className="gu-wisdom-border-bottom"></div>
    </div>
  );
};

const GuruUpadesam = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="gu-page-wrapper">
      <nav className="gu-navbar">
        <div className="gu-navbar-container">
          <div className="gu-navbar-logo">
            <span className="gu-logo-icon">🪷</span>
            <div className="gu-logo-text-group">
              <span className="gu-logo-title">ஜெய் வாராஹி பீடம்</span>
              <span className="gu-logo-subtitle">பள்ளூர்</span>
            </div>
          </div>
          <ul className="gu-nav-menu">
            <li><a href="#home" className="gu-nav-link active">முகப்பு</a></li>
            <li><a href="#about" className="gu-nav-link">பீடம் பற்றி</a></li>
            <li><a href="#upadesam" className="gu-nav-link">குரு உபதேசம்</a></li>
            <li><a href="#galleries" className="gu-nav-link">சந்நிதிகள்</a></li>
            <li><a href="#contact" className="gu-nav-link">தொடர்புக்கு</a></li>
          </ul>
          <div className="gu-nav-cta">
            <a href="#darshan" className="gu-btn-gold">தரிசன நேரம்</a>
          </div>
        </div>
      </nav>

      <main className="gu-page-container">
        <div className="gu-breadcrumb-container gu-fade-in">
          <div className="gu-breadcrumb">
            <a href="/">முகப்பு</a>
            <span className="gu-breadcrumb-separator">/</span>
            <a href="/discourse">ஆன்மீக உரை</a>
            <span className="gu-breadcrumb-separator">/</span>
            <span className="gu-breadcrumb-current">குரு உபதேசம்</span>
          </div>
        </div>

        <header className="gu-hero-section gu-fade-in" style={{ backgroundImage: `url(${varahiBg})` }}>
          <div className="gu-hero-overlay"></div>
          <div className="gu-hero-content-wrapper">
            <div className="gu-hero-text">
              <span className="gu-hero-tag">உபாசனா மார்க்கம்</span>
              <h1 className="gu-title">ஜெய் கோட்டை வாராஹி</h1>
              <div className="gu-ornament-divider gu-hero-divider">
                <span className="gu-ornament-line"></span>
                <span className="gu-ornament-symbol">🔱</span>
                <span className="gu-ornament-line"></span>
              </div>
              <p className="gu-hero-p">
                ஆன்மீகப் பாதையில் பயணிக்கும் அன்பர்களுக்கான வழிகாட்டி உரை. அன்னை வாராஹியின் பேரருளும், குருவின் திருவாக்கும் இணையும் புண்ணியத் தலம்.
              </p>
              <div className="gu-hero-mantra">
                <p className="gu-mantra-title">✨ வாராஹி மூல மந்திரம் ✨</p>
                <p className="gu-mantra-text">"ஓம் ஐம் ஹ்ரீம் ஸ்ரீம் ஐம் க்லௌம் ஐம் நமோ பகவதி வாராஹி வாராஹமுகி ஸ்வஹா"</p>
              </div>
            </div>
            <div className="gu-hero-portrait-container">
              <div className="gu-portrait-glow"></div>
              <div className="gu-portrait-frame">
                <img src={varahiDevi} alt="Goddess Varahi Devi" className="gu-portrait-img" />
              </div>
            </div>
          </div>
          <div className="gu-scroll-indicator">
            <i className="fa-solid fa-chevron-down"></i>
          </div>
        </header>

        <div className="gu-content-layout">
          <article className="gu-article-body">
            
            <section className="gu-article-section gu-fade-in">
              <SectionTitle title="உபாசகரின் தகுதி மற்றும் பக்குவம்" />
              <div className="gu-article-card">
                <p className="gu-paragraph">
                  ஒரு உபாசகர் எந்த ஒரு தெய்வத்தின் உபாசனையை மேற்கொள்ள விரும்பினாலும், முதலில் அந்த உபாசன மூர்த்திக்குத் தகுதியானவராகத் தன்னை உருவாக்கிக் கொள்ள வேண்டும். தகுதியை வளர்த்துக் கொள்ளாமல் மேற்கொள்ளப்படும் உபாசனை முழுமையான பலனை அளிக்காது.
                </p>
                <p className="gu-paragraph">
                  இன்றைய காலத்தில் பலர், உபாசனையின் அடிப்படை நெறிமுறைகளைப் புரிந்துகொள்ளாமல் பல்வேறு தேவதைகளின் உபாசனைகளை மேற்கொள்ள முயல்கின்றனர். அதில் எதிர்பார்த்த பலன் கிடைக்காதபோது, குருவையும், அவர் அளித்த தீட்சையையும், அதன் முறையையும் குறை கூறுகின்றனர்.
                </p>
                <p className="gu-paragraph">
                  ஆனால், உண்மையில் அது குருவின் குற்றமோ, தீட்சையின் குற்றமோ அல்ல. அந்த உபாசனைக்கு உரிய மனப்பக்குவம், ஒழுக்கம் மற்றும் தகுதியை உபாசகர் தம்முள் வளர்த்துக் கொள்ளாததே அதன் காரணமாகும்.
                </p>
              </div>
            </section>

            <div className="gu-fade-in">
              <WisdomQuoteCard 
                quote="“ஒரு தெய்வத்தின் உபாசனையைத் தொடங்குவதற்கு முன், அந்த உபாசன மூர்த்தியின் வரலாறு, தத்துவம், குணநலன்கள், விருப்பங்கள், நெறிமுறைகள் ஆகியவற்றை நன்கு அறிந்து கொள்ள வேண்டும். பின்னர், அதற்கு ஏற்றவாறு தமது எண்ணம், சொல், செயல், பழக்கவழக்கங்கள் மற்றும் வாழ்க்கை முறையை மாற்றிக் கொள்ள வேண்டும். அப்போதுதான் உபாசனை சித்தியாகும்.”" 
                author="ஸ்ரீ பள்ளூர் வாராஹிதாசன்"
              />
            </div>

            <section className="gu-article-section gu-fade-in">
              <SectionTitle title="உபாசனை உதாரணம்: வாலை உபாசனை" />
              <div className="gu-article-card gu-split-card">
                <div className="gu-card-text">
                  <p className="gu-paragraph">
                    உதாரணமாக, வாலை உபாசனையை மேற்கொள்பவர், வாலையை ஒரு குழந்தையாகவே பாவித்து உபாசனை செய்ய வேண்டும். அவ்வாறு உபாசனை செய்து கொண்டிருக்கும் ஒருவர், உலகியல் ஆசைகளுக்கும் காம எண்ணங்களுக்கும் அடிமையாக இருந்தால், அந்த உபாசனையின் சித்தி எளிதில் கைகூடாது.
                  </p>
                  <p className="gu-paragraph">
                    இதன் உட்பொருள், குழந்தையின் தூய்மை போன்ற மனநிலையுடன், வயதிற்கேற்ற ஒழுக்கமும் பக்குவமும் கொண்டு உபாசனையை மேற்கொள்ள வேண்டும் என்பதாகும்.
                  </p>
                </div>
                <div className="gu-card-image-wrapper">
                  <div className="gu-temple-image-frame">
                    <img src={varahiTemple} alt="Sri Varahi Temple Sanctum" className="gu-temple-img" />
                    <div className="gu-image-caption">பள்ளூர் ஸ்ரீ கோட்டை வாராஹி சந்நிதி</div>
                  </div>
                </div>
              </div>
            </section>

            <section className="gu-article-section gu-fade-in">
              <SectionTitle title="காலக் கணிதமும் வழிபாட்டு நெறிமுறைகளும்" />
              <div className="gu-article-card">
                <p className="gu-paragraph">
                  மேலும், உபாசனையைச் சரியான முறையில் செயல்படுத்த, காலக் கணித அறிவு அவசியம். அது பஞ்சபட்சி சாஸ்திரமாக இருக்கலாம், ஓரை முறையாக இருக்கலாம், ஜாமக்கோளாக இருக்கலாம், நாடி ஜோதிடமாக இருக்கலாம். இவற்றில் ஏதேனும் ஒன்றில் ஆழ்ந்த தேர்ச்சி பெற்றிருப்பது சிறந்தது.
                </p>
                <p className="gu-paragraph">
                  எல்லா முறைகளையும் ஒரே நேரத்தில் கற்றுத் தேர்ந்து செயல்படுத்த முயல்வது அவசியமல்ல. ஒரு முறையில் தெளிவும் தேர்ச்சியும் பெறுவதே உயர்ந்த பயனை அளிக்கும்.
                </p>
                <p className="gu-paragraph">
                  அதேபோல், உபாசனை செய்யும் தெய்வத்திற்கு உகந்தவை எவை, உகந்ததல்லாதவை எவை என்பதை அறிந்திருக்க வேண்டும். மலர்கள், நைவேத்தியங்கள், வாசனைத் திரவியங்கள், நிறங்கள், காலம், திசை, பூஜை முறைகள் என அனைத்திலும் தெளிவு பெறுவது அவசியம்.
                </p>
              </div>
            </section>

            <section className="gu-immersive-section gu-fade-in" style={{ backgroundImage: `url(${templeBg})` }}>
              <div className="gu-immersive-overlay"></div>
              <div className="gu-immersive-content">
                <blockquote className="gu-immersive-quote">
                  "உபாசனை என்பது மந்திர ஜபம் மட்டுமல்ல; அது ஒரு வாழ்க்கை முறையாகும்!"
                </blockquote>
                <div className="gu-immersive-divider">
                  <span className="gu-immersive-line"></span>
                  <span className="gu-immersive-symbol">ॐ</span>
                  <span className="gu-immersive-line"></span>
                </div>
              </div>
            </section>

            <section className="gu-signature-container gu-fade-in">
              <div className="gu-signature-card">
                <div className="gu-signature-ornament">⚜️</div>
                <p className="gu-paragraph" style={{ color: '#F1E2CD', textAlign: 'center' }}>
                  தன்னை மாற்றிக் கொள்ளாதவன், தெய்வ அனுகிரகத்தை முழுமையாகப் பெற முடியாது. தன்னைத் தகுதிப்படுத்திக் கொண்டவனே உபாசனையின் சித்தியையும், தெய்வ அருளின் பரிபூரண அனுபவத்தையும் பெறுவான்.
                </p>
                <p className="gu-sig-think">சிந்தியுங்கள்...</p>
                <p className="gu-sig-salutation">ஜெய் வாராஹி!</p>
                <div className="gu-sig-author-group">
                  <p className="gu-sig-respect">அடியேன்,</p>
                  <p className="gu-sig-name">ஸ்ரீ பள்ளூர் வாராஹிதாசன்</p>
                </div>
                <div className="gu-signature-footer">குரு உபதேசம்</div>
              </div>
            </section>

          </article>
        </div>
      </main>

      <footer className="gu-footer">
        <div className="gu-footer-container">
          <div className="gu-footer-brand">
            <h4 className="gu-footer-title">ஸ்ரீ ஜெய் வாராஹி பீடம்</h4>
            <p className="gu-footer-desc">
              பள்ளூர் கிராமத்தில் அன்னை வாராஹியின் ஆசியுடன் ஆன்மீகப் பணிகளையும், சமூக நற்பணிகளையும் மேற்கொண்டு வரும் புண்ணியத் திருத்தலம்.
            </p>
          </div>
          <div className="gu-footer-links">
            <h5 className="gu-footer-heading">வழிபாட்டுப் பக்கங்கள்</h5>
            <ul>
              <li><a href="#mantras">வாராஹி மந்திரங்கள்</a></li>
              <li><a href="#pooja">பூஜை வழிமுறைகள்</a></li>
              <li><a href="#festivals">விழாக்கள்</a></li>
            </ul>
          </div>
          <div className="gu-footer-contact">
            <h5 className="gu-footer-heading">தொடர்புக்கு</h5>
            <p><i className="fa-solid fa-location-dot"></i> பள்ளூர், அரக்கோணம் தாலுகா, ராணிப்பேட்டை மாவட்டம்</p>
            <p><i className="fa-solid fa-phone"></i> +91 XXXXXXXXXX</p>
            <p><i className="fa-solid fa-envelope"></i> contact@jaivarahi.org</p>
          </div>
        </div>
        <div className="gu-footer-bottom">
          <p>© {new Date().getFullYear()} Jaivarahi.org. அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.</p>
        </div>
      </footer>
    </div>
  );
};

export default GuruUpadesam;
