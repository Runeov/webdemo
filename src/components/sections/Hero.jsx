function Hero() {
  return (
    <div className="min-h-screen flex items-center justify-center hero-gradient text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black/30"></div>
      <img 
        src="https://source.unsplash.com/1920x1080/?abstract,blue" 
        alt="Hero background - Modern web development" 
        className="absolute inset-0 w-full h-full object-cover" 
      />
      <div className="relative z-10 container text-center px-4">
        <h1 className="text-5xl @md:text-7xl font-bold mb-6 fade-in">Modern Web Solutions</h1>
        <p className="text-xl @md:text-2xl mb-8 max-w-3xl mx-auto fade-in">Expertise in UX/UI, React, and Tailwind CSS v4 for scalable, user-centric applications.</p>
        <button className="btn-primary fade-in">Start Your Project</button>
      </div>
      <button className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce fade-in" aria-label="Scroll down">
        ↓
      </button>
    </div>
  );
}

export default Hero;