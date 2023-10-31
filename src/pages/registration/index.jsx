import {Container} from "../../components/ui/Container";
import {Typo} from "../../components/ui/Typo";
import {Field} from "../../components/ui/Field";
import {Input} from "../../components/ui/Input";
import {Form} from "../../components/ui/Form";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

const DEFAULT_VALUES = {name: '', surname:'', email:'', password:''}
export const RegistrationPage = () => {
    const [formValues, setFormValues] = useState(DEFAULT_VALUES)
    const userID = new Date().getTime()
    const newUser = {id: userID, ...formValues}

    const navigate = useNavigate()

    const onSubmit = (e) => {
        e.preventDefault()

        try {
            const users = JSON.parse(localStorage.getItem('users'))

            if (!users) {
                localStorage.setItem('users', JSON.stringify([newUser]))
                navigate('/auth')
                alert('Вы успешно зарегистрировались!')
                return
            }

            if (users.find((user) => user.email === formValues.email)) {
                alert('Пользователь с таким email уже существует!')
                return
            }

            users.push(newUser)
            localStorage.setItem('users', JSON.stringify(users))

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
                        placeholder='Вааша фамилия'
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
                <button type='submit' disabled={disabled}>Регистрация</button>
            </Form>
        </Container>
    )
}