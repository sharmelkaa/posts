import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {Typo} from "../../../components/ui/Typo";
import {Container} from "../../../components/ui/Container";
import * as SC from './styles'
import {Link} from "../../../components/ui/Link";
import {useDispatch, useSelector} from "react-redux";
import {deletePost, getPostById, showPost} from "../../../redux/slices/postsSlice";
import {Modal} from "../../../components/ui/Modal";
import {Button} from "../../../components/ui/Button";
import {Loader} from "../../../components/ui/Loader";

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
        return <Loader />
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
                    onClose={() => setPostForDelete(null)}
                >
                    <SC.ModalContent>
                        <Button onClick={onDeletePost} dangerous={true}>Да</Button>
                        <Button onClick={() => setPostForDelete(null)}>Нет</Button>
                    </SC.ModalContent>
                </Modal>
            }
            <Typo>{post.title}</Typo>
            <SC.Image src={image} alt={post.title} />
            <SC.Text>{post.body}</SC.Text>
            <SC.LinkWrapper>
                <Link to={'/posts'}>Обратно к публикациям</Link>
                {showEditAndDelete && <Link to={`/posts/${id}/edit`}>Редактировать пост</Link>}
                {showEditAndDelete && <Button onClick={() => setPostForDelete(post)} dangerous={true}>Удалить</Button>}
            </SC.LinkWrapper>
        </Container>
    )
}