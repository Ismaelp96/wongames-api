import favicon from "./extensions/icon.png";
import AuthLogo from "./extensions/logo.svg";

export default {
  config: {
    auth: {
      logo: AuthLogo,
    },

    head: {
      favicon: favicon,
    },

    locales: [],

    menu: {
      logo: favicon,
    },
    tutorials: false,
    translations: {
      en: {
        "Auth.form.welcome.title": "Welcome to WOn Games!",
        "Auth.form.welcome.subtitle": "Log in to your account",
      },
    },
    notifications: { releases: false },
  },

  bootstrap() {},
};
