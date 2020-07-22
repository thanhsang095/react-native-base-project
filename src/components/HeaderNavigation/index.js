import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import VectorIcons from '../VectorIcons';

const HeaderNavigation = (props) => {
  const { style, onPressFriend, onPressProfile, iconSize, iconColor } = props
  return (
    <View style={[styles.headerContainer, style]}>
      <StatusBar barStyle='light-content' />
      <View style={styles.headerContainer}>
        <VectorIcons onPress={onPressProfile} type={'FontAwesome'} name={'users'} size={iconSize} color={iconColor} />
        <VectorIcons onPress={onPressFriend} type={'FontAwesome'} name={'user-o'} size={iconSize} color={iconColor} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'space-between'
  }
})
export default HeaderNavigation;
