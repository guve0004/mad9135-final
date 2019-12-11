import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { requestPermissionsAsync, watchPositionAsync, Accuracy } from 'expo-location';
import SearchBar from '../components/SearchBar';
import useRestos from '../hooks/useRestos';
import RestosList from '../components/RestosList';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, restos, errorMessage] = useRestos();
    const [err, setErr] = useState(null)

    const startWatching = async () => {
        try {
            await requestPermissionsAsync()
            await watchPositionAsync({
                accuracy: Accuracy.BestForNavigation,
                timeInterval: 10000,
                distanceInterval: 100
            }, (location) => {
                console.log(location)
            })
        } catch (e) {
            setErr(e)
        }
    }
    useEffect(() => {
        startWatching();
    }, []);

    return (
        <>
            <SearchBar
                term={term}
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            {err ? <Text>Please enable location services</Text> : null}
            <ScrollView>
                <RestosList
                    restos={restos.filter(resto => {
                        return resto.distance <= 5000
                    })}
                    title="Nearby"
                />
                <RestosList restos={restos.filter(resto => {
                    return (resto.distance <= 15000 && resto.distance >= 5000)
                })}
                    title="Medium distance" />
                <RestosList
                    restos={restos.filter(resto => {
                        return (resto.distance <= 25000 && resto.distance >= 15000)
                    })}
                    title="A Little Far"
                />
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({});

export default SearchScreen;