import React,{useState} from 'react';
import { View, Text, StyleSheet, TextInput,Button } from 'react-native';
// import {Context} from '../context/BlogContext';

const BlogPostForm =({onSubmit,initValues})=>{

    const [title, setTitle] = useState(initValues.title);
    const [content, setContent] = useState(initValues.content);

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
                title="Save Blog Post"
                onPress={()=>onSubmit(title,content)}
            />
        </View>
    )

}

// give initValues a default values
BlogPostForm.defaultProps={
    initValues:{
        title:'',
        content:''
    }
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

export default BlogPostForm