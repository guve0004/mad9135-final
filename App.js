import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen';
import RestosShowScreen from './src/screens/RestosShowScreen';

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    RestosShow: RestosShowScreen
  },
  {
    initialRouteName: 'Search',
    defaultNavigationOptions: {
      title: 'Restaurant Search'
    }
  }
);

export default createAppContainer(navigator);