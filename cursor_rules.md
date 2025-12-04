# Cursor Rules

## Project Context
This is a Next.js 16 App Router application for House Whisperer, an AI-powered home inspection platform. The project uses TypeScript, Tailwind CSS v4, shadcn/ui components, React 19, and follows modern React patterns.

## Code Structure

### Components
- Use functional components with TypeScript
- Keep components small and focused (ideally < 200 lines)
- One component per file
- Export components as default for page components, named exports for reusable components
- Use PascalCase for component names (e.g., `Button`, `HomePage`, `NavigationBar`)
- For shadcn/ui components, follow the existing pattern: export both the component and its variants (e.g., `Button`, `buttonVariants`)

### Server vs Client Components
- **Default to Server Components** - They're faster and reduce bundle size
- Use `"use client"` directive ONLY when you need:
  - React hooks (useState, useEffect, etc.)
  - Browser APIs (window, document, localStorage, etc.)
  - Event handlers (onClick, onChange, etc.)
  - Context providers
  - Third-party libraries that require client-side rendering
- Keep client components as small as possible - move logic to server components when possible

## TypeScript

### Type Definitions
- Use TypeScript for all files (`.ts` for utilities, `.tsx` for components)
- Define types in the same file for simple cases, or in `/types` folder for shared types
- Use `interface` for object shapes, `type` for unions/intersections
- Prefer `React.ComponentProps<"element">` for extending HTML element props
- Use `VariantProps` from `class-variance-authority` for component variants

### Type Safety
- Avoid `any` - use `unknown` if type is truly unknown, then narrow it
- Use proper typing for props, state, and function returns
- Leverage TypeScript's inference when possible

## Import Organization

1. React and Next.js imports first
2. Third-party libraries (grouped logically)
3. Internal utilities (`@/lib/utils`)
4. Components (`@/components`)
5. Types and interfaces
6. Relative imports last

Example:
```typescript
import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import type { User } from "@/types/user"
```

### Absolute Imports
- Always use `@/` alias for internal imports (configured in tsconfig.json)
- Never use relative imports like `../../components` - use `@/components` instead

## File Organization

```
app/
├── app/                    # Next.js App Router routes
│   ├── layout.tsx         # Root layout (metadata, fonts, providers)
│   ├── page.tsx           # Home page
│   └── [route]/           # Dynamic routes
├── components/            # React components
│   ├── ui/                # shadcn/ui components
│   └── [feature]/         # Feature-specific components
├── lib/                   # Utility functions
│   └── utils.ts           # Helper functions (cn, formatters, etc.)
├── types/                 # TypeScript type definitions
├── public/                # Static assets
└── hooks/                 # Custom React hooks (if needed)
```

## Next.js App Router Specifics

### Routes and Pages
- Use `app/` directory structure (not `pages/`)
- File-based routing: `app/about/page.tsx` → `/about`
- Dynamic routes: `app/blog/[slug]/page.tsx` → `/blog/:slug`
- Route groups: `app/(marketing)/about/page.tsx` for organization
- Use `layout.tsx` for shared layouts, `page.tsx` for route content

### Metadata and SEO
- Export `metadata` object from layout.tsx or page.tsx
- Use Next.js `Metadata` type from `next`
- Include title, description, and Open Graph tags for important pages
- Use `generateMetadata` function for dynamic metadata

### Data Fetching
- Use `async/await` in Server Components for data fetching
- Use `fetch` with Next.js caching: `fetch(url, { next: { revalidate: 3600 } })`
- For client-side data fetching, use `useEffect` or React Query/SWR
- Handle loading and error states appropriately

### Images and Assets
- Use `next/image` component for all images (not `<img>`)
- Place static assets in `public/` folder
- Optimize images before adding to public folder
- Use appropriate `width`, `height`, and `alt` props

### Navigation
- Use `next/link` for internal navigation (not `<a>` tags)
- Use `useRouter()` from `next/navigation` for programmatic navigation
- Prefetch links automatically (Next.js default behavior)

## Styling

### Tailwind CSS v4
- Use Tailwind utility classes for styling
- Use the `cn()` utility from `@/lib/utils` for conditional classes
- Follow the existing design system (colors, spacing, typography)
- Use CSS variables for theme colors (defined in globals.css)
- Use responsive prefixes: `sm:`, `md:`, `lg:`, `xl:`, `2xl:`
- Use dark mode classes: `dark:bg-background`

### shadcn/ui Components
- Use shadcn/ui components when available (Button, Card, Dialog, etc.)
- Customize components by editing files in `components/ui/`
- Follow shadcn/ui patterns: use `asChild` prop for composition
- Use `class-variance-authority` (cva) for component variants
- Use `cn()` utility for merging class names

### Component Styling Patterns
- Use semantic color tokens: `bg-background`, `text-foreground`, `border-border`
- Maintain consistent spacing using Tailwind scale
- Use consistent border radius: `rounded-md` for cards, `rounded-lg` for modals
- Follow existing button, card, and form styling patterns

## Forms and Validation

### React Hook Form
- Use `react-hook-form` for all form handling
- Use `@hookform/resolvers` with Zod for validation
- Define Zod schemas for form validation
- Use `useForm` hook with proper TypeScript typing

### Form Patterns
```typescript
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"

const formSchema = z.object({
  email: z.string().email(),
  name: z.string().min(2),
})

type FormData = z.infer<typeof formSchema>

const form = useForm<FormData>({
  resolver: zodResolver(formSchema),
})
```

## State Management

### Local State
- Use `useState` for component-local state
- Use `useReducer` for complex state logic
- Keep state as close to where it's used as possible

### Global State
- Use React Context for theme, user preferences, etc.
- Consider Zustand or Jotai for complex global state (if needed)
- Avoid prop drilling - use context or state management library

### Server State
- Prefer Server Components for data fetching
- Use React Query/SWR only when client-side data fetching is necessary

## Error Handling

### Error Boundaries
- Use Next.js `error.tsx` files for route-level error handling
- Create error boundaries for critical sections
- Provide user-friendly error messages

### Async Error Handling
- Always use try/catch for async operations
- Handle errors gracefully with fallback UI
- Log errors appropriately (don't expose sensitive info)

## Performance

### Optimization
- Use Server Components by default (reduces JavaScript bundle)
- Lazy load heavy components with `next/dynamic`
- Optimize images with `next/image`
- Use `React.memo` sparingly (only for expensive re-renders)
- Avoid unnecessary `"use client"` directives

### Code Splitting
- Next.js automatically code-splits by route
- Use dynamic imports for heavy libraries: `const HeavyComponent = dynamic(() => import('./HeavyComponent'))`

## Accessibility

### ARIA and Semantics
- Use semantic HTML elements (`<nav>`, `<main>`, `<article>`, etc.)
- Add ARIA labels when semantic HTML isn't sufficient
- Ensure keyboard navigation works for all interactive elements
- Use proper heading hierarchy (h1 → h2 → h3)

### Focus Management
- Ensure focus is visible (use focus-visible styles)
- Manage focus for modals and dialogs
- Use `tabIndex` appropriately (avoid positive values unless necessary)

## Git Workflow

### Commit Messages
- Use conventional commits: `feat:`, `fix:`, `chore:`, `docs:`, `style:`, `refactor:`, `test:`
- Write clear, descriptive commit messages
- Keep commits focused and atomic (one logical change per commit)

### Branching
- Create feature branches: `feature/description`
- Use descriptive branch names
- Keep branches up to date with main
- Delete branches after merging

## Code Quality

### Best Practices
- Write self-documenting code with clear variable and function names
- Add comments only for complex logic or business rules
- Keep functions small and single-purpose
- Avoid premature optimization
- Follow DRY (Don't Repeat Yourself) principle
- Extract reusable logic into utilities or hooks

### Code Review Checklist
- [ ] TypeScript types are properly defined
- [ ] No `any` types (use proper types)
- [ ] Components are properly typed
- [ ] Error handling is in place
- [ ] Accessibility considerations addressed
- [ ] Performance implications considered
- [ ] Code follows existing patterns

## Testing (Future)

When adding tests:
- Use Vitest or Jest for unit tests
- Use React Testing Library for component tests
- Test user interactions, not implementation details
- Write tests for critical business logic

## Environment Variables

- Use `.env.local` for local development
- Prefix public variables with `NEXT_PUBLIC_`
- Never commit `.env.local` to git
- Document required environment variables in README

## Dependencies

### Adding New Dependencies
- Check if functionality exists in current dependencies first
- Prefer lightweight, well-maintained packages
- Consider bundle size impact
- Update package.json and commit lock file

### Current Key Dependencies
- `next`: 16.0.7 (App Router framework)
- `react`: 19.2.0 (UI library)
- `typescript`: ^5 (Type safety)
- `tailwindcss`: ^4.1.9 (Styling)
- `shadcn/ui`: Component library (via components.json)
- `react-hook-form`: Form handling
- `zod`: Schema validation
- `lucide-react`: Icons
- `class-variance-authority`: Component variants

## Common Patterns

### Component with Variants (shadcn/ui style)
```typescript
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const componentVariants = cva("base-classes", {
  variants: {
    variant: { default: "...", secondary: "..." },
    size: { sm: "...", md: "...", lg: "..." },
  },
  defaultVariants: { variant: "default", size: "md" },
})

interface ComponentProps extends VariantProps<typeof componentVariants> {
  className?: string
  children: React.ReactNode
}

export function Component({ variant, size, className, children }: ComponentProps) {
  return <div className={cn(componentVariants({ variant, size, className }))}>{children}</div>
}
```

### Server Component with Data Fetching
```typescript
export default async function Page() {
  const data = await fetch(url, { next: { revalidate: 3600 } })
  const result = await data.json()
  
  return <div>{/* render result */}</div>
}
```

### Client Component with State
```typescript
"use client"

import { useState } from "react"

export default function ClientComponent() {
  const [state, setState] = useState(initialValue)
  // ...
}
```
