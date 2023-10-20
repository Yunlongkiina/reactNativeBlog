import React,{useState, useContext} from "react";
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';
import { Context } from "../context/BlogContext";
import { useNavigation } from '@react-navigation/native';
import BlogPostForm from "../components/BlogPostForm";

const CreateScreen=()=>{
    const {addBlogPost} = useContext(Context);
    const navigation = useNavigation();
    navigation.removeListener

    return <BlogPostForm onSubmit={(title,content)=>{
        addBlogPost(title,content,()=>navigation.navigate('Index'))
    }}/>
}

const styles = StyleSheet.create({
    inputStyle:{
        fontSize:18,
        borderWidth:1,
        borderColor:'black',
        marginBottom:15,
        padding:5,
        margin:5
    },
    lableStyle:{
        fontSize:20,
        marginBottom:10,
        marginLeft:5
    }
});

export default CreateScreen;