import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    list: [
        {
            id: 1,
            title: 'Post 1',
            image: 'https://greetcard.ru/uploads/posts/2022-07/1657870668_kartinka-privet-7.jpg',
            body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A illo numquam ut. Asperiores dicta ducimus itaque iure ullam voluptate? Adipisci harum ipsam laboriosam officia quasi quia rerum unde! Facilis, nostrum.'
        },
        {
            id: 2,
            title: 'Post 2',
            image: 'https://greetcard.ru/uploads/posts/2022-07/1657870668_kartinka-privet-7.jpg',
            body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A illo numquam ut. Asperiores dicta ducimus itaque iure ullam voluptate? Adipisci harum ipsam laboriosam officia quasi quia rerum unde! Facilis, nostrum.'
        },
        {
            id: 3,
            title: 'Post 3',
            image: 'https://greetcard.ru/uploads/posts/2022-07/1657870668_kartinka-privet-7.jpg',
            body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A illo numquam ut. Asperiores dicta ducimus itaque iure ullam voluptate? Adipisci harum ipsam laboriosam officia quasi quia rerum unde! Facilis, nostrum.'
        },
        {
            id: 4,
            title: 'Post 4',
            image: 'https://greetcard.ru/uploads/posts/2022-07/1657870668_kartinka-privet-7.jpg',
            body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A illo numquam ut. Asperiores dicta ducimus itaque iure ullam voluptate? Adipisci harum ipsam laboriosam officia quasi quia rerum unde! Facilis, nostrum.'
        },
        {
            id: 5,
            title: 'Post 5',
            image: 'https://greetcard.ru/uploads/posts/2022-07/1657870668_kartinka-privet-7.jpg',
            body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A illo numquam ut. Asperiores dicta ducimus itaque iure ullam voluptate? Adipisci harum ipsam laboriosam officia quasi quia rerum unde! Facilis, nostrum.'
        }
    ],
    postForView: null,
    freshPosts: null
}

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        setPosts: (state, action) => {
            state.posts = action.payload
        },
        editPost: (state, action) => {
            // edit post
        },
        getPost: (state, action) => {
            state.postForView = state.list.find((item) => item.id === action.payload)
        },
        getFreshPosts: (state, action) => {
            state.freshPosts = state.list.slice(0, 3)
        },
        addPost: (state, action) => {
            // add new post by data
        }
    },
})

export const { setPosts, editPost, getPost, addPost, getFreshPosts } = postsSlice.actions

export default postsSlice.reducer