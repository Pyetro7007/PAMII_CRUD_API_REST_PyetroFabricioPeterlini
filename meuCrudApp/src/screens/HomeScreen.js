import React, {useState, useEffect} from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';

import Button from '../components/Button';
import Card from '../components/Card';
import { getPeople } from '../api/peopleService';
import styles from '../styles/styles';

const HomeScreen = ({ navigation }) => {
    const [people, setPeople] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const loadPeople = async () => {
        try {
            setLoading(true);
            const data = await getPeople();
            setPeople(data);
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
    }, []);

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
                <ActivityIndicator size="large" color="#000000"/>
                <Text>Carregando...</Text>
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

            <FlatList 
                data={people}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View>
                        <Card
                            item={item}
                            navigation={navigation}
                            loadPeople={loadPeople}
                        />
                    </View>
                )}
            />
        </View>
    );
};

export default HomeScreen;