
const setDisabledStateTo = function setDisabledStateTo(elementId: string, state: boolean, elementText?: string, onClick?: () => void): void {


    const element = document
        .querySelectorAll("#" + elementId)[0]

        state ? element.setAttribute("disabled", "true") : element.removeAttribute("disabled");

    if (state) {
        element.outerHTML = element.outerHTML
    }

    if (elementText) {
        element.innerHTML = elementText;
    }

    if (onClick) {
        element.addEventListener("click", onClick);
    }
}

const setVisibilityStateTo = function setVisibilityStateTo(elementId: string, state: boolean): void {

    const element : HTMLElement = document.querySelectorAll<HTMLElement>("#" + elementId)[0]

    state ? element.style.visibility = "visible" : element.style.visibility = "hidden";
}


const setDisplayStateTo = function setDisplayStateTo(elementId: string, state: string): void {

    const element : HTMLElement = document.querySelectorAll<HTMLElement>("#" + elementId)[0]

    element.style.display = state;
}

export {setDisabledStateTo, setVisibilityStateTo, setDisplayStateTo};