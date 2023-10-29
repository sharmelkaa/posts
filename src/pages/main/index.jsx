import {Posts} from "../../components/Posts";
import {Container} from "../../components/Container";
import {Typo} from "../../components/Typo";

const INITIAL_POSTS = [
    {
        id: 1,
        title: 'Post 1',
        image: 'https://greetcard.ru/uploads/posts/2022-07/1657870668_kartinka-privet-7.jpg'
    },
    {
        id: 2,
        title: 'Post 2',
        image: 'https://greetcard.ru/uploads/posts/2022-07/1657870668_kartinka-privet-7.jpg'
    },
    {
        id: 3,
        title: 'Post 3',
        image: 'https://greetcard.ru/uploads/posts/2022-07/1657870668_kartinka-privet-7.jpg'
    }
]

export const MainPage = () =>
    <>
        <Typo>Свежие публикации</Typo>
        <Container>
            <Posts posts={INITIAL_POSTS}/>
        </Container>
    </>