import type { FC } from 'react';
import styles from './Checkbox.module.scss';

interface Props {
    clickHandler: (id: number) => void;
    checked: boolean;
    id: number;
}

export const Checkbox: FC<Props> = ({ clickHandler, checked, id}) => {
    const CheckboxCheckedClass = checked ? styles.checkbox_checked : null;
    const CheckMarkCheckedClass = checked ? styles.check_mark_checked : null;

    return (
        <div
            onClick={() => clickHandler(id)}
            className={`${styles.checkbox} ${CheckboxCheckedClass}`}
        >
            <img 
                src="../../assets/Check_mark.png" 
                alt="Check"
                className={`${styles.check_mark} ${CheckMarkCheckedClass}`}
            />
        </div>
    );
}
