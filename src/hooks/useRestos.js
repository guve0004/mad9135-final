import { useState, useEffect } from 'react';
//import Geolocation from "@react-native-community/geolocation";
import yelp from '../api/yelp';

export default () => {
    const [restos, setRestos] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async searchTerm => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    // latitude: loc.coords.latitude,
                    // longitude: loc.coords.longitude
                    // location: loc
                    latitude: 45.349341,
                    longitude: -75.755997
                }
            });
            setRestos(response.data.businesses);
        } catch (err) {
            setErrorMessage('Something went wrong');
        }
    };

    useEffect(() => {
        searchApi('fast food');
    }, []);

    return [searchApi, restos, errorMessage];
};