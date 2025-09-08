export const useAddButtonPosition = () => {
    const displayWidth = window.innerWidth;
    const contentWidth = displayWidth * 0.6;
    const rightGap = 8;
    const bottomGap = 32;

    if (displayWidth < 1000) {
        return {
            right: `${rightGap / 16}rem`,
            bottom: `${bottomGap / 16}rem`
        };
    }

    return {
        right: (((displayWidth - contentWidth) / 2 + rightGap) / 16).toString() + 'rem',
        bottom: (bottomGap / 16).toString() + 'rem'
    };
}
