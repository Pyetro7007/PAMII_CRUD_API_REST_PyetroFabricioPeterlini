import { TouchableOpacity, StyleSheet } from "react-native";

// children - conteúdo do botão
// aoPressionar - mesma coisa que o onPress, função que é executada quando o botão é apertado
export default function Button({children, aoPressionar}){
    return(
        <TouchableOpacity style={styles.button}onPress={aoPressionar} >
            {children}
        </TouchableOpacity>
    )
}

// estilizações do botão, usado em todos as outras telas
const styles = StyleSheet.create({
    button:{
        flexDirection: 'row',
        marginBottom: 15,
        alignItems: 'center',
        backgroundColor: '#d4eff1',
        padding: 10,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: '#83c5be',
    },
});

