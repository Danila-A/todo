import type { FC } from "react";
import styles from './Input.module.scss';
import type { ThemeType } from "../../../entities/Themes";

interface Props {
    inputType: 'search' | 'add';
    placeholder: string;
    themeType: ThemeType;
}

export const Input: FC<Props> = ({ inputType, placeholder, themeType }) => {

    const inputTypeClass: string = inputType == 'search' ? styles.input_search : styles.input_add;
    const themeTypeClass: string = themeType == 'light' ? styles.input_light : styles.input_dark;

    return (
        <div>
            <input 
            type="text"  
            placeholder={placeholder} 
            className={ `${inputTypeClass} ${themeTypeClass}` } />
        </div>
    );
}
