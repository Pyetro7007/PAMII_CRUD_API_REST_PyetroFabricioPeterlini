import React, {useState, useEffect} from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';

import Botao from '../components/Botao';
import { getPerson, deletePerson } from '../api/peopleService';

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
        <View>
            <Botao aoPressionar={() => navigation.navigate('AddEditScreen')}>
                <Text style={{color: 'white'}}>+ Adicionar Pessoa</Text>
            </Botao>

            <FlatList 
                data={people}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View>
                        <Text>{item.firstname} {item.lastname}</Text>
                        <Text>{item.email}</Text>

                        <View>
                            <Botao aoPressionar={() => navigation.navigate('AddEditScreen', { person: item })}>
                                <Text style={{color: 'white'}}>Editar</Text>
                            </Botao>

                            <Botao aoPressionar={async () => {await deletePerson(item.id), loadPeople()}}>
                                <Text style={{color: 'white'}}>Excluir</Text>
                            </Botao>
                        </View>
                    </View>
                )}
            />
        </View>
    );
};

export default HomeScreen;