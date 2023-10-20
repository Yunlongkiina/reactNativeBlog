import React,{useState, useContext} from "react";
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';
import { Context } from "../context/BlogContext";
import { useNavigation } from '@react-navigation/native';

const CreateScreen=()=>{
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const {addBlogPost} = useContext(Context);
    const navigation = useNavigation();
    navigation.removeListener

    return(
        <View>
            <Text style={styles.lableStyle}> Enter Title: </Text>
            <TextInput
                value={title}
                onChangeText={text=>setTitle(text)}
                style={styles.inputStyle}
                />
            <Text style={styles.lableStyle}> Enter Content: </Text>
            <TextInput
                value={content}
                onChangeText={text=>setContent(text)}
                style={styles.inputStyle}
                />
            <Button
                title="Add New Blog Post"
                onPress={()=>{
                    addBlogPost(title, content,()=>{
                        navigation.navigate('Index')
                    })
                }}
            />
        </View>
    )
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