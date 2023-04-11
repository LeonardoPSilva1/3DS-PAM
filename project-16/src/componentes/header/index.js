import React from "react";
import {View, Text, TouchableOpacity} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import styles from "./style";

export default function Header(){
    return(
        <View style = {styles.viewHeader}>
            <TouchableOpacity>
            <Entypo style={{marginLeft:-72}} name="menu" size={36} color="white" />
            </TouchableOpacity> 
            <Text style = {styles.textHeader}> TEC FILMES </Text>

        </View>
    );
}