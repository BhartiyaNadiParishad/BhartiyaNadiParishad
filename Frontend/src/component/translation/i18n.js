import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { Description } from "@mui/icons-material";
import englishHomePage from "./text/en/homePage.json";
import hindiHomePage from "./text/hi/homePage.json";
import englishAboutUsPage from "./text/en/about.json";
import getInvovled from "./text/en/getInvolved.json"
import nadiDarshan from "./text/en/nadiDarshan.json"
// import hindiAboutUsPage from "./text/hi/about.json";

i18n
	// detect user language
	// learn more: https://github.com/i18next/i18next-browser-languageDetector
	.use(LanguageDetector)
	// pass the i18n instance to react-i18next.
	.use(initReactI18next)
	// init i18next
	// for all options read: https://www.i18next.com/overview/configuration-options
	.init({
		debug: true,
		fallbackLng: "en",
		interpolation: {
			escapeValue: false, // not needed for react as it escapes by default
		},
		resources: {
			en: {
				translation: { 
					...englishHomePage, 
					...englishAboutUsPage,
					...getInvovled,
					...nadiDarshan
				},
			},
			hi: {
				translation: hindiHomePage,
			},
		},
	});

export default i18n;
