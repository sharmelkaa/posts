import {Container} from "../../../../components/Container";
import * as SC from './styles'
import {Typo} from "../../../../components/Typo";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {addPost} from "../../../../redux/slices/postsSlice";

const DEFAULT_VALUES = {title: '', body: ''}
export const PostForm = ({ title, onSubmitForm, defaultValues }) => {
    const [formValues, setFormValues] = useState(defaultValues || DEFAULT_VALUES)

    const onSubmit = (e) => {
        e.preventDefault()
        onSubmitForm(formValues)

        !defaultValues && setFormValues(DEFAULT_VALUES)
    }

    const onChange = (name, value) => {
        setFormValues({...formValues, [name]: value})
    }

    const disabled = !formValues.title || !formValues.body

    return(
        <Container>
            <Typo>{title}</Typo>
            <SC.Form onSubmit={onSubmit}>
                <SC.Field>
                    <SC.Input
                        type='text'
                        name='title'
                        placeholder='Заголовок поста'
                        onChange={(e) => onChange(e.target.name, e.target.value)}
                        value ={formValues.title}
                    />
                </SC.Field>
                <SC.Field>
                    <SC.Textarea
                        name='body'
                        placeholder='Текст поста'
                        rows={10} cols={30}
                        onChange={(e) => onChange(e.target.name, e.target.value)}
                        value={formValues.body}
                    />
                </SC.Field>
                <SC.Button type='submit' disabled={disabled}>Сохранить</SC.Button>
            </SC.Form>
        </Container>
    )
}