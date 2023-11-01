import {Container} from "../../../../components/ui/Container";
import * as SC from './styles'
import {Typo} from "../../../../components/ui/Typo";
import {useState} from "react";
import {Form} from '../../../../components/ui/Form'
import {Field} from '../../../../components/ui/Field'
import {Input} from '../../../../components/ui/Input'
import {Button} from "../../../../components/ui/Button";

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
            <Form onSubmit={onSubmit}>
                <Field>
                    <Input
                        type='text'
                        name='title'
                        placeholder='Заголовок поста'
                        onChange={(e) => onChange(e.target.name, e.target.value)}
                        value ={formValues.title}
                    />
                </Field>
                <Field>
                    <SC.Textarea
                        name='body'
                        placeholder='Текст поста'
                        rows={10} cols={30}
                        onChange={(e) => onChange(e.target.name, e.target.value)}
                        value={formValues.body}
                    />
                </Field>
                <Button type='submit' disabled={disabled}>Сохранить</Button>
            </Form>
        </Container>
    )
}