import type { FC } from 'react';
import styles from './EditTodoForm.module.scss';
import { useForm, type SubmitHandler } from 'react-hook-form';
import type { EditFormValue } from '../types';
import { useAppDispatch, useAppSelector } from '../../../shared/lib';
import { RejectEditButton, ResolveEditButton } from '../../../shared/ui';
import { changeTodo } from '../../../entities/Todo';
import { selectTheme } from '../../../entities/Theme';

interface Props {
    id: number;
    todoText: string;
    setIsEditMode: React.Dispatch<React.SetStateAction<boolean>>;
}

export const EditTodoForm: FC<Props> = ({ id, todoText, setIsEditMode }) => {
    const { register, handleSubmit, setFocus } = useForm<EditFormValue>();
    const dispatch = useAppDispatch();
    const themeType = useAppSelector(selectTheme);
    const inputClasses = themeType === 'dark' ? 
        `${styles.form__input} ${styles.form__input_dark}` : 
        `${styles.form__input} ${styles.form__input_light}`;

    setFocus('edit', { shouldSelect: true });

    const handleEditFormSubmit: SubmitHandler<EditFormValue> = (data) => {
        if (!data.edit.trim()) return;
        setIsEditMode(false);
        dispatch(changeTodo({ id, text: data.edit }));
    }

    return (
        <form
            className={styles.form}
            onSubmit={handleSubmit(handleEditFormSubmit)}
        >
            <input 
                className={inputClasses}
                {...register('edit', { value: todoText })}
            />
            <div className={styles.form__buttons_groups}>
                <ResolveEditButton />
                <RejectEditButton setIsEditMode={setIsEditMode} />
            </div>
        </form>
    );
}
