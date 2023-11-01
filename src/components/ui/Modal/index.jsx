import * as SC from './styles'

export const Modal = ({ children, text, type, direction, onClose}) => {

    return(
        <SC.ModalWrapper>
            <SC.Modal direction={direction}>
                <SC.ModalText type={type}>{text}</SC.ModalText>
                {children}
                <SC.CloseModal onClick={onClose}>x</SC.CloseModal>
            </SC.Modal>
       </SC.ModalWrapper>)
}



