import React, {useState, useEffect} from 'react';
import { View, Text, FlatList, ActivityIndicator, Dimensions } from 'react-native';

import Button from '../components/Button';
import { getPerson, deletePerson } from '../api/peopleService';
import styles from '../styles/styles';

const windowWidth = Dimensions.get('window').width;

const HomeScreen = ({ navigation }) => {
    const [people, setPeople] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const loadPeople = async () => {
        try {
            setLoading(true);
            const data = await getPerson();
            setPeople(data);
        } catch (err) {
            setError("Não foi possível carregar os detalhes do personagem");
        } finally {
            setLoading(false);
        }
    };

    // Garante que alista carrega ao abrir
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
                <Button aoPressionar={() => navigation.navigate('AddEditScreen')}>
                    <Text style={styles.buttonTextAdd}>+ Adicionar Pessoa</Text>
                </Button>
            </View>

            <FlatList 
                data={people}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <Text style={styles.cardTitle}>
                            {item.firstname} {item.lastname}
                        </Text>
                        <Text style={styles.text}>{item.email}</Text>

                        <View>
                            <Button aoPressionar={() => navigation.navigate('AddEditScreen', { person: item })}>
                                <Text style={styles.textButton}>Editar</Text>
                            </Button>

                            <Button aoPressionar={async () => {
                                await deletePerson(item.id);
                                loadPeople();
                            }}>
                                <Text style={styles.buttonText}>Excluir</Text>
                            </Button>
                        </View>
                    </View>
                )}
            />
        </View>
    );
};

export default HomeScreen;