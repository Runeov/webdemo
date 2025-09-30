const portfolioData = [
  { img: 'https://source.unsplash.com/400x300/?ecommerce', title: 'E-Commerce Platform', desc: 'Full-stack React app with Tailwind styling.', delay: '0s' },
  { img: 'https://source.unsplash.com/400x300/?dashboard', title: 'Admin Dashboard', desc: 'Interactive UX-focused control panel.', delay: '0.1s' },
  { img: 'https://source.unsplash.com/400x300/?mobile', title: 'Responsive Site', desc: 'Cross-device optimization with container queries.', delay: '0.2s' },
  { img: 'https://source.unsplash.com/400x300/?portfolio', title: 'Design Showcase', desc: 'Modern gallery with 3D transforms.', delay: '0.3s' },
];

function Portfolio() {
  return (
    <div className="container mx-auto px-4 @sm:px-6 @lg:px-8">
      <h2 className="text-4xl font-bold text-center mb-12 fade-in">Featured Portfolio</h2>
      <div className="grid grid-cols-1 @md:grid-cols-2 @lg:grid-cols-4 gap-6">
        {portfolioData.map((project, i) => (
          <div key={i} className="card card-hover overflow-hidden fade-in" style={{ transitionDelay: project.delay }}>
            <img src={project.img} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold mb-2">{project.title}</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">{project.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;