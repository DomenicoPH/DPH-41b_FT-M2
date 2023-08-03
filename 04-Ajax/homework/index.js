/*console.log test*/
$.get('http://localhost:5000/amigos',(response=>{
    console.log(response)
}));
//------------------------------------------------------------>

// Constantes
const url = 'http://localhost:5000/amigos'
const [boton] = $('#boton');
const [lista] = $('#lista');
const [search] = $('#search');
const [input] = $('#input');
const [amigo] = $('#amigo');
const [deleteBtn] = $('#delete');
const [success] = $('#success');


/* ------------------------------------------------------------------------- Lista amigos */

//listaAmigos | callback: toma la respuesta del servidor, la recorre y por cada item(amigo) crea un nuevo elemento <li> e inserta allí el valor de la propiedad nombre de cada objeto 'amigo'.
listaAmigos = (response) => {
    lista.innerText = ''
    response.forEach((amigo) => {
        const newli = document.createElement('li');
        newli.innerHTML = amigo.name;
        lista.appendChild(newli);
    })
};
//buscaAmigo | recibe servidor y un callback que hace algo con el.
const getAmigos = () => {
    $.get(url,listaAmigos)
};

/* ------------------------------------------------------------------------- Busca amigo por id */

amigoNombre = (response) => {
    amigo.innerText = response.name
}

const searchAmigoId = () => {
    const id = input.value
    input.value = ''
    $.get(`${url}/${id}`,amigoNombre);
}

/* ------------------------------------------------------------------------- Elimina amigo */

const borraAmigo = () => {
    const [inputDelete] = $('#inputDelete')
    const id = inputDelete.value;
    inputDelete.value = '';

    success.innerText = 'Amigo borrado exitosamente'

    $.ajax({
        type: 'DELETE',
        url: `${url}/${id}`,
        success: (response) => listaAmigos(response)
    })
}

//Event Listeners
boton.addEventListener('click',getAmigos)
search.addEventListener('click',searchAmigoId)
deleteBtn.addEventListener('click',borraAmigo)