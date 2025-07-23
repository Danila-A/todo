import type { FC } from "react";
import styles from './Image.module.scss';

export const Image: FC = () => {
    return (
        <img 
            src="../../assets/Detective-check-footprint 1.png" 
            alt="empty image" 
            className={ styles.img } 
        />
    );
}
