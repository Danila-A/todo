import { useState, type FC } from "react";
import { selectMemoizedFilter, type FilterType } from "../../../entities/Filters";
import { changeFilterHandler } from "../handler/changeFilterHandler";
import styles from './FiltersButton.module.scss';
import { ArrowIcon } from "../../../shared";
import { useAppSelector } from "../../../app";

export const FiltersButton: FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const filter = useAppSelector(selectMemoizedFilter);

    const handleChangeFilter = (filter: FilterType) => {
        changeFilterHandler(filter);
        setIsVisible(false);
    }

    const arrowClasses = isVisible ? `${styles.arrow}` : `${styles.arrow} ${styles.arrow_rotated}`;

    return (
        <div className={ styles.wrapper }>
            <div className={ styles.inner }>
                <div className={ styles.text }>{ filter }</div>
                <div className={ arrowClasses }>
                    <ArrowIcon />
                </div>
                <div className={ styles.filters }>

                </div>
            </div>
        </div>
    );
}
