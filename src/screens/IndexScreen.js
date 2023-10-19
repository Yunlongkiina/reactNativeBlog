import React, {useContext} from "react";
import {View, Text, StyleSheet, FlatList, Button, TouchableOpacity} from 'react-native';
import {Context} from "../context/BlogContext";
import { AntDesign } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';

const IndexScreen=()=>{
    const {state, addBlogPost, deleteBlogPost} = useContext(Context);
    const navigation = useNavigation();
    navigation.removeListener

    return(
        <View>
            <Button
                title="Add Post"
                onPress={()=>addBlogPost()}
            />
            <FlatList 
                data={state}
                keyExtractor={(blogPost)=>blogPost.id}
                renderItem={({item})=>{
                    return(
                        <TouchableOpacity onPress={()=>{
                            navigation.navigate('Show',{'id':item.id})
                         }}>
                            <View style={styles.listContainer}>
                                <Text style={styles.titleStyle}>{item.title}---{item.id}</Text>
                                <TouchableOpacity onPress={()=>deleteBlogPost(item.id)}>
                                    <AntDesign name="delete" size={24} color="black" />
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    listContainer:{
        flexDirection:'row',
        justifyContent:"space-between",
        paddingVertical:20,
        paddingHorizontal:10,
        borderBottomWidth:1,
        borderColor:'gray'
    },
    titleStyle:{
        fontSize:18
    },
    deleteIconStyle:{
        
    }
});

export default IndexScreen;