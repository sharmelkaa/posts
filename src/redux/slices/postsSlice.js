import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {postsAPI} from "../../api/postsAPI";

const initialState = {
    posts: {
        list: [
            {
                id: 1,
                title: 'Post 1',
                image: 'https://greetcard.ru/uploads/posts/2022-07/1657870668_kartinka-privet-7.jpg'
            },
            {
                id: 2,
                title: 'Post 2',
                image: 'https://greetcard.ru/uploads/posts/2022-07/1657870668_kartinka-privet-7.jpg'
            },
            {
                id: 3,
                title: 'Post 3',
                image: 'https://greetcard.ru/uploads/posts/2022-07/1657870668_kartinka-privet-7.jpg'
            }
        ],
        loading: false
    },
    postForView: {
        post: null,
        loading: false
    },
    freshPosts: {
        posts: null,
        loading: false
    }
}

export const getPostById = createAsyncThunk(
    'posts/fetchById',
    async (postId) => {
        return await postsAPI.fetchById(postId)
    }
)

export const getPosts = createAsyncThunk(
    'posts/fetchPosts',
    async () => {
        return await postsAPI.fetchPosts()
    }
)

export const getFreshPosts = createAsyncThunk(
    'posts/fetchFreshPosts',
    async (limit) => {
        return await postsAPI.fetchFreshPosts()
    }
)

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        editPost: (state, action) => {
            // edit post
        },
        addPost: (state, action) => {
            // add new post by data
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getPostById.fulfilled, (state, action) => {
            state.postForView = {
                post: action.payload,
                loading: false
            }
        })
        builder.addCase(getPostById.pending, (state, action) => {
            state.postForView = {
                post: null,
                loading: true
            }
        })
        builder.addCase(getPosts.fulfilled, (state, action) => {
            state.posts = {
                list: action.payload,
                loading: false
            }
        })
        builder.addCase(getPosts.pending, (state, action) => {
            state.posts = {
                list: null,
                loading: true
            }
        })
        builder.addCase(getFreshPosts.fulfilled, (state, action) => {
            state.freshPosts = {
                posts: action.payload,
                loading: false
            }
        })
        builder.addCase(getFreshPosts.pending, (state, action) => {
            state.freshPosts = {
                posts: null,
                loading: true
            }
        })
    },
})

export const { editPost, addPost} = postsSlice.actions

export default postsSlice.reducer