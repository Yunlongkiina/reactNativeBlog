import React,{useState, useContext} from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import {Context} from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';
import { useNavigation } from '@react-navigation/native';

const EditScreen =({ route: { params } })=>{
    const {state} = useContext(Context)
    const {id} = params
    const blogPost = state.find(item=>item.id === id)
    const navigation = useNavigation();
    navigation.removeListener

    // const [newTitle, setNewTitle] = useState(blogPost.title)
    // const [newContent, setNewContent] = useState(blogPost.content)

    return <BlogPostForm
            initValues={{title: blogPost.title,content:blogPost.content}}
            onSubmit={(title,content)=>{
                addBlogPost(title,content,()=>navigation.navigate('Index'))
            }}
        />
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

export default EditScreen