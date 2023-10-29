import * as SC from './style'
import {Link} from "../../../Link";

export const Post = ({ post }) =>
    <SC.Post>
        <SC.Image src={post.image} alt={post.title}></SC.Image>
        <SC.Title>{post.title}</SC.Title>
        <Link to={`/posts/${post.id}`}>Читать далее...</Link>
    </SC.Post>
