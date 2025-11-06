function Contact() {
  return (
    <div className="container mx-auto px-4 @sm:px-6 @lg:px-8 max-w-4xl">
      <h2 className="text-4xl font-bold text-center mb-12 fade-in">Bestill Dine Rhododendron Nå</h2>
      <div className="grid grid-cols-1 @md:grid-cols-2 gap-12">
        <div className="fade-in">
          <div className="bg-primary-50 dark:bg-primary-900/20 p-6 rounded-lg mb-6">
            <p className="text-center text-lg font-semibold text-primary-800 dark:text-primary-200">
              🌸 Vårkampanje: 20% rabatt på alle bestillinger over 1000 kr!
            </p>
          </div>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Ditt navn *" className="w-full p-4 border border-neutral-300 dark:border-neutral-600 rounded-md bg-white dark:bg-neutral-900 focus:ring-2 focus:ring-primary-500 focus:border-transparent" required />
            <input type="email" placeholder="Din e-post *" className="w-full p-4 border border-neutral-300 dark:border-neutral-600 rounded-md bg-white dark:bg-neutral-900 focus:ring-2 focus:ring-primary-500 focus:border-transparent" required />
            <textarea placeholder="Hvilke planter ønsker du? Antall, størrelse og leveringsadresse..." rows="5" className="w-full p-4 border border-neutral-300 dark:border-neutral-600 rounded-md bg-white dark:bg-neutral-900 focus:ring-2 focus:ring-primary-500 focus:border-transparent" required></textarea>
            <button type="submit" className="btn-primary w-full text-lg py-4">Send Bestilling</button>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 text-center">* Vi bekrefter bestillingen innen 24 timer</p>
          </form>
        </div>
        <div className="fade-in">
          <h3 className="text-2xl font-semibold mb-6">Kontaktinformasjon</h3>
          <div className="space-y-4 text-lg">
            <div className="flex items-center space-x-3">
              <span className="text-2xl">📧</span>
              <div>
                <p className="font-semibold">E-post</p>
                <a href="mailto:info@rhododendron.no" className="text-primary-600 hover:underline">info@rhododendron.no</a>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-2xl">📞</span>
              <div>
                <p className="font-semibold">Telefon</p>
                <a href="tel:+4798765432" className="text-primary-600 hover:underline">+47 98 76 54 32</a>
              </div>
            </div>
            <div className="pt-4">
              <p className="font-semibold mb-3">Åpningstider:</p>
              <p className="text-neutral-600 dark:text-neutral-400">Mandag - Fredag: 09:00 - 17:00</p>
              <p className="text-neutral-600 dark:text-neutral-400">Lørdag: 10:00 - 15:00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;