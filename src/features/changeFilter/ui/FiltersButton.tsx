import { useState, type FC } from "react";
import styles from './FiltersButton.module.scss';
import { useAppDispatch, useAppSelector } from "../../../shared/lib";
import { changeFilter, selectFilter } from "../../../entities/Filter";
import { ArrowIcon } from "../../../shared/ui";
import { contentData } from "../../../shared/staticContent";
import { useOutsideFilterButtonClick } from "../lib/usability/useOutsideFilterButtonClick";
import { useFilterButtonAnimation } from "../lib/animation/useFilterButtonAnimation";
import { animated } from '@react-spring/web';

export const FiltersButton: FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    useOutsideFilterButtonClick(isVisible, setIsVisible);
    const filter = useAppSelector(selectFilter);
    const dispatch = useAppDispatch();
    const {springs, api} = useFilterButtonAnimation();

    const handleChangeFilter = (filter: FilterType) => {
        api.start({reverse: true});
        setTimeout(() => {
            // console.log('render');
            dispatch(changeFilter({ filter }));
            setIsVisible(false)
        }, 2200);
    }

    console.log('render');

    const handleClick = () => {
        if (!isVisible) {
            setIsVisible(true);
            api.start();
        } else {
            api.start({reverse: true});
            setTimeout(() => setIsVisible(false), 200);
        }
    }

    const arrowClasses = isVisible ? `${styles.button__arrow}` : `${styles.button__arrow} ${styles.button__arrow_rotated}`;

    return (
        <div className={ styles.button }>

            <div 
                className={ styles.button__body } 
                onClick={handleClick}
                id='filterButton'
            >
                <div className={ styles.button__inner }>
                    <div className={ styles.button__text }>{ filter }</div>
                    <div className={ arrowClasses }>
                        <ArrowIcon />
                    </div>
                </div>
            </div>

            {isVisible && 
                <animated.div 
                    className={ styles.button__filters_list }
                    style={springs}
                >
                    {contentData.filters.map((item) => (
                        <div 
                            className={ styles.button__item }
                            key={ item.id }
                            onClick={ () => handleChangeFilter(item.value as FilterType) }
                        >
                            { item.value }
                        </div>
                    ))}
                </animated.div>
            }

        </div>
    );
}
