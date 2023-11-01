import {Outlet, useNavigate} from "react-router-dom";
import * as SC from './styles'
import {Container} from "../ui/Container";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../redux/slices/authSlice";

// TODO
// custom hooks (for forms)
// баттон в ЮАЙ
// СДЕЛАТЬ КРТУИЛКУ ЛОАДЕР
// СДЕЛАТЬ ЛИМИТ ПОСТОВ НА 10 ВМЕСТО 3 И ПОСТРАНИЧНУЮ ПАГИНАЦИЮ ЕБАНУТЬ
// ФИЛЬТРАЦИЯ ПО НАЗВАНИЮ ПОСТОВ
// СОРТИРОВКА ПОСТОВ КАКАЯ-НИБУДЬ

// DONE
// УРАТЬ ПЕРЕЗАПРОС ПОСТОВ НА ГЛАВНОЙ СТРАНИЦЕ
// вынести модалку в UI и использовать вместо алертов

export const Root = () => {
    const { user } = useSelector((state) => state.auth)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const onClickExtBtn = () => {
        dispatch(logout())
        navigate('/auth')
    }

    return(
    <>
        <Container>
            <SC.Menu>
                <SC.MenuItem to={'/'}>Главная страница</SC.MenuItem>
                <SC.MenuItem to={'/posts'}>Список постов</SC.MenuItem>
                {!user && <SC.MenuItem to={'/auth'}>Авторизация</SC.MenuItem>}
                {!user && <SC.MenuItem to={'/registration'}>Регистрация</SC.MenuItem>}
                {user && <SC.MenuItem to={'/posts/add'}>Добавление поста</SC.MenuItem>}
                {user && <button onClick={onClickExtBtn}>Выйти</button>}
            </SC.Menu>
        </Container>
        <Outlet/>
    </>
    )
}