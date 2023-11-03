const search = (searchQuery, listToSearch) => {
    return listToSearch.filter((item) => item.title.toLowerCase().includes(searchQuery.toLowerCase()))
}
const sorterComparison = (fieldName) => {
    return (a, b) => a[fieldName] <= b[fieldName] ? -1 : 1
}
const sorter = (sorterName, listToSearch) => {

    switch (sorterName) {
        case 'by_user':
            listToSearch.sort(sorterComparison('userId'))
            break
        case 'by_title':
            listToSearch.sort(sorterComparison('title'))
            break
        case 'default':
            listToSearch.sort(sorterComparison('id'))
            break
        default:
            console.log('Something went wrong!')
            break
    }
}
const pagination = (pageNum, listToPaginate, itemPerPage) => {
    const firstIndex = (pageNum - 1) * itemPerPage
    const lastIndex = firstIndex + itemPerPage
    return listToPaginate.slice(firstIndex, lastIndex)
}

const POSTS_PER_PAGE = 10

export const modifyPosts = (searchQuery, sorterName, listToModify, pageNumber) => {
    let modifiedList = [...listToModify]

    if (searchQuery !== null) {
        modifiedList = search(searchQuery, modifiedList)
    }

    if (sorterName !== null) {
        sorter(sorterName, modifiedList)
    }

    const totalPages = Math.ceil(modifiedList.length / POSTS_PER_PAGE)
    const paginatedList = pagination(pageNumber, modifiedList, POSTS_PER_PAGE)

    return [totalPages, paginatedList]
}
