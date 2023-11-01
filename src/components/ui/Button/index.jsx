import * as SC from './styles'

export const Button = ({ children, dangerous=false, ...rest }) =>
    <SC.Button dangerous={dangerous} {...rest} >
        {children}
    </SC.Button>