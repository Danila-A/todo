import type { FC } from "react";
import { PencilIcon } from "../PencilIcon/PencilIcon";
import styles from './EditButton.module.scss';

interface Props {
    handleClick: () => void;
}

export const EditButton: FC<Props> = ({ handleClick }) => {
    return (
        <div 
            className={styles.button} 
            onClick={handleClick}
        >
            <PencilIcon />
        </div>
    );
}
