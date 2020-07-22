import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { LabelTextInput } from '~/components';
import Screen from '~/components/Screen';
import { Localized } from '~/utils';
import { appTheme } from '~/utils/Themes/appTheme';
import { useSignupFacade } from './hooks';
const closeIcon = {
  name: 'close', color: appTheme().buttonTextColor
}

const Signup = (props) => {
  const { formik, isLoading, _onSignup, _onBack, _onLinkTerms, _onLinkPrivacy, } = useSignupFacade()
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
        <Button
          iconContainerStyle={[styles.closeIcon, { backgroundColor: appTheme().placeholderColor, }]}
          icon={closeIcon}
          type='clear'
          containerStyle={styles.closeButton}
          onPress={_onBack} />
        <View style={styles.headerView}>
          <Text style={styles.title}>{Localized.t('signup.title')}</Text>
        </View>
        <View style={styles.formContainer}>
          <LabelTextInput
            field='email'
            keyboardType='email-address'
            placeholder={Localized.t('controls.email')}
            {...formik}
            containerStyle={styles.textInput} shouldValid />
          <LabelTextInput
            field='password'
            placeholder={Localized.t('controls.password')}
            {...formik}
            autoCapitalize="none"
            secureTextEntry={true}
            containerStyle={styles.textInput} shouldValid />

          <Text style={styles.policyAgreement}>
            {Localized.t('signup.policyAgreement')}
            <Text onPress={_onLinkTerms} style={[styles.link, { color: appTheme().primaryColor }]}>{Localized.t('signup.terms')}</Text>
            {Localized.t('signup.and')}
            <Text onPress={_onLinkPrivacy} style={[styles.link, { color: appTheme().primaryColor }]}>{Localized.t('signup.privacy')}</Text>.
          </Text>

          <Button title={Localized.t('signup.registerButton')} onPress={_onSignup} />
        </View>
      </KeyboardAwareScrollView>
    </Screen>
  )
}

const styles = StyleSheet.create({
  headerView: {
    alignSelf: 'center',
    marginTop: 43,
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
  checkBoxContainer: {
    marginTop: 19,
    marginBottom: 23
  },
  closeButton: {
    position: 'absolute',
    zIndex: 10,
  },
  link: {
    textDecorationLine: 'underline',
  },
  closeIcon: {
    borderRadius: 20,
    padding: 5
  },
  policyAgreement: {
    marginVertical: 20
  }
})

export default Signup;
