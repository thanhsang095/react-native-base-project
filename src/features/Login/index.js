import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { LabelTextInput } from '~/components';
import Screen from '~/components/Screen';
import { Localized } from '~/utils';
import { appTheme } from '~/utils/Themes/appTheme';
import { useLoginFacade } from './hooks';


const Login = (props) => {
  const { formik, isLoading, _onSignup, _onLogin } = useLoginFacade()
  return (
    <Screen barBackgroundColor={appTheme().backgroundColor}
      barStyle={'dark-content'}
      loading={isLoading}
    >
      <KeyboardAwareScrollView
        enableOnAndroid
        keyboardDismissMode='interactive'
        bounces={false}
      >
        <View style={styles.headerView}>
          <Text style={styles.title}>{Localized.t('login.title')}</Text>
        </View>
        <View style={styles.formContainer}>
          <LabelTextInput
            field='email'
            placeholder={Localized.t('controls.email')}
            {...formik}
            keyboardType='email-address'
            containerStyle={styles.textInput} shouldValid />
          <LabelTextInput
            field='password'
            placeholder={Localized.t('controls.password')}
            {...formik}
            autoCapitalize="none"
            secureTextEntry={true}
            containerStyle={styles.textInput} shouldValid />

          <Button
            title={Localized.t('login.loginButton')}
            onPress={_onLogin}
            containerStyle={styles.loginButton}
          />

          <Button
            title={Localized.t('login.signupButton')}
            type='clear'
            containerStyle={styles.registerButton}
            onPress={_onSignup} />
        </View>
      </KeyboardAwareScrollView>
    </Screen>
  )
}

const styles = StyleSheet.create({
  headerView: {
    alignSelf: 'center',
    marginTop: 23,
  },
  title: {
    fontSize: 30,
  },
  formContainer: {
    marginTop: 48,
    marginHorizontal: 20,
  },
  textInput: {
    marginTop: 10,
  },
  loginButton: {
    marginTop: 30
  },
  registerButton: {
    marginTop: 10
  }
})

export default Login;
