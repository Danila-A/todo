import type { FC } from 'react';
import styles from './Checkbox.module.scss';
import imagePath from '../../assets/Check_mark.png';

interface Props {
    clickHandler: (id: number) => void;
    checked: boolean;
    id: number;
}

export const Checkbox: FC<Props> = ({ clickHandler, checked, id}) => {
    const CheckboxCheckedClass = checked ? styles.checkbox_checked : null;

    return (
        <div
            onClick={() => clickHandler(id)}
            className={`${styles.checkbox} ${CheckboxCheckedClass}`}
        >
            {checked && 
                <img 
                    src={imagePath} 
                    alt="Check"
                    className={styles.check_mark}
                />
            }
            
        </div>
    );
}
