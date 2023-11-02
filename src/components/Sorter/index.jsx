import * as SC from './styles'

export const Sorter = ({ onSort }) =>
    <SC.SorterWrapper>
        <SC.Select
            onChange={onSort}
            defaultValue='default'
        >
            <option value='default'>Отсортировать по</option>
            <option value='by_user'>Пользователям</option>
            <option value='by_title'>Названию</option>
        </SC.Select>
    </SC.SorterWrapper>