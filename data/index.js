import galeria from "./galeria/galeria";

export const generarContextoDePagina = (page) => {
    console.log('page', page);
    
    let pageObject = {};
    const contextObject = {}; 

    switch(page) {
        case '/index.html':
            pageObject = {
                ...pageObject,
                ...galeria
            };
            break;
        default:
            pageObject = {};
    }

    return {
        ...contextObject, 
        ...pageObject
    };
};