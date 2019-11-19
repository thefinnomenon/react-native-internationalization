import React from 'react';
import {I18nextProvider, useTranslation} from 'react-i18next';
import i18 from './utils/i18n';
import {View, Image, Text, Button, StyleSheet} from 'react-native';

const Home = () => {
  const {t, i18n} = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <View style={styles.container}>
      <Image
        style={{width: 250, height: 250}}
        source={require('./assets/images/logo.png')}
      />
      <Text style={styles.message}>{t('THE FIRST WORD IN ENTERTAINMENT')}</Text>
      <Button title={t('English')} onPress={() => changeLanguage('en')} />
      <Button title={t('Portuguese')} onPress={() => changeLanguage('pt')} />
    </View>
  );
};

const App = () => {
  return (
    <I18nextProvider i18n={i18}>
      <Home />
    </I18nextProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  message: {
    fontSize: 18,
    marginBottom: 20,
  },
});

export default App;
