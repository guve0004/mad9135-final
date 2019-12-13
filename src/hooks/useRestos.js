import { useState, useEffect } from 'react';
//import Geolocation from "@react-native-community/geolocation";
import yelp from '../api/yelp';

export default () => {
    const [restos, setRestos] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async (searchTerm, locLat, locLong) => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    latitude: locLat,
                    longitude: locLong
                    // location: 'ottawa'
                }
            });

            setRestos(response.data.businesses);

        } catch (err) {
            setErrorMessage('Something went wrong');
        }
    };

    // useEffect(() => {
    //     searchApi('fast food', 45.349341, -75.755997);
    // }, []);

    return [searchApi, restos, errorMessage];
};