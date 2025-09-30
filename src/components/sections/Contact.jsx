function Contact() {
  return (
    <div className="container mx-auto px-4 @sm:px-6 @lg:px-8 max-w-4xl">
      <h2 className="text-4xl font-bold text-center mb-12 fade-in">Let's Collaborate</h2>
      <div className="grid grid-cols-1 @md:grid-cols-2 gap-12">
        <div className="fade-in">
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Your Name" className="w-full p-4 border border-neutral-300 dark:border-neutral-600 rounded-md bg-white dark:bg-neutral-900 focus:ring-2 focus:ring-primary-500 focus:border-transparent" required />
            <input type="email" placeholder="Your Email" className="w-full p-4 border border-neutral-300 dark:border-neutral-600 rounded-md bg-white dark:bg-neutral-900 focus:ring-2 focus:ring-primary-500 focus:border-transparent" required />
            <textarea placeholder="Tell us about your project..." rows="5" className="w-full p-4 border border-neutral-300 dark:border-neutral-600 rounded-md bg-white dark:bg-neutral-900 focus:ring-2 focus:ring-primary-500 focus:border-transparent" required></textarea>
            <button type="submit" className="btn-primary w-full">Send Inquiry</button>
          </form>
        </div>
        <div className="fade-in">
          <h3 className="text-2xl font-semibold mb-6">Reach Out</h3>
          <div className="space-y-4 text-lg">
            <p>Email: <a href="mailto:hello@webdevco.com" className="text-primary-600 hover:underline">hello@webdevco.com</a></p>
            <p>Phone: <a href="tel:+15551234567" className="text-primary-600 hover:underline">+1 (555) 123-4567</a></p>
            <div className="flex space-x-4 pt-4">
              <a href="#" className="text-primary-600 hover:text-primary-700 transition-colors" aria-label="LinkedIn">LinkedIn</a>
              <a href="#" className="text-primary-600 hover:text-primary-700 transition-colors" aria-label="GitHub">GitHub</a>
              <a href="#" className="text-primary-600 hover:text-primary-700 transition-colors" aria-label="Twitter">Twitter</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;