import type { FC } from 'react';
import styles from './AddForm.module.scss';
import { Input, ModalCloseButton } from '../../../shared/ui';
import { addTodo, saveTodosToLocalStorage, type AddTodoFormValue } from '../../../entities/Todo';
import { TodoAddButton } from '../../../shared/ui';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { closeModal, useAppDispatch, useAppSelector } from '../../../shared/lib';
import { selectTheme } from '../../../entities/Theme';

export const AddForm: FC = () => {
    const { register, handleSubmit, setValue } = useForm<AddTodoFormValue>();
    const dispatch = useAppDispatch();
    const themeType = useAppSelector(selectTheme);
    
    const handleAddTodoFormSubmit: SubmitHandler<AddTodoFormValue> = (data) => {
        if (!data.add.trim()) return;
        closeModal(dispatch);
        dispatch(addTodo({ text: data.add }));
        dispatch(saveTodosToLocalStorage());
        setValue('add', '');
    }

    return (
        <form 
            onSubmit={handleSubmit(handleAddTodoFormSubmit)}
            className={styles.form}
        >
            <div className={styles.form__input}>
                <Input<AddTodoFormValue> 
                    inputType={'add'}
                    placeholder={'input your note...'}
                    label={'add'}
                    register={ register }
                    themeType={themeType}
                />
            </div>
            <div className={styles.form__buttons_container}>
                <ModalCloseButton />
                <TodoAddButton />
            </div>
        </form>
    );
}
