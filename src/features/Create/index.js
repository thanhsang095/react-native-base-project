import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import HeaderNavigation from '~/components/HeaderNavigation';
import { appTheme } from '~/utils/Themes/appTheme';
import globalStyles from '~/utils/Themes/globalStyles';

const Create = (props) => {
  return (
    <SafeAreaView style={[globalStyles.container, { backgroundColor: appTheme().backgroundColor }]}>
      <HeaderNavigation
        onPressFriend={() => alert("Friend")}
        onPressProfile={() => alert("Profile")}
        style={{ backgroundColor: appTheme().backgroundColor }}
        iconSize={24}
        iconColor={appTheme().buttonTextColor} />
      <View style={globalStyles.containerCenter}>
        <Text style={[styles.text, { color: appTheme().buttonTextColor }]}>Create</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    textAlign: 'center',
  }
})


export default Create;
