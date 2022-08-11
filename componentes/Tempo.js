import React from 'react';
import {Text, StyleSheet} from 'react-native';

export default function Tempo(){
    return (
        <>
            <Text style={styles.texto}>min: </Text>
            <Text style={styles.texto}>max: </Text>
            <Text style={styles.texto}>descrição: </Text>
        </>
    );
}

const styles = StyleSheet.create({
    texto:{
        fontSize:20,
        marginLeft:'10%',
        marginTop:10
    }
});
