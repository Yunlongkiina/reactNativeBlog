// import React, {useReducer} from "react";
import createDataContext from "./createDataContext";

// const BlogContext = React.createContext();

const blogReducer =(state, action)=>{
    switch(action.type){
        case 'Add_post':
            return [...state,
                {
                    id: Math.floor(Math.random()*99999),
                    title: action.payload.title,
                    content: action.payload.content
                }];
        case 'delete_blogpost':
            return state.filter(blogPost=>blogPost.id !== action.payload);
        case 'edit_blogpost':
            return state.map((blogPost)=>{
                return blogPost.id == action.payload.id ? action.payload:blogPost
            })
        default:
            state
    }
}
const addBlogPost = dispatch =>{return (title, content, callback)=>{
    // return async (title, content)=>{
    // try{
    //     await axios.post('postapi', title, content)
    //     dispatch({type: 'Add_post', payload:{title, content}})
    //     useCallback()
    // }catch(e){}

    dispatch({type: 'Add_post', payload:{title, content}});
    callback();
}}

const deleteBlogPost =dispatch=>{
    return (id)=>{
        dispatch({type: 'delete_blogpost', payload: id})
    }
}

// payload:{id:id,title:title,content:content} is same as payload:{id,title,content}

const editBlogPost = dispatch =>{
    return (id, title, content,callback)=>{
        dispatch({type: 'edit_blogpost', payload:{
            id:id,
            title:title,
            content:content
        }});
        callback();
    }
}


// export const BlogProvider = ({children})=>{
//     const [blogPosts, dispatch] = useReducer(blogReducer, [])
//     const addBlogPost =()=>{dispatch({type: 'Add_post'})}

//     return <BlogContext.Provider value={{data: blogPosts, addBlogPost:addBlogPost}}>
//         {children}
//     </BlogContext.Provider>
// }

export const {Context, Provider} = createDataContext(
        blogReducer,
        {addBlogPost,deleteBlogPost,editBlogPost},
        [{title:'Test title', content: 'Test content', id:1}]);