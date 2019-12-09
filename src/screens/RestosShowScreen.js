import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import yelp from '../api/yelp';

const RestosShowScreen = ({ navigation }) => {
    const [resto, setResto] = useState(null);
    const id = navigation.getParam('id');

    console.log(resto)

    const getResto = async id => {
        const response = await yelp.get(`/${id}`);
        setResto(response.data);
    };
    useEffect(() => {
        getResto(id);
    }, []);

    if (!resto) {
        return null;
    }

    return (
        <View>
            <Text style={styles.nameStyle}>{resto.name}</Text>
            <Text style={styles.textStyle}>Phone number: {resto.phone}</Text>
            <Text style={styles.textStyle}>Price range: {resto.price}</Text>
            <Text style={styles.textStyle}>Address: {resto.location.address1}</Text>
            <Text style={styles.textStyle}>Distance: {resto.distance}</Text>
            <FlatList
                data={resto.photos}
                keyExtractor={photo => photo}
                renderItem={({ item }) => {
                    return <Image style={styles.image} source={{ uri: item }} />;
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    image: {
        height: 150,
        width: 200,
        marginLeft: 15,
        marginBottom: 5
    },
    textStyle: {
        fontSize: 16,
        fontWeight: 'normal',
        marginLeft: 15,
        marginBottom: 5
    },
    nameStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5
    }
});

export default RestosShowScreen;