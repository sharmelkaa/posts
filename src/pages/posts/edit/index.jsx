import {useParams} from "react-router-dom";
import {PostForm} from "../components/PostForm";
import {editPost, getPostById} from "../../../redux/slices/postsSlice";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

export const EditPostPage = () => {
    const { id } = useParams()
    const dispatch = useDispatch()

    const { list } = useSelector((state) => state.posts.posts)

    const onSubmitForm = (formValues) => {
        dispatch(editPost(formValues))
    }

    if (!list) {
        return <>Пост не найден</>
    }

    const intID = Number(id)
    const foundPost = list.find((item) => item.id === intID)

    return(
        <PostForm title={'Редактирование поста'} onSubmitForm={onSubmitForm} defaultValues={foundPost}></PostForm>
    )
}