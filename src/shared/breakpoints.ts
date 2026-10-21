// Media queries shared by components that switch layout in JS.
// Keep in sync with the breakpoints and the hover mixin in src/styles/tokens.scss.
export const MEDIA = {
  mobileLg: "(max-width: 600px)",
  finePointer: "(hover: hover) and (pointer: fine)",
} as const;
