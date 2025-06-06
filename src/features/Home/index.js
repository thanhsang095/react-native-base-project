import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import HeaderNavigation from '~/components/HeaderNavigation';
import {appTheme} from '~/utils/Themes/appTheme';
import globalStyles from '~/utils/Themes/globalStyles';

const Home = (props) => {
  return (
    <SafeAreaView
      style={[
        globalStyles.container,
        {backgroundColor: appTheme().backgroundColor},
      ]}>
      <HeaderNavigation
        onPressFriend={() => alert('Friend')}
        onPressProfile={() => alert('Profile')}
        style={{backgroundColor: appTheme().backgroundColor}}
        iconSize={24}
        iconColor={appTheme().buttonTextColor}
      />
      <View style={globalStyles.containerCenter}>
        <Text style={[styles.text, {color: appTheme().buttonTextColor}]}>
          Home
        </Text>
      </View>
      <TouchableOpacity
        style={{height: 100, width: 100, backgroundColor: 'red'}}
        onPress={() => {
          props?.navigation?.navigate('Login');
        }}>
        <Text>Login</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    textAlign: 'center',
  },
});

export default Home;
