const navItems = ['Home', 'Tournaments', 'Leaderboard', 'Community']

function App() {
  return (
    <main className="site-shell">
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />

      <header className="topbar">
        <a className="brand" href="/" aria-label="TMT Official home">
          <span className="brand-mark">T</span>
          <span className="brand-name">TMT<span>OFFICIAL</span></span>
        </a>
        <nav aria-label="Main navigation">
          {navItems.map((item) => (
            <a key={item} href={item === 'Home' ? '/' : '#'}>{item}</a>
          ))}
        </nav>
        <a className="login-link" href="#login">SIGN IN <span aria-hidden="true">↗</span></a>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow"><span /> INDIA ESPORTS COMMUNITY</p>
          <h1>YOUR GAME.<br /><em>YOUR LEGACY.</em></h1>
          <p className="hero-description">
            Compete with your squad. Earn your place. The next chapter of
            TMT OFFICIAL starts here.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="#tournaments">EXPLORE TOURNAMENTS <span>↗</span></a>
            <a className="secondary-button" href="#community">JOIN COMMUNITY</a>
          </div>
          <div className="hero-stats" aria-label="Community highlights">
            <div><strong>FREE FIRE</strong><span>COMPETITIVE</span></div>
            <div><strong>INDIA</strong><span>REGION</span></div>
            <div><strong>YOUR SQUAD</strong><span>YOUR STORY</span></div>
          </div>
        </div>

        <div className="hero-art" aria-label="Esports visual placeholder">
          <div className="art-ring ring-one" />
          <div className="art-ring ring-two" />
          <div className="art-grid" />
          <div className="art-label">TMT / 026</div>
          <div className="art-monogram">T<span>M</span>T</div>
          <div className="art-caption"><span>READY</span><br />FOR THE NEXT ROUND</div>
        </div>
      </section>

      <section className="bottom-strip" id="tournaments">
        <div><span className="strip-index">01 / NEXT UP</span><strong>TOURNAMENTS</strong></div>
        <p>Competitive matches are coming soon.</p>
        <span className="status"><i /> FOUNDATION PHASE</span>
      </section>
    </main>
  )
}

export default App
