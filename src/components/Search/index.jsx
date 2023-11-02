import {Input} from "../ui/Input";
import {checkSym} from "./helpers/checkSym";
import {debounce} from "./helpers/debounce";
import * as SC from './styles'

export const Search = ({ onSearch }) =>
    <SC.SearchWrapper>
        <Input
            placeholder='Поиск по названию'
            onKeyDown={checkSym}
            onChange={debounce(onSearch)}
        />
    </SC.SearchWrapper>