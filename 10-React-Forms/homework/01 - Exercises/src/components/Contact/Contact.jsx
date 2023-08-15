import React, { useState } from 'react'
import './Contact.modules.css'

// eslint-disable-next-line
const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

// validate
export const validate = (inputs) => {
  //objeto de errores
  const errors = {};
  //validación name
  if(!inputs.name){
    errors.name = "Se requiere un nombre";
  }
  //validación email
  if(!regexEmail.test(inputs.email)){
    errors.email = "Debe ser un correo electrónico";
  }
  //validación message
  if(!inputs.message){
    errors.message = "Se requiere un mensaje";
  }
  return errors
}

export default function Contact () {

  //estados
  const [inputs,setInputs] = useState({
    name:'',
    email:'',
    message:'',
  });

  const [errors,setErrors] = useState({
    name:'',
    email:'',
    message:'',
  })

  //func.handleChange
  const handleChange = (e) => {
    //console.log(e.target.value);
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value});
    setErrors(validate({...inputs, [name]: value}));
  }

  //func.handleSubmit
  const handleSubmit = (e) => {
    e.preventDefault();
    if(Object.keys(errors).length){
      window.alert("Debe llenar todos los campos");
    } else {
      window.alert('Datos completos');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
    
        <label htmlFor="">Nombre:</label>
          <input 
            className={errors.name ? "warning" : null} 
            value={inputs.name} name="name" 
            type="text" onChange={handleChange} 
            placeholder='Escribe tu nombre...' 
          />
          <p className="danger">{errors.name && errors.name}</p>
        
        <label htmlFor="">Correo Electrónico:</label>
          <input 
            className={errors.email && "warning"}
            value={inputs.email} 
            name="email" 
            type="text" 
            onChange={handleChange} 
            placeholder='Escribe tu email...' 
          />
        
        <label htmlFor="">Mensaje:</label>
          <textarea 
            className={errors.message && "warning"}
            value={inputs.message} 
            name="message" 
            type="text" 
            onChange={handleChange} 
            id="" 
            cols="30" 
            rows="10" 
            placeholder='Escribe tu mensaje...'
          ></textarea>
        
        <button type="submit">Enviar</button>

      </form>
    </div>
    )
}
