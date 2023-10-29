import * as SC from './style'

export const Post = ({ post }) =>
    <SC.Post>
        <SC.Image src={post.image} alt={post.title}></SC.Image>
        <SC.Title>{post.title}</SC.Title>
        <SC.DetailLink to={`/posts/${post.id}`}>Читать далее...</SC.DetailLink>
    </SC.Post>
