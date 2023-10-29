import {Post} from "./components/Post";
import * as SC from './styles'

export const Posts = ({ posts }) =>
    <>
        <SC.Title>Свежие публикации</SC.Title>
        <SC.Posts>
            {posts.map((post) => <Post key={post.id} post={post} />)}
        </SC.Posts>
    </>