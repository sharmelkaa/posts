import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {Typo} from "../../../components/ui/Typo";
import {Container} from "../../../components/ui/Container";
import * as SC from './styles'
import {Link} from "../../../components/ui/Link";
import {useDispatch, useSelector} from "react-redux";
import {deletePost, getPostById, showPost} from "../../../redux/slices/postsSlice";
import {Modal} from "../../../components/ui/Modal";

export const DetailPostPage = () => {
    const { id } = useParams()
    const { list } = useSelector((state) => state.posts.posts)
    const postForView = useSelector((state) => state.posts.postForView)
    const { user } = useSelector((state) => state.auth)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const showEditAndDelete = list && user

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
                <Modal
                    text={`Вы точно уверены, что хотите удалить публикацию с ID - ${postForDelete.id}`}
                    type='normal'
                    direction='column'
                >
                    <SC.ModalContent>
                        <SC.DeleteButton onClick={onDeletePost}>Да</SC.DeleteButton>
                        <button onClick={() => setPostForDelete(null)}>Нет</button>
                    </SC.ModalContent>
                </Modal>
            }
            <Typo>{post.title}</Typo>
            <SC.Image src={image} alt={post.title} />
            <SC.Text>{post.body}</SC.Text>
            <SC.LinkWrapper>
                <Link to={'/posts'}>Обратно к публикациям</Link>
                {showEditAndDelete && <Link to={`/posts/${id}/edit`}>Редактировать пост</Link>}
                {showEditAndDelete && <SC.DeleteButton onClick={() => setPostForDelete(post)}>Удалить</SC.DeleteButton>}
            </SC.LinkWrapper>
        </Container>
    )
}