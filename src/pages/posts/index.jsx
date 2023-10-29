import {Posts} from "../../components/Posts";
import {Container} from "../../components/Container";
import {Typo} from "../../components/Typo";

export const INITIAL_POSTS = [
    {
        id: 1,
        title: 'Post 1',
        image: 'https://greetcard.ru/uploads/posts/2022-07/1657870668_kartinka-privet-7.jpg',
        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A illo numquam ut. Asperiores dicta ducimus itaque iure ullam voluptate? Adipisci harum ipsam laboriosam officia quasi quia rerum unde! Facilis, nostrum.'
    },
    {
        id: 2,
        title: 'Post 2',
        image: 'https://greetcard.ru/uploads/posts/2022-07/1657870668_kartinka-privet-7.jpg',
        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A illo numquam ut. Asperiores dicta ducimus itaque iure ullam voluptate? Adipisci harum ipsam laboriosam officia quasi quia rerum unde! Facilis, nostrum.'
    },
    {
        id: 3,
        title: 'Post 3',
        image: 'https://greetcard.ru/uploads/posts/2022-07/1657870668_kartinka-privet-7.jpg',
        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A illo numquam ut. Asperiores dicta ducimus itaque iure ullam voluptate? Adipisci harum ipsam laboriosam officia quasi quia rerum unde! Facilis, nostrum.'
    },
    {
        id: 4,
        title: 'Post 4',
        image: 'https://greetcard.ru/uploads/posts/2022-07/1657870668_kartinka-privet-7.jpg',
        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A illo numquam ut. Asperiores dicta ducimus itaque iure ullam voluptate? Adipisci harum ipsam laboriosam officia quasi quia rerum unde! Facilis, nostrum.'
    },
    {
        id: 5,
        title: 'Post 5',
        image: 'https://greetcard.ru/uploads/posts/2022-07/1657870668_kartinka-privet-7.jpg',
        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A illo numquam ut. Asperiores dicta ducimus itaque iure ullam voluptate? Adipisci harum ipsam laboriosam officia quasi quia rerum unde! Facilis, nostrum.'
    }
]

export const PostsPage = () =>
    <Container>
        <Typo>Публикации</Typo>
        <Posts posts={INITIAL_POSTS}/>
    </Container>