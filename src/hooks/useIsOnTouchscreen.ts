export const useIsOnTouchscreen = () =>
  window.matchMedia('(pointer: coarse)').matches
