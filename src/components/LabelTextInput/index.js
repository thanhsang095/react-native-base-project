import React, { useCallback, useState } from 'react';
import { Animated, Platform, StyleSheet, TextInput, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { mainFont } from '~/assets/fonts';
import { appTheme } from '~/utils/Themes/appTheme';

const LabelTextInput = ({ handleChange, handleBlur, values, errors, field, dirty, shouldValid, inputStyle, placeholder, containerStyle, ...inputProps }) => {
  const isValid = shouldValid && dirty && !errors[field]
  const isInvalid = shouldValid && dirty && errors[field]
  const { position, isFieldActive, _handleFocus, _handleBlur } = useLabelTextInputFacade({ value: values[field], onFocus: inputProps.onFocus, handleBlur, field })

  return (
    <View style={containerStyle}>
      <Animated.Text
        style={[styles.label, _returnAnimatedTitleStyles({ isFieldActive, position }), { color: appTheme().placeholderColor }]}
      >
        {placeholder}
      </Animated.Text>
      <View style={[styles.inputContainer, isValid ? { borderBottomColor: appTheme().primaryColor }
        : isInvalid ? { borderBottomColor: appTheme().dangerColor } : undefined]}>
        <TextInput
          value={values[field]}
          style={[styles.textInput, inputStyle, { color: appTheme().textColor }]}
          underlineColorAndroid='transparent'
          onFocus={_handleFocus}
          onBlur={_handleBlur}
          onChangeText={handleChange(field)}
          {...inputProps}
        />
        {isInvalid && <Icon name='error' color={appTheme().dangerColor} size={20} />}
      </View>
    </View>
  )
};

const _returnAnimatedTitleStyles = ({ isFieldActive, position }) => {
  return {
    top: position.interpolate({
      inputRange: [0, 1],
      outputRange: [30, 5],
    }),
    ...(isFieldActive ? styles.activeStyle : styles.inactiveStyle),
  }
}

const useLabelTextInputFacade = ({ field, value, onFocus, handleBlur }) => {
  const [isFieldActive, setIsFieldActive] = useState(false)
  const [position, setPosition] = useState(new Animated.Value(value ? 20 : 0))
  const _handleFocus = useCallback(() => {
    if (!isFieldActive) {
      setIsFieldActive(true)
      Animated.timing(position, { toValue: 1, duration: 150, useNativeDriver: false }).start();
    }
    onFocus && onFocus()
  })

  const _handleBlur = useCallback(() => {
    if (isFieldActive && !value) {
      setIsFieldActive(false)
      Animated.timing(position, { toValue: 0, duration: 150, useNativeDriver: false }).start();
    }
    handleBlur(field)
  })

  return {
    position,
    isFieldActive,
    _handleFocus,
    _handleBlur,
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    paddingBottom: 0,
    paddingTop: 10,
    height: 58,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(125,93,192,0.1)',
  },
  label: {
    fontFamily: mainFont.regular,
    fontWeight: "400",
    fontSize: 14,
    position: 'absolute',
  },
  textInput: {
    fontSize: 15,
    flex: 1,
    ...Platform.select({
      ios: {
        height: 46
      }
    }),
  },
  container: {
    paddingHorizontal: 0
  },
  activeStyle: {
    fontSize: 14
  },
  inactiveStyle: {
    fontSize: 16
  },
  validIcon: {
    width: 20,
    height: 20
  },
})
export default LabelTextInput;
