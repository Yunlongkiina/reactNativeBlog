// import React, {useReducer} from "react";
import createDataContext from "./createDataContext";

// const BlogContext = React.createContext();

const blogReducer =(state, action)=>{
    switch(action.type){
        case 'Add_post':
            return [...state,
                {
                    id: Math.floor(Math.random()*99999),
                    title:`Blog title # ${state.length+1}`} ]
        case 'delete_blogpost':
            return state.filter(blogPost=>blogPost.id !== action.payload)
        default:
            state
    }
}
const addBlogPost = dispatch =>{return ()=>{
    dispatch({type: 'Add_post'})
}}

const deleteBlogPost =dispatch=>{
    return (id)=>{
        dispatch({type: 'delete_blogpost', payload: id})
    }
}

// export const BlogProvider = ({children})=>{
//     const [blogPosts, dispatch] = useReducer(blogReducer, [])
//     const addBlogPost =()=>{dispatch({type: 'Add_post'})}

//     return <BlogContext.Provider value={{data: blogPosts, addBlogPost:addBlogPost}}>
//         {children}
//     </BlogContext.Provider>
// }

export const {Context, Provider} = createDataContext(blogReducer,{addBlogPost,deleteBlogPost},[]);