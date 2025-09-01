import type { FC } from 'react';
import { ModalButton } from '../ModalButton/ModalButton';

export const TodoAddButton: FC = () => {
    return (
        <div>
            <ModalButton
                buttonType={'apply'}
                text={'apply'}
            />
        </div>
    );
}
