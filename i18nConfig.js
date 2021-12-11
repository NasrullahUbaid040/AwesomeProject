import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import Languages from './src/i18n/index';
import AsyncStorage from '@react-native-async-storage/async-storage';

const getData = async () => {
  try {
    const value = await AsyncStorage.getItem('locale');
    if (value == 'en') {
      return 'en';
    } else {
      return value;
    }
  } catch (e) {
    return 'en';
  }
};

getData().then(res => {
  i18n.use(initReactI18next).init({
    fallbackLng: 'en',
    lng: res,
    compatibilityJSON: 'v3',
    resources: Languages,
    ns: ['common'],
    defaultNS: 'common',
    debug: true,
    interpolation: {
      escapeValue: false,
    },
  });
});

export default i18n;
