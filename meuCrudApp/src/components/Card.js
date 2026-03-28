import { Text, View } from "react-native";

import Button from '../components/Button';
import { deletePerson } from '../api/peopleService';
import styles from '../styles/styles';

export default function Card ({item, navigation, loadPeople}) {
    return (
        <View style={styles.card}>

            <Text style={styles.cardTitle}>
                {item.firstname} {item.lastname}
            </Text>

            <Text style={styles.text}>{item.email}</Text>
            <Text style={styles.text}>{item.phone}</Text>

            <View>
                <Button onPressButton={() => navigation.navigate('AddEditScreen', { person: item })}>
                    <Text style={styles.buttonText}>Editar</Text>
                </Button>

                <Button onPressButton={async () => {
                    await deletePerson(item.id);
                    loadPeople();
                }}>
                    <Text style={styles.buttonTextdelete}>Excluir</Text>
                </Button>
            </View>
        </View>
    )
}