import {Posts} from "../../components/Posts";
import {Container} from "../../components/Container";
import {Typo} from "../../components/Typo";
import {current} from "@reduxjs/toolkit";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getFreshPosts} from "../../redux/slices/postsSlice";

export const MainPage = () => {
    const { post } = useSelector((state) => state.posts.postForView)
    const {posts, loading} = useSelector((state) => state.posts.freshPosts)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getFreshPosts())
    }, [])

    return(
        <>
            <Container>
                {loading && <>Loading...</>}
                {posts &&
                    <>
                        <Typo>Свежие публикации</Typo>
                        <Posts posts={posts}/>
                    </>
                }
                {post &&
                    <>
                        <Typo>Последний просмотренный пост</Typo>
                        <Posts posts={[post]} />
                    </>
                }
            </Container>
        </>
    )
}