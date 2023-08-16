import { ADD_PRODUCT, DELETE_PRODUCT, GET_STORE_NAME } from "../actions/types";

const initialState = {
   list: [],
   storeName: ""
};

const rootReducer = (state = initialState, {type, payload}) => {
    switch(type){
        case ADD_PRODUCT:
            return{
                ...state,
                list: [...state.list,payload]
            };
        case DELETE_PRODUCT:
            const newList = state.list.filter((p) => p.id !== payload);
            return{
                ...state,
                list: newList
            };
        case GET_STORE_NAME:
            return{
                ...state,
                storeName: payload,
            };
        default:
            return state;
    }
};

/*  DATA:

    Métodos de búsqueda:
    .map()      - 'editar' editar algunos y mantener el total
    .reduce()   - 'reducir' eliminar
    .filter()   - 'filtrar' eliminar alguno(s) del total
    .find()     - 'encontrar' encontrar alguno del total

*/


export default rootReducer;
