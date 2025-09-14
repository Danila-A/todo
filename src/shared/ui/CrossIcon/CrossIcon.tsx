import type { FC } from "react";
import styles from './CrossIcon.module.scss';

export const CrossIcon: FC = () => {
    return (
        <svg 
            width="800px" 
            height="800px" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                className={styles.path}
                d="M20 20L4 4.00003M20 4L4.00002 20" 
                stroke="#currentColor" 
                stroke-width="2" 
                stroke-linecap="round"
            />
        </svg>
    );
}
