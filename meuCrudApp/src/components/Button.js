import { TouchableOpacity, StyleSheet } from "react-native";

import styles from '../styles/styles';

// children - conteúdo do botão
// onPressButton - mesma coisa que o onPress, função que é executada quando o botão é apertado
export default function Button({children, onPressButton}){
    return(
        <TouchableOpacity style={styles.button}onPress={onPressButton} >
            {children}
        </TouchableOpacity>
    )
};

