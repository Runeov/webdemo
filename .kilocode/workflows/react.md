# React rules

- Use functional components with hooks instead of class components
- Use custom hooks for reusable logic
- Use the Context API for state management when needed
- Use proper prop validation with PropTypes
- Use React.memo for performance optimization when necessary
- Use fragments to avoid unnecessary DOM elements
- Use proper list rendering with keys
- Prefer composition over inheritance

To comly with a11y rules

<button type="button" className="btn hover:btn-hover">Get Started</button>
 <button className="btn hover:btn-hover">Get Started</button>


   <section id="portfolio" className="py-(--spacing-16) bg-(--color-neutral-200) dark:bg-(--color-neutral-800)">


  const uniqueId = useId();
  return (
    <section id={uniqueId} className="py-(--spacing-16) bg-(--color-neutral-200) dark:bg-(--color-neutral-800)">