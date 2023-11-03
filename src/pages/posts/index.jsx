import {Posts} from "../../components/Posts";
import {Container} from "../../components/ui/Container";
import {Typo} from "../../components/ui/Typo";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {changePage, getPosts, setCurrentPagePosts} from "../../redux/slices/postsSlice";
import {Loader} from "../../components/ui/Loader";
import {Search} from "../../components/Search";
import {Sorter} from "../../components/Sorter";
import * as SC from './styles'
import {Pagination} from "../../components/Pagination";

export const PostsPage = () => {
    const { list, loading } = useSelector((state) => state.posts.posts)
    const currentPagePosts = useSelector((state) => state.posts.currentPagePosts.list)
    const dispatch = useDispatch()

    const [search, setSearch] = useState(null)
    const [sort, setSort] = useState(null)
    const currentPage = useSelector((state) => state.posts.currentPage)

    const action_payload = {
        searchQuery: search,
        sorterName: sort,
        listToModify: list,
        pageNumber: currentPage
    }
    const onSearch = (e) => {
        setSearch(e.target.value)
        dispatch(setCurrentPagePosts(action_payload))
        dispatch(changePage(1))
    }

    const onSort = (e) => {
        setSort(e.target.value)
        dispatch(setCurrentPagePosts(action_payload))
        dispatch(changePage(1))
    }

    const onChangePage  = (newPage) => {
        if (newPage === currentPage) {
            return
        }
        dispatch(changePage(newPage))
        dispatch(setCurrentPagePosts(action_payload))
    }

    useEffect(() => {
        if (!list) {
            dispatch(getPosts())
        }
        if (list) {
            dispatch(setCurrentPagePosts(
                {
                    searchQuery: search,
                    sorterName: sort,
                    listToModify: list,
                    pageNumber: currentPage
                }))
        }
    }, [list, dispatch, currentPage, search, sort])

    if (!list && loading) {
        return <Loader />
    }

    if (!list) {
        return <Container>404</Container>
    }

    return(
        <Container>
            <Typo>Публикации</Typo>
            <SC.SearchSorterWrapper>
                <Sorter onSort={onSort}/>
                <Search onSearch={onSearch}/>
            </SC.SearchSorterWrapper>
            {currentPagePosts && <Posts posts={currentPagePosts}/>}
            <Pagination onChangePage={onChangePage}/>
        </Container>
    )
}