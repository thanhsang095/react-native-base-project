import React from 'react';
import { Image, StatusBar, StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import { mainFont } from '~/assets/fonts';
import { icons } from '~/assets/icons';
import { appTheme } from '~/utils/Themes/appTheme';

export const defaultHeader = {
  title: undefined,
  height: 114,
  onBack: undefined
}

const HeaderView = (props) => {
  const { title, height, onBack } = { ...defaultHeader, ...props }
  return (
    <View
      style={{ height: height }}>
      <StatusBar barStyle='light-content' />
      <View style={styles.headerContainer}>
        {!!onBack && <Button style={styles.leftButton} icon={<Image source={icons.back} />} type='clear' />}
        {!!title && <Text style={[styles.title, { color: appTheme().buttonTextColor }]}>{title}</Text>}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontFamily: mainFont.regular,
    fontSize: 24,
  },
  leftButton: {
    marginRight: 20,
  },
  headerContainer: {
    marginTop: 52,
    marginHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center'
  }
})
export default HeaderView;
