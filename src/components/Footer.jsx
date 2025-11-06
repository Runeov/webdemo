function Footer() {
  return (
    <footer className="bg-(--color-neutral-900) text-(--color-neutral-100) py-(--spacing-4) text-center">
      <div className="space-y-2">
        <p>&copy; 2025 Rhododendron Norge. Alle rettigheter forbeholdt.</p>
        <p className="text-sm text-neutral-400">Klar for å forskjønne hagen din? <a href="#contact" className="text-primary-400 hover:underline">Bestill dine planter i dag</a></p>
      </div>
    </footer>
  );
}

export default Footer;