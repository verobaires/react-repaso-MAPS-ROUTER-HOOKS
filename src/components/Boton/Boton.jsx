import PropTypes from "prop-types";
import "./Boton.css";

//props nos permite pasar propiedades de padres a hijos
//nos permite poder reutilizar ya que donde se utiliza x ej el boton voy a definir el valor de esa prop
function Boton(props) {
    //aca puedo colocar varias propiedades usando el props dejamos la coma para indicar que se puede agregar otras 
    //despues en el return llamo con style a la constante
    const estilosBoton = {backgroundColor: props.color,};

 //cuando llamamos el boton donde lo usamos (en el ejercicio en section) asignamos los valores que le corresponde a los props
// <Boton color="red" texto="Saber +" onClick=(handlerClick)/> y listo todos estos valores pueden cambiar por boton
    return (
        <div>
        
            <button
                className="boton botonDeslizaColor--rose"
                style={estilosBoton}
                onClick={props.onClick}>
                {props.texto}  
            </button>

            

        </div>
    );

}

Boton.propTypes = {
    color: PropTypes.string,
    texto: PropTypes.string.isRequired,
    onClick: PropTypes.func,
};

export default Boton;