import {useParams} from "react-router-dom";
import {INITIAL_POSTS} from "../index";
import {useMemo} from "react";
import {Typo} from "../../../components/Typo";
import {Container} from "../../../components/Container";
import * as SC from './styles'
import {Link} from "../../../components/Link";

export const DetailPostPage = () => {
    const { id } = useParams()

    const currentPost = useMemo(() => INITIAL_POSTS.find((item) => item.id === Number(id)))

    if (!currentPost) {
        return <>Пост не найден</>
    }

    return(
        <Container>
            <Typo>{currentPost.title}</Typo>
            <SC.Image src={currentPost.image} alt={currentPost.title} />
            <SC.Text>{currentPost.body}</SC.Text>
            <SC.LinkWrapper>
                <Link to={'/posts'}>Обратно к публикациям</Link>
            </SC.LinkWrapper>
        </Container>
    )
}