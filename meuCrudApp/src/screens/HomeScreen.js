import React, {useState, useEffect} from 'react';
import { View, Text, FlatList, ActivityIndicator, TextInput } from 'react-native';

import Button from '../components/Button';
import Card from '../components/Card';
import { getPeople } from '../api/peopleService';
import styles from '../styles/styles';

const HomeScreen = ({ navigation }) => {
    const [people, setPeople] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState('');
    const [error, setError] = useState(null);

    const loadPeople = async () => {
        try {
            if (!search) setLoading(true);
            const data = await getPeople();

            const filtered = search ? data.filter(people => 
                people.firstname.toLowerCase().includes(search.toLowerCase()) || 
                people.lastname.toLowerCase().includes(search.toLowerCase())
            ) : data;

            setPeople(filtered);
        } catch (err) {
            console.error(err);
            setError("Não foi possível carregar");
        } finally {
            setLoading(false);
        }
    };

    // Garante que a lista carrega ao abrir
    useEffect(() => {
        loadPeople();
    }, [search]);

    // Garente que a lista atualiza ao voltar da AddEditScreen
    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            loadPeople();
        });
        return unsubscribe;
    }, [navigation]);

    if (loading) {
        return (
            <View style={styles.centerMessage}>
                <ActivityIndicator size="large" color="#ffffff"/>
                <Text style={{color:"#ffffff"}}>Carregando...</Text>
            </View>
        );
    };

    if (error) {
        return (
            <View style={styles.centerMessage}>
                <Text style={styles.errorText}> {error} </Text>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <View style={styles.headerHome}>
                <Text style={styles.homeTitle}>Lista de Pessoas</Text>
                <Button onPressButton={() => navigation.navigate('AddEditScreen')}>
                    <Text style={styles.buttonTextAdd}>+ Adicionar Pessoa</Text>
                </Button>
            </View>

            <TextInput
              style={styles.input}
              placeholder="Buscar"
              placeholderTextColor='#4a9ea8'
              value={search}
              onChangeText={setSearch}
            />

            <FlatList 
                data={people}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <Card
                        item={item}
                        navigation={navigation}
                        loadPeople={loadPeople}
                    />
                )}
            />
        </View>
    );
};

export default HomeScreen;