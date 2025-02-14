import react from "react";
import {View, Text, StyleSheet, Image} from "react-native";

const Latihan01 = () => {
    return (
        <>
        <View style={{ 
                backgroundColor:"black", 
                flex:1, 
                width: "100%", 
                alignItems:"center", 
                justifyContent:"center", }} >

            <Image source={require('./assets/akiong.png')} />
            <Text style={style.tekssaya }>Hello ini dari halaman Latihan01</Text>
        </View>

        <View style={style.container} >
            <Text style={style.tekssaya }>Hello ini flex02</Text>
        </View>
        </>
    );
}

const style = StyleSheet.create({
    tekssaya: {
        color:"white",
        fontWeight:"bold",
    },
    container: {
        flex:2,
        backgroundColor:"#108489",
        width:"100%",
        alignItems:"center", 
        justifyContent:"center"
    }
});

export default Latihan01;