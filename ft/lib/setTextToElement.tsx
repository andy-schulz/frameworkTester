const setHeaderText = function setHeaderText(text: string) {

    const headerClassName: string = 'headerElement';

    document
        .getElementsByClassName(headerClassName)[0]
        .innerHTML = text;

}

export {setHeaderText};