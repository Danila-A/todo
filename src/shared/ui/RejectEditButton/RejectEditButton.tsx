import type { FC } from 'react';
import styles from './RejectEditButton.module.scss';
import { CrossIcon } from '../CrossIcon/CrossIcon';

interface Props {
    setIsEditMode: React.Dispatch<React.SetStateAction<boolean>>;
}

export const RejectEditButton: FC<Props> = ({ setIsEditMode }) => {
    return (
        <div
            className={styles.button}
            onClick={() => setIsEditMode(false)}
        >
            <div className={styles.button__inner}>
                <CrossIcon />
            </div>
        </div>
    );
}
