import * as SC from './styles'

export const Modal = ({ children, text, type, direction }) =>
    <SC.ModalWrapper>
        <SC.Modal direction={direction}>
            <SC.ModalText type={type}>{text}</SC.ModalText>
            {children}
        </SC.Modal>
    </SC.ModalWrapper>