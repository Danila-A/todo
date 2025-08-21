import type { FC } from 'react';
import styles from './AddForm.module.scss';
import { Input, ModalCloseButton } from '../../../shared/ui';
import { addTodo, type AddTodoFormValue } from '../../../entities/Todo';
import { TodoAddButton } from '../../../shared/ui';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { useAppDispatch } from '../../../shared/lib';

export const AddForm: FC = () => {
    const { register, handleSubmit } = useForm<AddTodoFormValue>();
    const dispatch = useAppDispatch();
    
    const handleAddTodoFormSubmit: SubmitHandler<AddTodoFormValue> = (data) => {
        if (!data.add.trim()) return;
        dispatch(addTodo({ text: data.add }));
    }

    return (
        <form 
            onSubmit={handleSubmit(handleAddTodoFormSubmit)}
            className={styles.form}
        >
            <div className={styles.input}>
                <Input<AddTodoFormValue> 
                    inputType={'add'}
                    placeholder={'input your note...'}
                    label={'add'}
                    register={ register }
                />
            </div>
            <div className={styles.buttonsContainer}>
                <ModalCloseButton />
                <TodoAddButton />
            </div>
        </form>
    );
}
