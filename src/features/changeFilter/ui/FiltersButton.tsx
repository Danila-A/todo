import type { FC } from "react";
import styles from './FiltersButton.module.scss';
import { useAppSelector } from "../../../shared/lib";
import { selectFilter } from "../../../entities/Filter";
import { ArrowIcon } from "../../../shared/ui";
import { contentData } from "../../../shared/staticContent";
import { useOutsideFilterButtonClick } from "../lib/usability/useOutsideFilterButtonClick";
import { animated } from '@react-spring/web';
import { useFilterListAnimation } from "../lib/animation/useFilterListAnimation";
import { useFilterArrowAnimation } from "../lib/animation/useFilterArrowAnimation";

export const FiltersButton: FC = () => {
    const filter = useAppSelector(selectFilter);
    const { 
        springs, 
        isOpenRef, 
        changeAnimatingFilter, 
        toggleAnimatingList, 
        closeByOutsideClick 
    } = useFilterListAnimation();

    const { arrowSprings, rotateAnimatingArrow } = useFilterArrowAnimation();
    useOutsideFilterButtonClick(isOpenRef, closeByOutsideClick, rotateAnimatingArrow);

    const handleButtonClick = () => {
        toggleAnimatingList();
        rotateAnimatingArrow();
    }

    const handleFilterItemClick = (filter: FilterType) => {
        changeAnimatingFilter(filter);
        rotateAnimatingArrow();
    }

    return (
        <div className={ styles.button }>

            <div 
                className={ styles.button__body } 
                onClick={handleButtonClick}
                id='filterButton'
            >
                <div className={ styles.button__inner }>
                    <div className={ styles.button__text }>{ filter }</div>
                    <animated.div 
                        style={arrowSprings}
                        className={styles.button__arrow}
                    >
                        <ArrowIcon />
                    </animated.div>
                </div>
            </div>

 
            <animated.div 
                className={ styles.button__filters_list }
                style={springs}
                id='filterList'
            >
                {contentData.filters.map((item) => (
                    <div 
                        className={ styles.button__item }
                        key={ item.id }
                        onClick={ () => handleFilterItemClick(item.value as FilterType) }
                    >
                        { item.value }
                    </div>
                ))}
            </animated.div>

        </div>
    );
}
