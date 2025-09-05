import { useState, type FC } from "react";
import styles from './FiltersButton.module.scss';
import { useAppDispatch, useAppSelector } from "../../../shared/lib";
import { changeFilter, selectFilter } from "../../../entities/Filter";
import { ArrowIcon } from "../../../shared/ui";
import { contentData } from "../../../shared/staticContent";

export const FiltersButton: FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const filter = useAppSelector(selectFilter);
    const dispatch = useAppDispatch();

    const handleChangeFilter = (filter: FilterType) => {
        dispatch(changeFilter({ filter }));
        setIsVisible(false);
    }

    const arrowClasses = isVisible ? `${styles.button__arrow}` : `${styles.button__arrow} ${styles.button__arrow_rotated}`;

    return (
        <div className={ styles.button }>

            <div className={ styles.button__body } onClick={() => setIsVisible(!isVisible)}>
                <div className={ styles.button__inner }>
                    <div className={ styles.button__text }>{ filter }</div>
                    <div className={ arrowClasses }>
                        <ArrowIcon />
                    </div>
                </div>
            </div>

            {isVisible && 
                <div className={ styles.button__filters_list }>
                    {contentData.filters.map((item) => (
                        <div 
                            className={ styles.button__item }
                            key={ item.id }
                            onClick={ () => handleChangeFilter(item.value as FilterType) }
                        >
                            { item.value }
                        </div>
                    ))}
                </div>
            }

        </div>
    );
}
