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
                    //latitude: position.latitude,
                    //longitude: position.longitude
                    //location: selfLocation,
                    latitude: 45.349341,
                    longitude: -75.755997
                }
            });
            setRestos(response.data.businesses);
        } catch (err) {
            setErrorMessage('Something went wrong');
        }
    };

    // Call searchApi when component
    // is first rendered.  BAD CODE!
    // searchApi('pasta');
    useEffect(() => {
        searchApi('fast food');
    }, []);

    return [searchApi, restos, errorMessage];
};