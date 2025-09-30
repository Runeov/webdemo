import { forwardRef } from 'react';

const Section = forwardRef(({ id, children, className = '' }, ref) => (
  <section id={id} ref={ref} className={`py-20 ${className}`}>
    {children}
  </section>
));

Section.displayName = 'Section';

export default Section;