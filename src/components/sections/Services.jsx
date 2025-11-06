const servicesData = [
  { title: 'Rhododendron Yakushimanum', desc: 'Kompakt, hardfør sort perfekt for små hager. Rosa knopper som åpner seg til hvite blomster. Blomstrer fra mai til juni.', icon: '🌸', delay: '0s' },
  { title: 'Rhododendron Nova Zembla', desc: 'Klassisk, pålitelig sort med store rosa blomster. Tåler norsk vinter godt og blomstrer rikt hvert år.', icon: '🌺', delay: '0.2s' },
  { title: 'Rhododendron Cunningham\'s White', desc: 'Elegant hvit blomstring med gule støvbærere. Dufter svakt og tiltrekker seg sommerfugler og bier.', icon: '💐', delay: '0.4s' },
];

function Services() {
  return (
    <div className="container mx-auto px-4 @sm:px-6 @lg:px-8">
      <h2 className="text-4xl font-bold text-center mb-12 fade-in">Våre Populære Rhododendron Sorter</h2>
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