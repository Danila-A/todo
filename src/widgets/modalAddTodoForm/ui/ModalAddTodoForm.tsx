import type { FC } from 'react';
import styles from './ModalAddTodoForm.module.scss';
import { Modal } from '../../../entities/Modal';
import { Input, Title } from '../../../shared';
import { contentData, selectMemoizedTheme, useAppSelector, type AddTodoFormValue } from '../../../app';
import { useForm } from 'react-hook-form';
import { ModalCloseButton } from '../../../features/modalCloseButton';
import { TodoAddButton } from '../../../features/todoAddButton';
import { handleAddTodoFormSubmit } from '../handler/handleAddTodoFormSubmit';

export const ModalAddTodoForm: FC = () => {
    const themeType = useAppSelector(selectMemoizedTheme);
    const { register, handleSubmit } = useForm<AddTodoFormValue>();
    return (
        <Modal>
            <div className={styles.inner}>

                <div className={styles.title}>
                    <Title text={contentData.modalTitle} />
                </div>
                <div className={styles.formWrapper}>
                    <form 
                        onSubmit={handleSubmit(handleAddTodoFormSubmit)}
                        className={styles.form}
                    >
                        <div className={styles.input}>
                            <Input<AddTodoFormValue> 
                                inputType={'add'}
                                placeholder={'input your note...'}
                                themeType={themeType}
                                label={'add'}
                                register={ register }
                            />
                        </div>
                        <div className={styles.buttonsWrapper}>
                            <ModalCloseButton />
                            <TodoAddButton />
                        </div>
                    </form>
                </div>

            </div>
        </Modal>
    );
}
