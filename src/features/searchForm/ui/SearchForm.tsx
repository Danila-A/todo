import type { FC } from 'react';
import styles from './SearchForm.module.scss';
import { Input, LensIcon } from '../../../shared';
import { useAppSelector } from '../../../app';
import { selectMemoizedTheme } from '../../../entities/Themes';
import { useForm } from 'react-hook-form';
import type { SearchFormValue } from '../../../app/types';

export const SearchForm: FC = () => {
    const themeType = useAppSelector(selectMemoizedTheme);
    const { register } = useForm<SearchFormValue>();
    return (
        <div>
            <form>
                <div className="">
                    <Input<SearchFormValue>
                        inputType={ "search" }
                        placeholder={ 'Search note...' }
                        themeType={ themeType }
                        label={ 'search' }
                        register={ register }
                    />
                    <div>
                        <button type='submit'>
                            <LensIcon />
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}
