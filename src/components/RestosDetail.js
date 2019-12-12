import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const RestosDetail = ({ resto }) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: resto.image_url }} />
            <Text style={styles.name}>{resto.name}</Text>
            <Text style={styles.detail}>
                {resto.rating} Stars, {resto.review_count} Reviews
      </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginLeft: 15
    },
    image: {
        width: 250,
        height: 120,
        borderRadius: 4,
        marginBottom: 5
    },
    name: {
        fontWeight: 'bold',
        fontSize: 20
    },
    name: {
        fontSize: 18
    }
});

export default RestosDetail;