import React, { useState } from 'react';
import { View, TextInput, Text } from 'react-native';

import Botao from '../components/Botao';

const AddEditScreen = ({ route, navigation }) => {
    const person = route.params?.person;
    const [firstname, setFirstname] = useState(person?.firstname || '');
    const [email, setEmail] = useState(person?.email || '');

    const save = () => {

    return (
        <View style={styles.container}>
            <TextInput 
                style={styles.input}
                value={firstname} 
                onChangeText={setFirstname} 
                placeholder="Nome" 
            />
            <TextInput 
                style={styles.input}
                value={email} 
                onChangeText={setEmail} 
                placeholder="Email" 
            />

            <Botao aoPressionar={save}>
                <Text style={{color: 'white'}}>{person ? "Atualizar" : "Salvar"}</Text>
            </Botao>
        </View>
    );
};
    
export default AddEditScreen;