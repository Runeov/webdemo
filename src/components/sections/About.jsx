import SafeImage from '../SafeImage.jsx';

function About() {
  return (
    <div className="container mx-auto px-4 @sm:px-6 @lg:px-8">
      <div className="grid @md:grid-cols-2 gap-12 items-center">
        <div className="order-2 @md:order-1 fade-in">
          <h2 className="text-4xl font-bold mb-6">Om Rhododendron Norge</h2>
          <p className="text-lg mb-6 leading-relaxed">Vi er Norges ledende spesialist på rhododendron planter. Med over 15 års erfaring har vi hjulpet tusenvis av hageentusiaster med å skape vakre, fargerike hager som blomstrer år etter år.</p>
          <ul className="space-y-2 text-neutral-600 dark:text-neutral-400 fade-in">
            <li>✅ <strong>15+ års erfaring</strong> – Spesialisert på rhododendron siden 2008</li>
            <li>✅ <strong>Norsk klima-testet</strong> – Alle planter er tilpasset norske værforhold</li>
            <li>✅ <strong>100% blomstringsgaranti</strong> – Erstatter planter som ikke blomstrer</li>
          </ul>
        </div>
        <div className="order-1 @md:order-2 fade-in">
          <SafeImage
            src="https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=600&h=400&fit=crop&auto=format&q=80"
            alt="Vakre rhododendron planter i norsk hage"
            fallback="/images/placeholder.svg"
            className="rounded-lg shadow-md w-full"
          />
        </div>
      </div>
    </div>
  );
}

export default About;