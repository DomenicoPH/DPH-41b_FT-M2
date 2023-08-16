import React from "react";
import { useDispatch } from "react-redux";
import { enviarForm } from "../../redux/actions/actions";

const ContactUs = () => {
  
  //DISPATCH
  const dispatch = useDispatch();

  //ESTADO LOCAL FORM
  const [form, setForm] = React.useState({
  nombre: "",
  email: "",
  asunto: "",
  mensaje: "",
  });

  //FUNCIONES
  const handleInput = (event) => {
    const { name, value } = event.target
    setForm({
      ...form, [name]: value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(enviarForm(form));
    setForm({
      nombre: "",
      email: "",
      asunto: "",
      mensaje: "",
    })
  }

  return (
    <div>
      <form className="contactBg">
        <label htmlFor="nombre">Nombre: </label>
        <input 
          onChange={handleInput} 
          name="nombre" 
          value={form.name} />

        <label htmlFor="email">Email: </label>
        <input 
          onChange={handleInput} 
          name="email"
          value={form.email} />

        <label htmlFor="asunto">Asunto: </label>
        <input 
          onChange={handleInput} 
          name="asunto"
          value={form.asunto} />

        <label htmlFor="mensaje">Mensaje: </label>
        <input 
          onChange={handleInput} 
          name="mensaje"
          value={form.mensaje} />

        <button onClick={handleSubmit}>Enviar</button>
      </form>
    </div>
  );
};

export default ContactUs;
