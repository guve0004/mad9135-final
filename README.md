# mad9135-final
MAD9135 Final Project
Emin & Viraj

RESTAURANT SEARCH

It is an app developed by using React Native Hooks.
It helps to search the restaurants by entering a key word.
The restaurants are ordered with their distances to the user's location.
Landing page is SearchScreen.
User is informed at first that they can search restaurants with a key word.
Search screen has SearchBar component initially.
After the key word entry, via RestosList and RestosDetail components, related restaurants
are presented with pictures, ratings and reviews in three horizontal scrollable sections:
nearby (in 5 km), Medium distance (5-15 km), and A Little Far (15-30 km).
When a restaurant is tapped, the detail info is presented on another screen,
via RestosShowScreen. Restaurants' info is fetched from yelp by using Axios (yelp.js)
Searching is handled via useRestos hook, and Location is handled via useLocation hook

Bon apetit!
