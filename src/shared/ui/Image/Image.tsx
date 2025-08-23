import type { FC } from "react";
import styles from './Image.module.scss';

interface Props {
    imagePath: string;
}

export const Image: FC<Props> = ({ imagePath }) => {
    return (
        <img 
            src={imagePath} 
            alt="empty image"
            className={ styles.img } 
        />
    );
}
