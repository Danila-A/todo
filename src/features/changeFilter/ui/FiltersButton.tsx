import { useState, type FC } from "react";
import styles from './FiltersButton.module.scss';
import { useAppDispatch, useAppSelector } from "../../../shared/lib";
import { changeFilter, selectMemoizedFilter } from "../../../entities/Filter";
import { ArrowIcon } from "../../../shared/ui";
import { contentData } from "../../../shared/staticContent";

export const FiltersButton: FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const filter = useAppSelector(selectMemoizedFilter);
    const dispatch = useAppDispatch();

    const handleChangeFilter = (filter: FilterType) => {
        dispatch(changeFilter({ filter }));
        setIsVisible(false);
    }

    const arrowClasses = isVisible ? `${styles.arrow}` : `${styles.arrow} ${styles.arrow_rotated}`;

    return (
        <div className={ styles.wrapper } onClick={() => setIsVisible(!isVisible)}>
            <div className={ styles.inner }>
                <div className={ styles.text }>{ filter }</div>
                <div className={ arrowClasses }>
                    <ArrowIcon />
                </div>
                <div className={ styles.filtersList }>
                    {contentData.filters.map((item) => (
                        <div 
                            className={ styles.item }
                            key={ item.id }
                            onClick={ () => handleChangeFilter(item.value as FilterType) }
                        >
                            { item.value }
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
