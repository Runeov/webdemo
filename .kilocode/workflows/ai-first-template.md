---
trigger: model_decision
description: Rules for building AI-first, LLM-ready website templates with robust error handling and failsafes
---

# AI-First Template Development Rules

## Project Purpose

This project is designed as a **universal skeleton template** for rapid client website deployment. The workflow is:

1. Sales team conducts client call
2. LLM processes call transcript
3. LLM populates template with client-specific content
4. Site is ready to ship within moments

**Critical Requirement**: The template must be bulletproof against invalid inputs, missing data, and edge cases to ensure zero errors regardless of LLM output quality.

## Core Principles

### 1. Defensive Programming
- **NEVER assume data exists** - always validate before use
- **NEVER assume data format** - always sanitize and normalize
- **NEVER trust external input** - validate everything from LLM
- Every component must handle `null`, `undefined`, empty strings, and malformed data gracefully

### 2. Fail-Safe Architecture
- Components must render with placeholder content if data is missing
- Invalid images must fall back to placeholder images or gradients
- Broken links must be disabled or point to safe defaults
- Forms must validate all inputs before submission

### 3. Zero-Error Guarantee
- No component should throw runtime errors
- No broken images or 404s visible to end users
- No console errors in production
- Graceful degradation for all features

## Data Validation Rules

### Input Sanitization
```javascript
// ALWAYS sanitize text inputs
const sanitizeText = (text, fallback = '') => {
  if (!text || typeof text !== 'string') return fallback;
  return text.trim().slice(0, 500); // Limit length
};

// ALWAYS validate URLs
const sanitizeUrl = (url, fallback = '#') => {
  if (!url || typeof url !== 'string') return fallback;
  try {
    new URL(url);
    return url;
  } catch {
    return fallback;
  }
};

// ALWAYS validate email
const sanitizeEmail = (email, fallback = '') => {
  if (!email || typeof email !== 'string') return fallback;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) ? email : fallback;
};

// ALWAYS validate phone
const sanitizePhone = (phone, fallback = '') => {
  if (!phone || typeof phone !== 'string') return fallback;
  return phone.replace(/[^\d+\-() ]/g, '').slice(0, 20);
};
```

### Array Validation
```javascript
// ALWAYS validate arrays before mapping
const safeArray = (arr, minLength = 0) => {
  if (!Array.isArray(arr)) return [];
  return arr.filter(item => item != null).slice(0, 100); // Limit size
};

// Usage
{safeArray(items).map((item, index) => (
  <Component key={item?.id || index} data={item} />
))}
```

### Object Validation
```javascript
// ALWAYS validate objects before accessing properties
const safeObject = (obj, defaults = {}) => {
  if (!obj || typeof obj !== 'object') return defaults;
  return { ...defaults, ...obj };
};
```

## Component Error Boundaries

### Required Error Boundary Wrapper
Every major section MUST be wrapped in an error boundary:

```javascript
// ErrorBoundary.jsx
import { Component } from 'react';

class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Component error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="p-8 text-center">
          <p className="text-neutral-600 dark:text-neutral-400">
            This section is temporarily unavailable.
          </p>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
```

### Usage in App
```javascript
<ErrorBoundary fallback={<SectionFallback />}>
  <Hero data={heroData} />
</ErrorBoundary>
```

## Image Handling Rules

### Safe Image Component
```javascript
// SafeImage.jsx
import { useState } from 'react';

const SafeImage = ({ 
  src, 
  alt = 'Image', 
  fallback = '/images/placeholder.svg',
  className = '',
  ...props 
}) => {
  const [imgSrc, setImgSrc] = useState(src || fallback);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (!hasError) {
      setHasError(true);
      setImgSrc(fallback);
    }
  };

  // Validate src is a string
  const validSrc = typeof imgSrc === 'string' ? imgSrc : fallback;

  return (
    <img
      src={validSrc}
      alt={typeof alt === 'string' ? alt : 'Image'}
      onError={handleError}
      className={className}
      loading="lazy"
      {...props}
    />
  );
};

export default SafeImage;
```

### Gradient Fallback for Missing Images
```javascript
// Use gradient backgrounds when images fail
const getGradientFallback = (index = 0) => {
  const gradients = [
    'bg-gradient-to-br from-blue-500 to-purple-600',
    'bg-gradient-to-br from-green-500 to-teal-600',
    'bg-gradient-to-br from-orange-500 to-red-600',
    'bg-gradient-to-br from-pink-500 to-rose-600',
  ];
  return gradients[index % gradients.length];
};
```

## Form Validation Rules

### Client-Side Validation
```javascript
// ALWAYS validate forms before submission
const validateContactForm = (data) => {
  const errors = {};
  
  if (!data.name || data.name.trim().length < 2) {
    errors.name = 'Name must be at least 2 characters';
  }
  
  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Valid email is required';
  }
  
  if (!data.message || data.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters';
  }
  
  return { isValid: Object.keys(errors).length === 0, errors };
};
```

### Safe Form Submission
```javascript
const handleSubmit = async (e) => {
  e.preventDefault();
  
  const { isValid, errors } = validateContactForm(formData);
  if (!isValid) {
    setFormErrors(errors);
    return;
  }
  
  try {
    // Sanitize before sending
    const sanitizedData = {
      name: sanitizeText(formData.name),
      email: sanitizeEmail(formData.email),
      message: sanitizeText(formData.message, ''),
    };
    
    // Submit logic here
  } catch (error) {
    console.error('Form submission error:', error);
    setFormErrors({ submit: 'Failed to submit. Please try again.' });
  }
};
```

## Content Placeholder Rules

### Default Content Structure
Every section MUST have default/placeholder content:

```javascript
// defaults.js
export const DEFAULT_HERO = {
  title: 'Welcome to Our Company',
  subtitle: 'We deliver exceptional solutions',
  cta: 'Get Started',
  ctaLink: '#contact',
};

export const DEFAULT_ABOUT = {
  title: 'About Us',
  description: 'We are a team of passionate professionals dedicated to excellence.',
  image: '/images/placeholder-about.svg',
};

export const DEFAULT_SERVICE = {
  title: 'Our Service',
  description: 'High-quality service tailored to your needs.',
  icon: '🔧',
};

export const DEFAULT_TEAM_MEMBER = {
  name: 'Team Member',
  role: 'Professional',
  bio: 'Experienced professional dedicated to client success.',
  image: '/images/placeholder-avatar.svg',
  social: {},
};
```

### Usage with Fallbacks
```javascript
const Hero = ({ data = {} }) => {
  const content = {
    title: sanitizeText(data.title, DEFAULT_HERO.title),
    subtitle: sanitizeText(data.subtitle, DEFAULT_HERO.subtitle),
    cta: sanitizeText(data.cta, DEFAULT_HERO.cta),
    ctaLink: sanitizeUrl(data.ctaLink, DEFAULT_HERO.ctaLink),
  };
  
  return (
    <section>
      <h1>{content.title}</h1>
      <p>{content.subtitle}</p>
      <a href={content.ctaLink}>{content.cta}</a>
    </section>
  );
};
```

## Link Safety Rules

### Safe Link Component
```javascript
// SafeLink.jsx
const SafeLink = ({ href, children, external = false, ...props }) => {
  const safeHref = sanitizeUrl(href, '#');
  const isExternal = external || safeHref.startsWith('http');
  
  // Disable link if invalid
  if (safeHref === '#') {
    return (
      <span className="cursor-not-allowed opacity-50" {...props}>
        {children}
      </span>
    );
  }
  
  return (
    <a
      href={safeHref}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      {...props}
    >
      {children}
    </a>
  );
};
```

## Data Structure Requirements

### LLM Input Schema
Define clear schemas for LLM-generated content:

```typescript
// types.ts
interface CompanyData {
  name: string;
  tagline?: string;
  description?: string;
  logo?: string;
  colors?: {
    primary?: string;
    secondary?: string;
  };
}

interface HeroData {
  title: string;
  subtitle?: string;
  cta?: string;
  ctaLink?: string;
  backgroundImage?: string;
}

interface ServiceData {
  id: string;
  title: string;
  description: string;
  icon?: string;
  image?: string;
}

interface TeamMemberData {
  id: string;
  name: string;
  role: string;
  bio?: string;
  image?: string;
  email?: string;
  social?: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
}

interface PortfolioItemData {
  id: string;
  title: string;
  description: string;
  image?: string;
  link?: string;
  tags?: string[];
}
```

## Testing Requirements

### Unit Tests for Validation
```javascript
// validation.test.js
describe('Input Sanitization', () => {
  test('sanitizeText handles null/undefined', () => {
    expect(sanitizeText(null)).toBe('');
    expect(sanitizeText(undefined)).toBe('');
  });
  
  test('sanitizeUrl rejects invalid URLs', () => {
    expect(sanitizeUrl('not a url')).toBe('#');
    expect(sanitizeUrl('javascript:alert(1)')).toBe('#');
  });
  
  test('sanitizeEmail validates format', () => {
    expect(sanitizeEmail('invalid')).toBe('');
    expect(sanitizeEmail('test@example.com')).toBe('test@example.com');
  });
});
```

### Component Tests
```javascript
// Hero.test.jsx
describe('Hero Component', () => {
  test('renders with missing data', () => {
    render(<Hero data={{}} />);
    expect(screen.getByText(DEFAULT_HERO.title)).toBeInTheDocument();
  });
  
  test('renders with null data', () => {
    render(<Hero data={null} />);
    expect(screen.getByText(DEFAULT_HERO.title)).toBeInTheDocument();
  });
  
  test('sanitizes malicious input', () => {
    const maliciousData = {
      title: '<script>alert("xss")</script>',
    };
    render(<Hero data={maliciousData} />);
    expect(screen.queryByText(/script/i)).not.toBeInTheDocument();
  });
});
```

## Performance Rules

### Lazy Loading
```javascript
// ALWAYS lazy load images
<img src={src} alt={alt} loading="lazy" />

// ALWAYS lazy load heavy components
const Portfolio = lazy(() => import('./sections/Portfolio'));
const Team = lazy(() => import('./sections/Team'));
```

### Memoization
```javascript
// ALWAYS memoize expensive computations
const processedData = useMemo(() => {
  return safeArray(rawData).map(item => ({
    ...item,
    title: sanitizeText(item.title),
    description: sanitizeText(item.description),
  }));
}, [rawData]);

// ALWAYS memoize callbacks
const handleClick = useCallback(() => {
  // handler logic
}, [dependencies]);
```

## Accessibility Rules

### ARIA Labels
```javascript
// ALWAYS provide aria-labels for interactive elements
<button aria-label="Open menu" onClick={handleMenu}>
  <MenuIcon />
</button>

// ALWAYS provide alt text for images
<SafeImage 
  src={image} 
  alt={sanitizeText(altText, 'Decorative image')} 
/>
```

### Keyboard Navigation
```javascript
// ALWAYS support keyboard navigation
<div
  role="button"
  tabIndex={0}
  onClick={handleClick}
  onKeyDown={(e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      handleClick();
    }
  }}
>
  Interactive Element
</div>
```

## Color Theme Safety

### Dynamic Color Validation
```javascript
// Validate hex colors from LLM
const isValidHexColor = (color) => {
  return /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(color);
};

const sanitizeColor = (color, fallback = '#3b82f6') => {
  if (!color || typeof color !== 'string') return fallback;
  return isValidHexColor(color) ? color : fallback;
};

// Apply with fallback
const primaryColor = sanitizeColor(data.colors?.primary, '#3b82f6');
```

## Deployment Checklist

Before considering template production-ready:

- [ ] All components have error boundaries
- [ ] All images use SafeImage component
- [ ] All links use SafeLink component
- [ ] All forms have validation
- [ ] All text inputs are sanitized
- [ ] All arrays are validated before mapping
- [ ] All objects have default values
- [ ] PropTypes or TypeScript types defined
- [ ] Unit tests cover edge cases
- [ ] E2E tests verify error handling
- [ ] No console errors in production build
- [ ] Lighthouse score > 90 for all metrics
- [ ] Works with completely empty data object
- [ ] Works with malformed data
- [ ] Works with missing images
- [ ] Works with invalid URLs

## LLM Integration Guidelines

### Expected Input Format
```json
{
  "company": {
    "name": "Client Company Name",
    "tagline": "Brief tagline",
    "description": "Company description",
    "logo": "https://example.com/logo.png"
  },
  "hero": {
    "title": "Main headline",
    "subtitle": "Supporting text",
    "cta": "Call to action text",
    "ctaLink": "#contact"
  },
  "services": [
    {
      "id": "service-1",
      "title": "Service Name",
      "description": "Service description",
      "icon": "🚀"
    }
  ],
  "team": [
    {
      "id": "member-1",
      "name": "John Doe",
      "role": "Position",
      "bio": "Brief bio",
      "image": "https://example.com/photo.jpg"
    }
  ],
  "portfolio": [
    {
      "id": "project-1",
      "title": "Project Name",
      "description": "Project description",
      "image": "https://example.com/project.jpg",
      "link": "https://project-url.com"
    }
  ],
  "contact": {
    "email": "contact@example.com",
    "phone": "+1234567890",
    "address": "123 Main St, City, State"
  }
}
```

### Validation on Ingestion
```javascript
// validateLLMInput.js
export const validateLLMInput = (input) => {
  const validated = {
    company: safeObject(input.company, DEFAULT_COMPANY),
    hero: safeObject(input.hero, DEFAULT_HERO),
    services: safeArray(input.services).map((s, i) => ({
      id: s.id || `service-${i}`,
      title: sanitizeText(s.title, DEFAULT_SERVICE.title),
      description: sanitizeText(s.description, DEFAULT_SERVICE.description),
      icon: sanitizeText(s.icon, DEFAULT_SERVICE.icon),
    })),
    team: safeArray(input.team).map((m, i) => ({
      id: m.id || `member-${i}`,
      name: sanitizeText(m.name, DEFAULT_TEAM_MEMBER.name),
      role: sanitizeText(m.role, DEFAULT_TEAM_MEMBER.role),
      bio: sanitizeText(m.bio, DEFAULT_TEAM_MEMBER.bio),
      image: sanitizeUrl(m.image, DEFAULT_TEAM_MEMBER.image),
      email: sanitizeEmail(m.email),
    })),
    portfolio: safeArray(input.portfolio).map((p, i) => ({
      id: p.id || `project-${i}`,
      title: sanitizeText(p.title, 'Project'),
      description: sanitizeText(p.description, ''),
      image: sanitizeUrl(p.image, '/images/placeholder-project.svg'),
      link: sanitizeUrl(p.link, '#'),
    })),
    contact: {
      email: sanitizeEmail(input.contact?.email),
      phone: sanitizePhone(input.contact?.phone),
      address: sanitizeText(input.contact?.address),
    },
  };
  
  return validated;
};
```

## Summary

This template MUST be bulletproof. Every component, every input, every interaction must handle edge cases gracefully. The goal is **zero runtime errors** regardless of what the LLM provides. When in doubt, fail safe with placeholder content rather than breaking the site.