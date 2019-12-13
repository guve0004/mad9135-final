import { useState, useEffect } from 'react';
import { requestPermissionsAsync, watchPositionAsync, Accuracy } from 'expo-location';

export default () => {
    const [locLat, setLocLat] = useState(null)
    const [locLong, setLocLong] = useState(null)
    const [e, setE] = useState(null)

    const startWatching = async () => {
        try {
            await requestPermissionsAsync()
            await watchPositionAsync({
                accuracy: Accuracy.BestForNavigation,
                timeInterval: 10000,
                distanceInterval: 100
            },
                location => {
                    //console.log(location)
                    setLocLat(location.coords.latitude)
                    setLocLong(location.coords.longitude)
                })
        } catch (e) {
            setE('Please enable location services')
        }
    }

    useEffect(() => {
        startWatching();
    }, []);

    return [locLat, locLong];
}