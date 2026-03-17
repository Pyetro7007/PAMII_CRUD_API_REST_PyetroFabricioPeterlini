import {StyleSheet, Text, View} from "react-native";

import Button from '../components/Button';
import { deletePerson } from '../api/peopleService';

const windowWidth = Dimensions.get('window').width;

export default function Card (item, navigation, loadPeople) {
    return (
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
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#e0f4f6',
        borderRadius: 8,
        padding: 16,
        marginBottom: 12,
        borderWidth: 1,
        borderColor: '#83c5be',
        width: windowWidth - 32,
    },
});