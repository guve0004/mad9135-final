import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useRestos from '../hooks/useRestos';
import RestosList from '../components/RestosList';
import useLocation from '../hooks/useLocation'

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, restos, errorMessage] = useRestos();
    const [locLat, locLong] = useLocation();

    return (
        <>
            <SearchBar
                term={term}
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term, locLat, locLong)}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <ScrollView>
                <Text style={styles.textStyle}>You can search restaurants with any key word.</Text>
                <RestosList
                    restos={restos.filter(resto => {
                        return resto.distance <= 5000
                    })}
                    title="Nearby (in 5 km)"
                />
                <RestosList restos={restos.filter(resto => {
                    return (resto.distance <= 15000 && resto.distance >= 5000)
                })}
                    title="Medium distance (in 5-15 km)" />
                <RestosList
                    restos={restos.filter(resto => {
                        return (resto.distance <= 25000 && resto.distance >= 15000)
                    })}
                    title="A Little Far (in 15-25 km)"
                />
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 24,
        margin: 15
    }
});

export default SearchScreen;