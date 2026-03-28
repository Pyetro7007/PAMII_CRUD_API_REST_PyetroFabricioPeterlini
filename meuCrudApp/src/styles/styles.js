import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    // Container
    container: {
        flex: 1,
        backgroundColor: '#0d1b1e',
        padding: 16,
    },

    // Loading e erro
    centerMessage: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#112226',
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

    // Textos
    homeTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#e0f4f6',
        marginTop: -15,
    },
    addEditTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#e0f4f6',
        marginBottom: 24,
        textAlign: 'center',
    },
    text: {
        fontSize: 14,
        color: '#4a9ea8',
        marginTop: 4,
        marginBottom: 4,
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
        borderColor: '#1a3a40',
        borderRadius: 8,
        padding: 12,
        marginBottom: 20,
        fontSize: 16,
        color: '#e0f4f6',
        backgroundColor: '#112226',
        width: windowWidth - 32,
    },

    // Botões
    button:{
        flexDirection: 'row',
        marginBottom: 15,
        alignItems: 'center',
        backgroundColor: '#006d77',
        padding: 10,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: '#1a3a40',
    },
    buttonTextdelete: {
        marginLeft: 10,
        color: '#e63946',
        fontSize: 16,
        fontWeight: 'bold',
    },
    buttonText: {
        marginLeft: 10,
        color: '#e0f4f6',
        fontSize: 16,
        fontWeight: 'bold',
    },
    buttonTextAdd: {
        color: '#e0f4f6',
        fontSize: 16,
        fontWeight: 'bold',
    },
    
    // Cards
    card: {
        backgroundColor: '#112226',
        borderRadius: 8,
        padding: 16,
        marginBottom: 12,
        borderWidth: 1,
        borderColor: '#1a3a40',
        width: windowWidth - 32,
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#83c5be',
        marginBottom: 4,
    },
});

export default styles;