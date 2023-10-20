import React, {useContext} from "react";
import {View, Text, StyleSheet, FlatList, Button, TouchableOpacity} from 'react-native';
import {Context} from '../context/BlogContext';

const ShowScreen=({ route: { params } })=>{
    const {state} = useContext(Context)
    console.log(params);
    const {id} = params.id

    const blogPost = state.find(item=>item.id === id)

    return(
        <View>
            <Text>{blogPost.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    listContainer:{
    },
});

export default ShowScreen;