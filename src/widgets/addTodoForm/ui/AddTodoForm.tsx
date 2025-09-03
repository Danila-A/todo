import type { FC } from 'react';
import styles from './AddTodoForm.module.scss';
import { AddForm } from '../../../features/addTodo';
import { Modal, ModalCloseButton, Title } from '../../../shared/ui';
import { contentData } from '../../../shared/staticContent';
import { useAppSelector } from '../../../shared/lib';
import { selectTheme } from '../../../entities/Theme';

export const AddTodoForm: FC = () => {
    const themeType = useAppSelector(selectTheme);

    return (
        <Modal themeType={themeType}>
            <div className={styles.modal__inner}>

                <div className={styles.modal__title}>
                    <Title 
                        text={contentData.modalTitle}
                        themeType={themeType}
                    />
                </div>
                <div className={styles.modal__form}>
                    <AddForm />
                </div>
                <div className={styles.modal__close_button}>
                    <ModalCloseButton />
                </div>

            </div>
        </Modal>
    );
}
