# Video Embed Implementation Guide

## Overview

This guide provides the implementation details for embedding the Loom demo video directly on the House Whisperer homepage.

## Video Details

- **Platform**: Loom
- **Video ID**: `024151e3afe44348a082548262590768`
- **Embed URL**: `https://www.loom.com/embed/024151e3afe44348a082548262590768`
- **Aspect Ratio**: 16:9 (54.375% padding-bottom for responsive)

## Recommended Placement

**Location**: Immediately after the Hero section, before the Problem/Solution section

**Rationale:**
- Captures attention early in user journey
- Provides visual proof before explaining problems
- Creates natural content flow
- Reduces friction (no need to leave page)
- Improves engagement and conversion rates

## Implementation

### Section Structure

```tsx
{/* See It In Action - Video Demo */}
<section className="py-20 bg-gradient-to-b from-background to-secondary/5">
  <div className="max-w-4xl mx-auto px-6">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-foreground mb-4">
        See It In Action
      </h2>
      <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
        Watch how House Whisperer transforms home inspections into living digital records in just minutes.
      </p>
    </div>
    
    {/* Video Embed Container */}
    <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl bg-card border border-border">
      <div className="relative w-full" style={{ paddingBottom: '54.375%' }}>
        <iframe
          src="https://www.loom.com/embed/024151e3afe44348a082548262590768"
          frameBorder="0"
          allowFullScreen
          className="absolute top-0 left-0 w-full h-full"
          style={{ 
            webkitAllowFullScreen: true, 
            mozAllowFullScreen: true 
          }}
          title="House Whisperer Demo Video"
        />
      </div>
    </div>
    
    {/* Optional: CTA below video */}
    <div className="text-center mt-8">
      <Button size="lg" className="bg-primary hover:bg-primary/90 gap-2" asChild>
        <Link href="https://house-whisperer-demoday.vercel.app/" target="_blank" rel="noopener noreferrer">
          Try It Yourself <ArrowRight className="w-4 h-4" />
        </Link>
      </Button>
    </div>
  </div>
</section>
```

## Styling Options

### Option 1: Minimal (Recommended)
- Subtle background gradient
- Rounded corners with shadow
- Clean, professional look

### Option 2: Card Style
- Wrap in Card component
- Add padding around video
- More prominent visual treatment

### Option 3: Full Width
- Extend to full viewport width
- More immersive experience
- Use on larger screens only

## Responsive Considerations

### Mobile (< 768px)
- Reduce padding: `py-12` instead of `py-20`
- Smaller heading: `text-3xl` instead of `text-4xl`
- Full width container with padding
- Maintain aspect ratio

### Tablet (768px - 1024px)
- Standard padding and sizing
- Centered layout

### Desktop (> 1024px)
- Max width container (4xl or 5xl)
- Enhanced shadow and effects
- Optional: Add hover effects

## Accessibility

- Add `title` attribute to iframe for screen readers
- Ensure keyboard navigation works
- Provide alternative text or description
- Consider adding transcript link

## Performance

- Loom videos are loaded lazily by default
- Consider adding `loading="lazy"` if supported
- Video loads only when section is in viewport
- No impact on initial page load

## Alternative Placements

### Option A: In Hero Section
```tsx
// Place below CTA buttons in Hero section
// More prominent but may clutter hero
```

### Option B: After Problem/Solution
```tsx
// After explaining the problem, show solution
// Good narrative flow
```

### Option C: Replace CTA Section
```tsx
// Replace existing CTA section with video
// Maximum visibility
```

## Integration with Existing CTAs

**Strategy**: Keep both embedded video AND external links
- Embedded video for immediate viewing
- "Try Now" button for direct app access
- "See Demo" link can remain for users who prefer external viewing

## Testing Checklist

- [ ] Video loads correctly on all devices
- [ ] Aspect ratio maintained on all screen sizes
- [ ] Fullscreen functionality works
- [ ] Responsive design tested (mobile, tablet, desktop)
- [ ] Accessibility tested (keyboard navigation, screen readers)
- [ ] Performance impact measured
- [ ] Cross-browser compatibility verified

## Next Steps

1. Add section to `app/app/page.tsx` after Hero section
2. Test on multiple devices and browsers
3. Verify video playback and controls
4. Check mobile responsiveness
5. Monitor analytics for engagement

---

**File to Modify**: `app/app/page.tsx`  
**Section**: After Hero, before Problem/Solution  
**Estimated Time**: 30 minutes

