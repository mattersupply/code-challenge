/**Breakpoints for small size only */
export const breakpoints = {
  sm: 768,
};

export const breakpoint = (breakpointSize) =>
  `@media screen and (max-width: ${breakpoints[breakpointSize]}px)`;
