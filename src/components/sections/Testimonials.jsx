const testimonialsData = [
  { quote: 'Rhododendron Norge har de vakreste plantene! Min Nova Zembla blomstrer fantastisk hvert år. Perfekt størrelse for min lille hage. Anbefales!', author: 'Anne H., Hageentusiast', delay: '0s' },
  { quote: 'Utmerket kvalitet og service! Plantene kom godt pakket og med detaljerte pleieinstruksjoner. Min hage har aldri sett bedre ut!', author: 'Per A., Privat hageeier', delay: '0.2s' },
  { quote: 'Endelig fant jeg sunne, hardføre rhododendron som tåler norsk klima! Blomstringen er helt spektakulær. Kommer tilbake for mer!', author: 'Kari L., Landskapsarkitekt', delay: '0.4s' },
];

function Testimonials() {
  // Debug logging to identify issues
  console.log('Testimonials component rendering');
  console.log('Testimonials data:', testimonialsData);
  console.log('CSS classes available:', {
    fadeIn: document.querySelector('.fade-in'),
    card: document.querySelector('.card')
  });

  return (
    <div className="container mx-auto px-4 @sm:px-6 @lg:px-8">
      <h2 className="text-4xl font-bold text-center mb-12 fade-in">Hva Våre Kunder Sier</h2>
      <div className="grid grid-cols-1 @md:grid-cols-3 gap-8">
        {testimonialsData.map((t, i) => {
          console.log(`Rendering testimonial ${i}:`, t);
          return (
            <div key={i} className="card fade-in" style={{ transitionDelay: t.delay }}>
              <p className="italic mb-4 text-neutral-700 dark:text-neutral-300">"{t.quote}"</p>
              <p className="font-semibold text-right text-primary-600">— {t.author}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Testimonials;