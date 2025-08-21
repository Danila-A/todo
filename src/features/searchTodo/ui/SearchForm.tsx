import type { FC } from 'react';
import styles from './SearchForm.module.scss';
import { Input, LensIcon } from '../../../shared';
import type { SearchFormValue } from '../../../app';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { useAppDispatch } from '../../../shared/lib';
import { setSearchValue } from '../../../entities/Search';

export const SearchForm: FC = () => {
    const { register, handleSubmit } = useForm<SearchFormValue>();
    const dispatch = useAppDispatch();

    const handleSearchFormSubmit: SubmitHandler<SearchFormValue> = (data) => {
        if (!data.search.trim()) return;
        dispatch(setSearchValue({ value: data.search }));
    }
    
    return (
        <div className={ styles.wrapper }>
            <form onSubmit={handleSubmit(handleSearchFormSubmit)}>
                <div className={ styles.inner }>
                    <Input<SearchFormValue>
                        inputType={ "search" }
                        placeholder={ 'Search note...' }
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
