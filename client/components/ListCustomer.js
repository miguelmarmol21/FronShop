import { View, Text, FlatList } from "react-native";
import { styles } from "../assets/styles/styles";
import axios from 'axios';
import { useEffect } from "react";
import { useState } from 'react';
import { Button } from "react-native-paper";

export default function ListCustomer(){

    const [data,setData] = useState([])
    const   getCustomers = async () =>{
        const response = await axios.get(`http://127.0.0.1:3000/api/clientes`)
        setData(response.data)
    }

    return(
        <View style={styles.container}>
            <Text>
                Aqui se mostraran los clientes
            </Text>
            <Button
                style={{backgroundColor:'red', marginTop:10}}
                icon='view-list'
                mode='contained'
                onPress={getCustomers}
            >Listar Clientes</Button>
            <FlatList 
                data={data}
                style={{marginTop:10}}
                renderItem={({ item }) => <Text style={{backgroundColor:'skyblue',borderRadius:10,padding:10,textAlign:'center',marginTop:10}}>{item.nombre}</Text>}
            />
        </View>
    )
}