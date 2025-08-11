import type { FC } from 'react';
import styles from './SearchForm.module.scss';
import { Input, LensIcon } from '../../../shared';
import { useAppSelector } from '../../../app';
import { selectMemoizedTheme } from '../../../entities/Themes';
import { useForm } from 'react-hook-form';
import type { SearchFormValue } from '../../../app/types';
import { handleSearchFormSubmit } from '../handler/handleSearchFormSubmit';

export const SearchForm: FC = () => {
    const themeType = useAppSelector(selectMemoizedTheme);
    const { register, handleSubmit } = useForm<SearchFormValue>();
    
    return (
        <div className={ styles.wrapper }>
            <form onSubmit={handleSubmit(handleSearchFormSubmit)}>
                <div className={ styles.inner }>
                    <Input<SearchFormValue>
                        inputType={ "search" }
                        placeholder={ 'Search note...' }
                        themeType={ themeType }
                        label={ 'search' }
                        register={ register }
                    />
                    <div className={ styles.buttonWrapper }>
                        <button type='submit'>
                            <LensIcon />
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}
