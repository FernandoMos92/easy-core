import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'

export class Home extends Component {
    render() {
const userOptions = [
    { label: 'Lista de compra', image: require('./../../assets/todo-bag.jpg') },
    { label: 'Receitas', image: require('./../../assets/receipes.jpeg') },
    { label: 'Minhas receitas', image: require('./../../assets/my-receipes.png') }
];
    return (
    <View style={styles.container}>
        <Image 
            style={styles.image}
            source={require('./../../assets/small-logo.png')}
        />
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
        justifyContent: 'flex-start',
        flexDirection: 'row',
        flexWrap: 'wrap',
        width:'100%',
        height: '60%',
        gap:20
    },
    card: {
        width:182,
        height:150,
        gap: 4
    },
    imageCard: {
        width: 180, 
        height: 100, 
        borderRadius: 5,
    },
    textCard: {
        color: '#8c82fc',
        textAlign: 'center',
        textTransform: 'uppercase',
        fontWeight: 'bold',
    }
  });

export default Home