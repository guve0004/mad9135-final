import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization:
            'Bearer z6esP0nJWpcW_94QyJ2TFth8yMzbqn51eDpiSOCxoAYjFUgLkb4_DEGSvtrqulstHJDGRvzJ0Hp1EAOaUkRc-l99RZWwX7JZyflIufxUUhHqhMoMOYkH_AyZNh3oXXYx'
    }
});