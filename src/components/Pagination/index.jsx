import * as SC from './styles'
import {useEffect, useState} from "react";
import {NoPages} from "./styles";
import {useSelector} from "react-redux";

export const Pagination = ({ onChangePage }) => {
    const [pagination, setPagination] = useState([])
    const totalPages = useSelector((state) => state.posts.totalPages)
    const currentPage = useSelector((state) => state.posts.currentPage)

    useEffect(() => {
        const tempPagination = []

        for (let i = 0; i < totalPages; i++) {
            tempPagination.push(Number(i + 1))
        }

        setPagination(tempPagination)
    }, [totalPages])

    if (pagination.length === 0) {
        return <NoPages>Ничего нет...</NoPages>
    }

    return(
        <SC.PaginationWrapper>
            {pagination.map((pageNumber, index) => (
                <SC.Page
                    key={index}
                    selected={currentPage === pageNumber}
                    onClick={(e) => onChangePage(Number(e.target.innerHTML))}
                >
                    {pageNumber}
                </SC.Page>
            ))}
        </SC.PaginationWrapper>
    )
}