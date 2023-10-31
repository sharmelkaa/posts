import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {Typo} from "../../../components/Typo";
import {Container} from "../../../components/Container";
import * as SC from './styles'
import {Link} from "../../../components/Link";
import {useDispatch, useSelector} from "react-redux";
import {deletePost, getPostById, showPost} from "../../../redux/slices/postsSlice";

export const DetailPostPage = () => {
    const { id } = useParams()
    const { list } = useSelector((state) => state.posts.posts)
    const postForView = useSelector((state) => state.posts.postForView)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [postForDelete, setPostForDelete] = useState(null)

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

    const onDeletePost = () => {
        dispatch(deletePost(postForDelete))
        setPostForDelete(null)
         navigate('/posts')

    }

    const { post } = postForView
    const image = post.image || 'https://greetcard.ru/uploads/posts/2022-07/1657870668_kartinka-privet-7.jpg'

    return(
        <Container>
            {postForDelete &&
                <SC.ModalWrapper>
                    <SC.Modal>
                        <SC.ModalText>{`Вы точно уверены, что хотите удалить публикацию с ID - ${postForDelete.id}`}</SC.ModalText>
                        <SC.ModalContent>
                            <SC.DeleteButton onClick={onDeletePost}>Да</SC.DeleteButton>
                            <button onClick={() => setPostForDelete(null)}>Нет</button>
                        </SC.ModalContent>
                    </SC.Modal>
                </SC.ModalWrapper>
            }
            <Typo>{post.title}</Typo>
            <SC.Image src={image} alt={post.title} />
            <SC.Text>{post.body}</SC.Text>
            <SC.LinkWrapper>
                <Link to={'/posts'}>Обратно к публикациям</Link>
                {list && <Link to={`/posts/${id}/edit`}>Редактировать пост</Link>}
                {list && <SC.DeleteButton onClick={() => setPostForDelete(post)}>Удалить</SC.DeleteButton>}
            </SC.LinkWrapper>
        </Container>
    )
}