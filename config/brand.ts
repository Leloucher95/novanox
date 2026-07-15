export const brand = {
  name: "NOVANOX",
  description: "Agence de communication et de création digitale",
  colors: {
    background: "#0A0E1A",
    navy: "#0D1426",
    primary: "#1A6FD4",
    cyan: "#00C8E0",
    secondaryBlue: "#1565C0",
    lightBackground: "#E8F4FF",
    darkText: "#1A2035",
    mutedText: "#555F7A",
    white: "#FFFFFF",
    success: "#1B8A4E",
    warning: "#E65C00",
    error: "#C62828",
  },
} as const;

export const brandCssVariables = {
  "--color-background": brand.colors.background,
  "--color-navy": brand.colors.navy,
  "--color-primary": brand.colors.primary,
  "--color-cyan": brand.colors.cyan,
  "--color-secondary-blue": brand.colors.secondaryBlue,
  "--color-light-background": brand.colors.lightBackground,
  "--color-dark-text": brand.colors.darkText,
  "--color-muted-text": brand.colors.mutedText,
  "--color-white": brand.colors.white,
  "--color-success": brand.colors.success,
  "--color-warning": brand.colors.warning,
  "--color-error": brand.colors.error,
} as const;
