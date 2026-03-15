import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    // Container
    container: {
        flex: 1,
        backgroundColor: '#f0fafb',
        padding: 16,
    },

    // Loading e erro
    centerMessage: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0fafb',
    },

    // Headers
    headerHome: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
        marginTop: 35,
        width: windowWidth - 32,
    },
    headerAddEdit: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 16,
        marginTop: 35,
        width: windowWidth - 32,
    },

    // Cards
    card: {
        backgroundColor: '#e0f4f6',
        borderRadius: 8,
        padding: 16,
        marginBottom: 12,
        borderWidth: 1,
        borderColor: '#83c5be',
        width: windowWidth - 32,
    },

    // Textos
    homeTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#00343a',
        marginTop: -15,
    },
    addEditTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#00343a',
        marginBottom: 24,
        textAlign: 'center',
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#006d77',
        marginBottom: 4,
    },
    text: {
        fontSize: 14,
        color: '#4a9ea8',
        marginTop: 4,
        marginBottom: 8,
    },
    errorText: {
        fontSize: 14,
        color: '#e63946',
        marginBottom: 12,
        textAlign: 'center',
    },

    // Inputs
    input: {
        borderWidth: 1,
        borderColor: '#83c5be',
        borderRadius: 8,
        padding: 12,
        marginBottom: 20,
        fontSize: 16,
        color: '#00343a',
        backgroundColor: '#f0fafb',
        width: windowWidth - 32,
    },

    // Botões
    buttonText: {
        color: '#e63946',
        fontSize: 16,
        fontWeight: 'bold',
    },
    buttonTextAdd: {
        color: '#00343a',
        fontSize: 16,
        fontWeight: 'bold',
    },
    
});

export default styles;