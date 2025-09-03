import type { FC } from 'react';
import styles from './SearchForm.module.scss';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '../../../shared/lib';
import { setSearchValue, type SearchFormValue } from '../../../entities/Search';
import { Input, LensIcon } from '../../../shared/ui';
import { selectTheme } from '../../../entities/Theme';

export const SearchForm: FC = () => {
    const { register, handleSubmit, getValues } = useForm<SearchFormValue>();
    const dispatch = useAppDispatch();
    const themeType = useAppSelector(selectTheme);

    const handleSearchFormSubmit: SubmitHandler<SearchFormValue> = (data) => {
        if (!data.search.trim()) return;
        dispatch(setSearchValue({ value: data.search }));
    }

    const handleSearchReset = () => {
        if (!getValues('search')) dispatch(setSearchValue({ value: '' }));
    }
    
    return (
        <div className={ styles.form }>
            <form onSubmit={handleSubmit(handleSearchFormSubmit)}>
                <div className={ styles.form__inner }>
                    <Input<SearchFormValue>
                        inputType={ "search" }
                        placeholder={ 'Search note...' }
                        label={ 'search' }
                        register={ register }
                        onChange={handleSearchReset}
                        themeType={themeType}
                    />
                    <div className={styles.form__button_wrapper}>
                        <button 
                            className={styles.form__button}
                            type='submit'
                        >
                            <LensIcon themeType={themeType} />
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}
