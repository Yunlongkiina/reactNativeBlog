import React, {useContext} from "react";
import {View, Text, StyleSheet} from 'react-native';
import {Context} from '../context/BlogContext';

const ShowScreen=({ route: { params } })=>{
    const {state} = useContext(Context)
    const {id} = params

    const blogPost = state.find(item=>item.id === id)

    return(
        <View>
            <Text>{blogPost.title}</Text>
            <Text>{blogPost.content}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    listContainer:{
    },
});

export default ShowScreen;