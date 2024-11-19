import ar from "@/locales/ar.json";
import en from "@/locales/en.json";

export type Translation = typeof en;

export const getTranslations = (locale: string): Translation => {
  switch (locale) {
    case "ar":
      return ar;
    default:
      return en;
  }
};
