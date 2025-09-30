function About() {
  return (
    <div className="container mx-auto px-4 @sm:px-6 @lg:px-8">
      <div className="grid @md:grid-cols-2 gap-12 items-center">
        <div className="order-2 @md:order-1 fade-in">
          <h2 className="text-4xl font-bold mb-6">About WebDev Co.</h2>
          <p className="text-lg mb-6 leading-relaxed">We specialize in crafting intuitive digital experiences that blend cutting-edge React development with thoughtful UX/UI design. Using Tailwind CSS v4, we ensure your site is fast, accessible, and beautifully responsive.</p>
          <ul className="space-y-2 text-neutral-600 dark:text-neutral-400 fade-in">
            <li>• 5+ years building scalable web apps</li>
            <li>• Emphasis on performance and inclusivity</li>
            <li>• CSS-first theming for maintainable code</li>
          </ul>
        </div>
        <div className="order-1 @md:order-2 fade-in">
          <img 
            src="https://source.unsplash.com/600x400/?developer,team" 
            alt="Our team collaborating on web projects" 
            className="rounded-lg shadow-md w-full" 
          />
        </div>
      </div>
    </div>
  );
}

export default About;