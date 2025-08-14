import styles from './Input.module.scss';
import type { ThemeType } from "../../../entities/Themes";
import type {  Path, FieldValues, UseFormRegister } from "react-hook-form";
import { selectMemoizedTheme, useAppSelector } from '../../../app';

interface Props<T extends FieldValues> {
    inputType: 'search' | 'add';
    placeholder: string;
    label: Path<T>;
    register: UseFormRegister<T>;
}

export const Input = <T extends FieldValues, >({ inputType, placeholder, label, register }: Props<T>) => {

    const themeType = useAppSelector(selectMemoizedTheme);
    const inputTypeClass: string = inputType == 'search' ? styles.input_search : styles.input_add;
    const themeTypeClass: string = themeType == 'light' ? styles.input_light : styles.input_dark;

    return (
        <div>
            <input 
                type="text"  
                placeholder={placeholder} 
                className={ `${inputTypeClass} ${themeTypeClass}` } 
                { ...register(label) }
            />
        </div>
    );
}
