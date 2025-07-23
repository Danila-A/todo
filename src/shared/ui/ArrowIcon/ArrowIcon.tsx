import type { FC } from "react";
import styles from './ArrowIcon.module.scss';

export const ArrowIcon: FC = () => {
    return (
        <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M4 4L1 1"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                className={ styles.path }
            />
            <path
                d="M7 1L4 4"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                className={ styles.path }
            />
        </svg>
    );
}
