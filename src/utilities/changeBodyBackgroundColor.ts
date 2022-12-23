const changeBodyBackgroundColor = (newColor: string) => {
    const body = document.body;
    body.setAttribute('style', 'background-color:' + newColor);
};
export default changeBodyBackgroundColor;