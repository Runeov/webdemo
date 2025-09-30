const servicesData = [
  { title: 'UX/UI Design', desc: 'Intuitive interfaces using modern design systems.', icon: '🎨', delay: '0s' },
  { title: 'React Development', desc: 'Dynamic, performant SPAs with state management.', icon: '⚛️', delay: '0.2s' },
  { title: 'Tailwind CSS v4', desc: 'Utility-first styling for rapid, consistent builds.', icon: '💨', delay: '0.4s' },
];

function Services() {
  return (
    <div className="container mx-auto px-4 @sm:px-6 @lg:px-8">
      <h2 className="text-4xl font-bold text-center mb-12 fade-in">Our Services</h2>
      <div className="grid grid-cols-1 @md:grid-cols-3 gap-8">
        {servicesData.map((service, i) => (
          <div key={i} className="card card-hover fade-in" style={{ transitionDelay: service.delay }}>
            <div className="text-4xl mb-4">{service.icon}</div>
            <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
            <p className="text-neutral-600 dark:text-neutral-400">{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;