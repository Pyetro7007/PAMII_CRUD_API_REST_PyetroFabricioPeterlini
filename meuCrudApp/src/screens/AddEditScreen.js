import React, { useState } from 'react';
import { View, TextInput, Text } from 'react-native';

import Button from '../components/Button';
import { addPerson, updatePerson } from '../api/peopleService';
import styles from '../styles/styles';

const AddEditScreen = ({ route, navigation }) => {
    const person = route.params?.person;

    const [firstname, setFirstname] = useState(person?.firstname || '');
    const [lastname, setLastname] = useState(person?.lastname || '');
    const [email, setEmail] = useState(person?.email || '');
    const [error, setError] = useState(null);

    const save = async () => {
        try {
            if (person) {
                await updatePerson(person.id, { firstname, lastname, email });
            } else {
                await addPerson({ firstname, lastname, email });
            }
            navigation.goBack();
        } catch (err) {
            console.error(err);
            setError('Não foi possível salvar o registro');
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.headerAddEdit}>
                <Text style={styles.addEditTitle}>
                    {person ? 'Editar Pessoa' : 'Adicionar Pessoa'}
                </Text>
            </View>

            {error && <Text style={styles.errorText}>{error}</Text>}

            <TextInput 
                style={styles.input}
                value={firstname}
                onChangeText={setFirstname}
                placeholderTextColor={'#4a9ea8'}
                placeholder="Nome"
            />
            <TextInput 
                style={styles.input}
                value={lastname}
                onChangeText={setLastname}
                placeholderTextColor={'#4a9ea8'}
                placeholder="Sobrenome"
            />
            <TextInput 
                style={styles.input}
                value={email}
                onChangeText={setEmail}
                placeholderTextColor={'#4a9ea8'}
                placeholder="Email"
                keyboardType="email-address"
                autoCapitalize="none"
            />

            <Button onPressButton={save}>
                <Text style={styles.buttonTextAdd}>{person ? "Salvar" : "Adicionar"}</Text>
            </Button>

            <Button onPressButton={() => navigation.goBack()}>
                <Text style={styles.buttonTextAdd}>Cancelar</Text>
            </Button>
        </View>


    )
};
    
export default AddEditScreen;