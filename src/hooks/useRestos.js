import { useEffect, useState } from 'react';
import yelp from '../api/yelp';

export default () => {
    const [restos, setRestos] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async searchTerm => {
        console.log('Hi there!');
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'ottawa'
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