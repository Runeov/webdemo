const testimonialsData = [
  { quote: 'Transformed our outdated site into a modern React masterpiece—highly recommend!', author: 'Jane D., Startup Founder', delay: '0s' },
  { quote: 'Exceptional UX/UI work that boosted user engagement by 40%.', author: 'Mike S., Marketing Lead', delay: '0.2s' },
  { quote: 'Tailwind v4 integration made our project scalable and beautiful.', author: 'Sarah L., CTO', delay: '0.4s' },
];

function Testimonials() {
  return (
    <div className="container mx-auto px-4 @sm:px-6 @lg:px-8">
      <h2 className="text-4xl font-bold text-center mb-12 fade-in">Client Testimonials</h2>
      <div className="grid grid-cols-1 @md:grid-cols-3 gap-8">
        {testimonialsData.map((t, i) => (
          <div key={i} className="card fade-in" style={{ transitionDelay: t.delay }}>
            <p className="italic mb-4 text-neutral-700 dark:text-neutral-300">"{t.quote}"</p>
            <p className="font-semibold text-right text-primary-600">— {t.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;