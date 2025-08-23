import type { FC } from 'react';
import styles from './AddTodoForm.module.scss';
import { AddForm } from '../../../features/addTodo';
import { Modal, ModalCloseButton, Title } from '../../../shared/ui';
import { contentData } from '../../../shared/staticContent';
import { useAppSelector } from '../../../shared/lib';
import { selectMemoizedTheme } from '../../../entities/Theme';

export const AddTodoForm: FC = () => {
    const themeType = useAppSelector(selectMemoizedTheme);

    return (
        <Modal themeType={themeType}>
            <div className={styles.inner}>

                <div className={styles.title}>
                    <Title 
                        text={contentData.modalTitle}
                        themeType={themeType}
                    />
                </div>
                <div className={styles.form}>
                    <AddForm />
                </div>
                <div className={styles.closeButton}>
                    <ModalCloseButton />
                </div>

            </div>
        </Modal>
    );
}
