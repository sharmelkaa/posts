import * as SC from './style'
import {Link} from "../../../ui/Link";

export const Post = ({ post }) => {
    const image = post.image || 'https://greetcard.ru/uploads/posts/2022-07/1657870668_kartinka-privet-7.jpg'

    return(
        <SC.Post>
            <SC.Image src={image} alt={post.title}></SC.Image>
            <SC.Title>{post.title}</SC.Title>
            <Link to={`/posts/${post.id}`}>Читать далее...</Link>
        </SC.Post>
    )
}

