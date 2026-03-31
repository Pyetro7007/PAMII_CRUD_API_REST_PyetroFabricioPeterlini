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
    const [phone, setPhone] = useState(person?.phone || '');
    const [error, setError] = useState(null);

    const save = async () => {
        // Valida o email antes de salvar
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setError('Email inválido, tente novamente');
            return;
        }

        if (!firstname || !lastname || !email || !phone) {
            setError('Preencha todos os campos');
            return;
        }

        try {
            if (person) {
                await updatePerson(person.id, { firstname, lastname, email, phone });
            } else {
                await addPerson({ firstname, lastname, email, phone });
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
                onChangeText={(text) => setFirstname(text.replace(/[^a-zA-ZÀ-ÿ\s]/g, ''))}
                placeholderTextColor='#4a9ea8'
                placeholder="Nome"
                maxLength={30}
            />
            <TextInput 
                style={styles.input}
                value={lastname}
                onChangeText={(text) => setLastname(text.replace(/[^a-zA-ZÀ-ÿ\s]/g, ''))}
                placeholderTextColor='#4a9ea8'
                placeholder="Sobrenome"
                maxLength={50}
            />
            <TextInput 
                style={styles.input}
                value={email}
                onChangeText={setEmail}
                placeholderTextColor='#4a9ea8'
                placeholder="Email"
                keyboardType="email-address"
                autoCapitalize="none"
                maxLength={320}
            />
            <TextInput 
                style={styles.input}
                value={phone}
                onChangeText={setPhone}
                placeholderTextColor='#4a9ea8'
                placeholder="Telefone"
                keyboardType="phone-pad"
                maxLength={11}
            />

            <Button onPressButton={save}>
                <Text style={styles.buttonText}>{person ? "Salvar" : "Adicionar"}</Text>
            </Button>

            <Button onPressButton={() => navigation.goBack()}>
                <Text style={styles.buttonText}>Cancelar</Text>
            </Button>
        </View>


    )
};
    
export default AddEditScreen;