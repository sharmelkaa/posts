import {Posts} from "../../components/Posts";
import {Container} from "../../components/ui/Container";
import {Typo} from "../../components/ui/Typo";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getPosts} from "../../redux/slices/postsSlice";

export const PostsPage = () => {
    const { list, loading } = useSelector((state) => state.posts.posts)
    const dispatch = useDispatch()

    useEffect(() => {
        if (!list) {
            dispatch(getPosts())
        }

    }, [list, dispatch])

    if (!list && loading) {
        return <Container>Loading...</Container>
    }

    if (!list) {
        return <Container>404</Container>
    }

    return(
        <Container>
            <Typo>Публикации</Typo>
            <Posts posts={list}/>
        </Container>
    )
}