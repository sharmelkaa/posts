import {Container} from "../../components/ui/Container";
import {Typo} from "../../components/ui/Typo";
import {Field} from "../../components/ui/Field";
import {Input} from "../../components/ui/Input";
import {Form} from "../../components/ui/Form";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {Modal} from "../../components/ui/Modal";
import {Button} from "../../components/ui/Button";

const DEFAULT_VALUES = {name: '', surname:'', email:'', password:''}
const SUCCESS_REG = 'Вы успешно зарегистрировались!'
const WARNING_REG = 'Пользователь с таким email уже существует!'
const modal_info = {
    message: '',
    type: ''
}
export const RegistrationPage = () => {
    const [formValues, setFormValues] = useState(DEFAULT_VALUES)
    const userID = new Date().getTime()
    const newUser = {id: userID, ...formValues}

    const [showModal, setShowModal] = useState(false)

    const navigate = useNavigate()

    const onClose = () => console.log('hello')

    const onSubmit = (e) => {
        e.preventDefault()

        try {
            const users = JSON.parse(localStorage.getItem('users'))

            if (!users) {
                localStorage.setItem('users', JSON.stringify([newUser]))
                modal_info.message = SUCCESS_REG
                modal_info.type = 'success'
                setShowModal(true)
                setTimeout(() => navigate('/auth'), 2500)
                return
            }

            if (users.find((user) => user.email === formValues.email)) {
                modal_info.message = WARNING_REG
                modal_info.type = 'warning'
                setShowModal(true)
                return
            }

            users.push(newUser)
            localStorage.setItem('users', JSON.stringify(users))
            modal_info.message = SUCCESS_REG
            modal_info.type = 'success'
            setShowModal(true)
            setTimeout(() => navigate('/auth'), 2500)

        } catch (e) {
            console.log(e)
        }
    }

    const onChange = (name, value) => {
        setFormValues({...formValues, [name]: value})
    }

    const disabled = !formValues.email || !formValues.password

    return(
        <Container>
            {showModal &&
                <Modal
                    text={modal_info.message}
                    type={modal_info.type}
                    direction='row'
                    onClose={() => setShowModal(false)}
                >
                </Modal>
            }
            <Typo>Страница регистрации</Typo>
            <Form onSubmit={onSubmit}>
                <Field>
                    <Input
                        type='text'
                        name='name'
                        placeholder='Ваше имя'
                        onChange={(e) => onChange(e.target.name, e.target.value)}
                        value ={formValues.name}
                    />
                </Field>
                <Field>
                    <Input
                        type='text'
                        name='surname'
                        placeholder='Ваша фамилия'
                        onChange={(e) => onChange(e.target.name, e.target.value)}
                        value ={formValues.surname}
                    />
                </Field>
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
                <Button type='submit' disabled={disabled}>Регистрация</Button>
            </Form>
        </Container>
    )
}