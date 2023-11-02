import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {postsAPI} from "../../api/postsAPI";
import {modifyPosts} from "../../helpers/modifyPosts";

const initialState = {
    posts: {
        list: null,
        loading: false
    },
    postForView: {
        post: null,
        loading: false
    },
    freshPosts: {
        posts: null,
        loading: false
    },
    currentPagePosts: {
        list: null,
        loading: false
    },
    totalPages: 1,
    currentPage: 1
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
            state.posts.list = state.posts.list.map((post) => {
                if (post.id === action.payload.id) {
                    return action.payload
                }
                return post
            })
        },
        addPost: (state, action) => {
            const newPost = {...action.payload}

            newPost.id = new Date().getTime()
            state.posts.list = state.posts.list ? [newPost, ...state.posts.list] : [newPost]
        },
        showPost: (state, action) => {
            state.postForView = {
                post: action.payload,
                loading: false
            }
        },
        deletePost: (state, action) => {
            state.posts.list = state.posts.list.filter((post) => post.id !== action.payload.id)

            state.postForView = {
                post: null,
                loading: false
            }
        },
        changePage: (state, action) => {
            state.currentPage = action.payload
        },
        setCurrentPagePosts: (state, action) => {
            const { searchQuery, sorterName, listToModify, pageNumber } = {...action.payload}
            state.totalPages = modifyPosts(searchQuery, sorterName, listToModify, pageNumber)[0]
            state.currentPagePosts.list = modifyPosts(searchQuery, sorterName, listToModify, pageNumber)[1]
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

export const {
    editPost,
    addPost,
    showPost,
    deletePost,
    changePage,
    setCurrentPagePosts
} = postsSlice.actions

export default postsSlice.reducer