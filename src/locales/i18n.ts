import { createI18n } from "vue-i18n";
import en from "./en.json";
import uz from "./uz.json";
import ru from "./ru.json";

export const defaultlocale: string = "uz";

const i18n: any = createI18n({
    legacy: false,
    locale: !!localStorage.getItem("language") ? localStorage.getItem("language")!
        : defaultlocale,
    fallbackLocale: "uz",
    messages: {
        uz,
        ru,
        en
    }
});

export default i18n;