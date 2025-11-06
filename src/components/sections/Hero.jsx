import Portfolio from './Portfolio.jsx';

function Hero() {
  return (
    <div className="hero-gradient text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black/30"></div>
      <img
        src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1920&h=1080&fit=crop&auto=format&q=80"
        alt="Vakre rhododendron planter i full blomst"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />
      <div className="relative z-10 w-full">
        <div className="container text-center px-4 pt-16">
          <h1 className="text-5xl @md:text-7xl font-bold mb-6 fade-in">Naturens råevarer tilgjengelig hær</h1>
          <p className="text-xl @md:text-2xl mb-8 max-w-3xl mx-auto fade-in">Oppdag vår eksklusive samling av rhododendron planter. Hardføre, fargerike og enkle å dyrke - perfekt for norsk klima. Blomstrer år etter år med minimal pleie!</p>
          <button className="btn-primary fade-in mb-16">Bestill Dine Planter Nå</button>
        </div>

        {/* Portfolio Section underneath the button */}
        <div className="bg-white dark:bg-neutral-900 py-16">
          <Portfolio />
        </div>
      </div>
      <button className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce fade-in" aria-label="Scroll down">
        ↓
      </button>
    </div>
  );
}

export default Hero;