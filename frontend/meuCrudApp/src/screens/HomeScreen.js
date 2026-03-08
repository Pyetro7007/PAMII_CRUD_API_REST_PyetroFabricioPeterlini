import React, {useEffect} from 'react';

import Botao from '../components/Botao';

const HomeScreen = ({ navigation }) => {
    const [people, setPeople] = useState([]);

    // se fizer direto no useEffect executa uma vez quando a tela abre, 
    // se colocar dentro da função pode chamar mais de uma vez
    const fetchPeople = () => {
        fetch('http://localhost:3000/people')
            .then(response => response.json())
            .then(data => setPeople(data))
            .catch(error => console.error(error));
    };

    useEffect(() => {
        fetchPeople();
    }, []);

    // função para deletar
    const removePeople = (id) => {
        fetch(`http://localhost:3000/people/${id}`, {
            method: 'DELETE'
        }) 
        .then(() => fetchPeople())
        .catch(error => console.error(error));
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

                            <Botao aoPressionar={() => removePeople(item.id)}>
                                <Text style={{color: 'white'}}>Excluir</Text>
                            </Botao>
                        </View>
                    </View>
                )}
            />
        </View>
    );
}