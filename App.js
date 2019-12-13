import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen';
import RestosShowScreen from './src/screens/RestosShowScreen';

// Landing page is SearchScreen.
// User is informed that they can search restaurants with a key word.
// Search screen has SearchBar component at first.
// After the key word entry, via RestosList and RestosDetail components, related restaurants
// are presented with pictures, ratings and reviews in three horizontal scrollable sections,
// nearby (in 5 km), Medium distance (5-15 km), and A Little Far (15-25 km).
// When a restaurant is tapped, the detail info is presented on another screen,
// via RestosShowScreen. Restaurants' info is fetched from yelp by using Axios (yelp.js)
// Searching is handled via useRestos hook, and Location is handled via useLocation hook.

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