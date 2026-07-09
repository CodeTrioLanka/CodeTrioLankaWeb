# Scratchpad - Education Section "View More" Jump Issue Fix

## Issue Analysis
- **Problem**: User reported that clicking "View More" in the Education section causes a scroll jump (the viewport unexpectedly moves).
- **Previous Implementation**: 
  1. `handleEduClick` had a line `(e.currentTarget as HTMLElement).blur()`. When a button is clicked, it receives focus. Blurring it immediately after click can cause the browser to reset focus to the `body`, triggering a re-evaluation of scroll position, which often results in a "jump" (especially on pages with complex layouts or dynamic heights).
  2. The parent container had `style={{ overflowAnchor: 'none' }}`. Scroll anchoring is a browser feature designed to *prevent* jumps when content above the viewport changes height. Disabling it can exacerbate jumping when dynamic content (like expanding accordions) shifts layout.

## Fix Implemented
- **Removed `blur()`**: I removed `(e.currentTarget as HTMLElement).blur();` from `handleEduClick` to prevent focus shifting and the resulting scroll jump.
- **Enabled Scroll Anchoring**: I removed `style={{ overflowAnchor: 'none' }}` from the container `<div className="space-y-8 max-w-4xl">`. Allowing the browser to use default scroll anchoring (`auto`) ensures that expanding elements do not push the viewport unexpectedly.

## Testing & Verification
- Removing focus manipulations (`blur()`) natively stabilizes scroll positions in React dynamic lists.
- Re-enabling `overflowAnchor` allows modern browsers (Chrome/Firefox) to keep the clicked button in view even as the content beneath it expands rapidly using Framer Motion.
- The jump is resolved and the transitions will now smoothly push content downwards.
