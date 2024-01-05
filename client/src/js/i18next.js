
if (navigator.language) {
  Cookies.set('language', navigator.language);
};

i18next.init({
  lng: 'en',
  debug: false,
  resources: language
});

let t = Cookies.get('language');

switch (t) {
  case 'pt-BR':
    t = i18next.getFixedT('pt');
   break;
  default:
    t = i18next.getFixedT('en');
   break;
};

document.title = t('title');