import React from 'react';
import {
    StyleSheet,
    Text,
    TouchableHighlight,
    Dimensions
} from 'react-native';

export default props => {

    const estiloBotoes=[styles.btn]
    if(props.duplo){
        estiloBotoes.push(styles.btnDuplo)
    }
    if(props.Igual){
        estiloBotoes.push(styles.btnIgual)
    }
    if(props.operacao){
        estiloBotoes.push(styles.btnOper)
    }
    if(props.ac){
        estiloBotoes.push(styles.btnaAC)
    }

    if(props.bs){
        estiloBotoes.push(styles.btnBs)
    }

    return (
        <TouchableHighlight
        onPress={props.aoClicar}

        >
            <Text style={estiloBotoes}>{props.label}</Text>

        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({

btn:{
    fontSize:30,
    height:Dimensions.get('window').width/4,
    width:Dimensions.get('window').width/4,
    padding:20,
    backgroundColor:'#000',
    color:'#fff',
    textAlign:'center'
},


btnIgual:{
    color:'red'

},

btnaAC:{
    color:'#0f0'

},

btnOper:{
    color:'#ff0'

},

btnBs:{
    color:'#0ff'

},

btnDuplo:{
    width:(Dimensions.get('window').width/4)*2,
}

})