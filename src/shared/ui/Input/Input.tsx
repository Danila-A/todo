import styles from './Input.module.scss';
import type {  Path, FieldValues, UseFormRegister } from "react-hook-form";

interface Props<T extends FieldValues> {
    inputType: 'search' | 'add';
    placeholder: string;
    label: Path<T>;
    register: UseFormRegister<T>;
    onChange?: () => void
    themeType: ThemeType;
}

export const Input = <T extends FieldValues, >({ 
    inputType, 
    placeholder, 
    label, 
    register, 
    onChange,
    themeType,
}: Props<T>) => {

    const inputTypeClass: string = inputType == 'search' ? styles.input_search : styles.input_add;
    const themeTypeClass: string = themeType == 'light' ? styles.input_light : styles.input_dark;

    return (
        <input
            type="text"
            placeholder={placeholder} 
            className={ `${styles.input} ${inputTypeClass} ${themeTypeClass}` } 
            { ...register(label, { onChange: onChange }) }
        />
    );
}
