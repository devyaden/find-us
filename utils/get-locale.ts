export const getLocale = () => {
  if (typeof window !== "undefined") {
    return window.navigator.language.startsWith("ar") ? "ar" : "en";
  }
  return "en";
};
