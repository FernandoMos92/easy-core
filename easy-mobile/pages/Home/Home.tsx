import React, { Component } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export class Home extends Component {
    render() {
const userOptions = [
    { label: 'Lista de compra', image: require('./../../assets/todo-bag.jpg') },
    { label: 'Receitas', image: require('./../../assets/receipes.jpeg') },
    { label: 'Minhas receitas', image: require('./../../assets/my-receipes.png') }
];
    return (
    <View style={styles.container}>
        <View style={styles.cardMenu}>
            {userOptions.map(option => (
                <TouchableOpacity key={option.label} style={styles.card}>
                    <Image source={option.image} style={styles.imageCard} />
                    <Text style={styles.textCard}>{option.label}</Text>
                </TouchableOpacity>
            ))}
        </View>
    </View>
    )
}
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    image: {
        resizeMode: 'contain',
        width: 200,
        height: 200,
        alignSelf: 'center',
        marginLeft:25
    },
    cardMenu: {
        padding:10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width:'100%',
        height: '60%',
        gap:20,
    },
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 220,
        height:70,
        gap: 4,
        borderRadius: 50,
        padding: 5,
        backgroundColor: '#ffe89c',
    },
    imageCard: {
        width: 60, 
        height: 60, 
        borderRadius: 100,
    },
    textCard: {
        color: '#8c82fc',
        textAlign: 'center',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        
    }
});

export default Home