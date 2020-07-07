import { createAppContainer, createStackNavigator, createSwitchNavigator } from 'react-navigation'
import MainHomePage from '~/Home/MainHomePage'

const AppStack = createStackNavigator(
  {
    Main: MainHomePage,
  }, {
  mode: 'modal',
  headerMode: 'none'
})

export const AppContainer = createAppContainer(
  createSwitchNavigator(
    {
      App: AppStack,
    },
    {
      initialRouteName: 'App',
    }
  )
)

export default AppContainer
