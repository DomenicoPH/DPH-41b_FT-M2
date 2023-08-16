import { ADD_PRODUCT, DELETE_PRODUCT, GET_STORE_NAME } from "./types";
import axios from 'axios'

export function addProduct (product){
    return {
        type: ADD_PRODUCT,
        payload: product,
    };
};

export function deleteProduct (id){
    return {
        type: DELETE_PRODUCT,
        payload: id,
    };
};

export function getStoreName (){

    try{
        return function(dispatch){
            return axios.get("http://localhost:3001/store")
            .then((info) => {
                return dispatch({
                    type: GET_STORE_NAME,
                    payload: info.data.name,
                })
            })
        }
    } catch (error){
        console.log("no se encuentra el name", error)
    }

};

/*  DATA:

    'axios'
    devuelve un {objeto} con muchas
    propiedades. Una de ellas, data,
    contiene el objeto que llamamos
    con axios ----->
    {
      a:a,
      b:b,
      c:c,
      data: {"http://localhost:3001/store"}
    }

*/