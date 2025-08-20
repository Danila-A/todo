import type { FC } from 'react';
import styles from './SearchForm.module.scss';
import { Input, LensIcon } from '../../../shared';
import type { SearchFormValue } from '../../../app';
import { useForm } from 'react-hook-form';
import { handleSearchFormSubmit } from '../handler/handleSearchFormSubmit';

export const SearchForm: FC = () => {
    const { register, handleSubmit } = useForm<SearchFormValue>();
    
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
