import {Posts} from "../../components/Posts";
import {Container} from "../../components/Container";
import {Typo} from "../../components/Typo";
import {current} from "@reduxjs/toolkit";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getFreshPosts} from "../../redux/slices/postsSlice";

const INITIAL_POSTS = [
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
]

export const MainPage = () => {
    const postForView = useSelector((state) => state.posts.postForView)
    const freshPosts = useSelector((state) => state.posts.freshPosts)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getFreshPosts())
    }, [])

    return(
        <>
            <Container>
                {freshPosts &&
                    <>
                        <Typo>Свежие публикации</Typo>
                        <Posts posts={INITIAL_POSTS}/>
                    </>
                }
                {postForView &&
                    <>
                        <Typo>Последний просмотренный пост</Typo>
                        <Posts posts={[postForView]} />
                    </>
                }
            </Container>
        </>
    )
}