import type { FC } from 'react';
import styles from './AddTodoForm.module.scss';
import { Modal } from '../../../entities/Modal';
import { Title } from '../../../shared';
import { contentData, type AddTodoFormValue } from '../../../app';
import { AddForm } from '../../../features/addTodo';

export const AddTodoForm: FC = () => {
    
    return (
        <Modal>
            <div className={styles.inner}>

                <div className={styles.title}>
                    <Title text={contentData.modalTitle} />
                </div>
                <div className={styles.form}>
                    <AddForm />
                </div>

            </div>
        </Modal>
    );
}
