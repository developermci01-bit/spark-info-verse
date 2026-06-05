Switch the responsive breakpoint in `src/components/Header.tsx` from `xl` (1280px) back to `lg` (1024px). This reverts the previous change so the desktop navigation and hamburger toggle behave correctly on laptop screen sizes.

Changes:
- Line 44: `hidden xl:flex` -> `hidden lg:flex`
- Line 117: `hidden xl:block` -> `hidden lg:block`
- Line 125: `xl:hidden` -> `lg:hidden`
- Line 135: `xl:hidden` -> `lg:hidden`