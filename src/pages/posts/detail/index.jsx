import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {Typo} from "../../../components/Typo";
import {Container} from "../../../components/Container";
import * as SC from './styles'
import {Link} from "../../../components/Link";
import {useDispatch, useSelector} from "react-redux";
import {getPostById, showPost} from "../../../redux/slices/postsSlice";

export const DetailPostPage = () => {
    const { id } = useParams()
    const { list } = useSelector((state) => state.posts.posts)
    const postForView = useSelector((state) => state.posts.postForView)
    const dispatch = useDispatch()

    useEffect(() => {
        const intID = Number(id)
        const foundPost = list ? list.find((item) => item.id === intID) : undefined

        if (foundPost) {
            dispatch(showPost(foundPost))
        } else {
            dispatch(getPostById(intID))
        }
    }, [id, list, dispatch])

    if (postForView.loading) {
        return <Container>Loading...</Container>
    }

    if (!postForView.post || !postForView.post.hasOwnProperty('id')) {
        return <>Пост не найден</>
    }

    const { post, loading } = postForView
    const image = post.image || 'https://greetcard.ru/uploads/posts/2022-07/1657870668_kartinka-privet-7.jpg'

    return(
        <Container>
            <Typo>{post.title}</Typo>
            <SC.Image src={image} alt={post.title} />
            <SC.Text>{post.body}</SC.Text>
            <SC.LinkWrapper>
                <Link to={'/posts'}>Обратно к публикациям</Link>
                <Link to={`/posts/${id}/edit`}>Редактировать пост</Link>
            </SC.LinkWrapper>
        </Container>
    )
}