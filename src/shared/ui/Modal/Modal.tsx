import type { FC, ReactNode } from 'react';
import styles from './Modal.module.scss';
import { useModalOutsideClick } from '../../lib/handlers/useModalOutsideClick';
import { animated } from '@react-spring/web';
import { useAnimatedModal } from '../../lib';

interface Props {
    children: ReactNode;
    themeType: ThemeType;
}

export const Modal: FC<Props> = ({ children, themeType }) => {
    const springs = useAnimatedModal();
    useModalOutsideClick();
    
    const themeClass = themeType == 'dark' ? styles.modal_dark : styles.modal_light;

    return (
        <animated.dialog
            id='modal'
            className={`${styles.modal} ${themeClass}`}
            style={springs}
        >
            <div className={styles.modal__inner}>
                { children }
            </div>
        </animated.dialog>
    );
}
