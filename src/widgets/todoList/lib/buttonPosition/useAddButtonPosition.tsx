export const useAddButtonPosition = () => {
    const displayWidth = window.innerWidth;
    console.log(displayWidth);

    if (displayWidth < 1000) {
        return {
            right: `${8 / 16}rem`,
            bottom: `${32 / 16}rem`
        };
    }

    return {
        right: (((displayWidth - (displayWidth * 0.6)) / 2 + 8) / 16).toString() + 'rem',
        bottom: (32 / 16).toString() + 'rem'
    };
}
