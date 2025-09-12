import type { FC } from 'react';
import styles from './AddTodoForm.module.scss';
import { AddForm } from '../../../features/addTodo';
import { Modal, Title } from '../../../shared/ui';
import { contentData } from '../../../shared/staticContent';
import { useAppSelector } from '../../../shared/lib';
import { selectTheme } from '../../../entities/Theme';

export const AddTodoForm: FC = () => {
    const themeType = useAppSelector(selectTheme);

    return (
        <Modal themeType={themeType}>
            <div className={styles.modal__inner}>

                <Title
                    text={contentData.modalTitle}
                    themeType={themeType}
                />
                <AddForm />

            </div>
        </Modal>
    );
}
