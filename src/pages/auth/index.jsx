import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {Container} from "../../components/ui/Container";
import {Typo} from "../../components/ui/Typo";
import {Field} from "../../components/ui/Field";
import {Input} from "../../components/ui/Input";
import {Form} from "../../components/ui/Form";
import {useDispatch} from "react-redux";
import {login} from "../../redux/slices/authSlice";
import {Modal} from "../../components/ui/Modal";
import * as SC from './styles'


const DEFAULT_VALUES = {name: '', surname:'', email:'', password:''}
export const AuthPage = () => {
    const [formValues, setFormValues] = useState(DEFAULT_VALUES)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [showModal, setShowModal] = useState(false)

    const onChange = (name, value) => {
        setFormValues({...formValues, [name]: value})
    }

    const onSubmit = (e) => {
        e.preventDefault()

        try {
            const users = JSON.parse(localStorage.getItem('users'))

            if (!users) {
                setShowModal(true)
                return
            }

            const currentUser = users.find((user) => user.email === formValues.email && user.password === formValues.password)

            if (!currentUser) {
                setShowModal(true)
                return
            }

            dispatch(login(currentUser))
            navigate('/posts')

        } catch (e) {
            console.log(e)
        }
    }

    const disabled = !formValues.email || !formValues.password
    return(
        <Container>
            {showModal &&
                <Modal
                    text={'Данный пользователь не найден в системе!'}
                    type='warning'
                    direction='row'
                >
                    <div></div>
                    <SC.CloseModal onClick={() => setShowModal(false)}>x</SC.CloseModal>
                </Modal>
            }
            <Typo>Это страница авторизации!</Typo>
            <Form onSubmit={onSubmit}>
                <Field>
                    <Input
                        type='email'
                        name='email'
                        placeholder='Email'
                        onChange={(e) => onChange(e.target.name, e.target.value)}
                        value ={formValues.email}
                    />
                </Field>
                <Field>
                    <Input
                        type='password'
                        name='password'
                        placeholder='Пароль'
                        onChange={(e) => onChange(e.target.name, e.target.value)}
                        value ={formValues.password}
                    />
                </Field>
                <button type='submit' disabled={disabled}>Авторизация</button>
            </Form>
        </Container>
    )
}