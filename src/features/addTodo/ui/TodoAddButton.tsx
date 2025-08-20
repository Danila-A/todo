import type { FC } from 'react';
import { ModalButton } from '../../../shared/ui';

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
