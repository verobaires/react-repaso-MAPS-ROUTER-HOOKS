/* import React from 'react'; */
import './Sucursales.css';
import Boton from '../Boton/Boton';
import DataSucursales from './DataSucursales';
import { useState } from 'react';

function Sucursales() {
    /* aca hago el seguimiento de los elementos que se muestran y ocultan */
    const [mostrar, setMostrar] = useState({});

    //con expandir puedo tomar cada elemento y definir si ese elemento se comprime (es decir no se muestra)  o no se comprime. Cuando coloco ... uso el spread operator para propagar props, que permite llamar a un objeto que tiene diferentes variables aca lo uso para cambiar el estado de   los elementos necesarios
    //con tipo marco si sera de tipo descripcion o iframe lo que se mostrara
    //con null se ve si la imagen se muestra si no es asi null hara que se muestre nuevamente caso contrario el tipo sera o text o iframe por lo tanto mostrara o la descripcion o el mapa


    const expandir = (itemId, tipo) => {
        setMostrar(
            (comprimir) => (
                { ...comprimir, [itemId]: comprimir[itemId] === tipo ? null : tipo, }));
    };
    return (
        <section className='ContenedorPpal'>
            <h1 className="EncabezadoPpal ">Nuestros Locales</h1>
            {DataSucursales.map((data) => (
                <div className="ContenedorSecund" key={data.id}>

                    <div>
                        <h2 className='EncabezadoSecund'>{data.nombre}</h2>
                        <p><span className='bold'>Direccion: </span>{data.direccion}</p>
                        <p className=" nMail"> <span className="bold">Mail:</span>  {data.mail}</p>
                        <p className="  "> <span className="bold">Horarios:</span>  {data.horarios}</p>
                    </div>

                    {mostrar[data.id] === 'text' ? (
                        <div>
                            <p className="parra ">{data.descripcion}</p>
                        </div>
                    ) :
                        mostrar[data.id] === 'iframe' ? (
                            <div className='contenedorIframeOwoko'>
                                <iframe className="iframeMap" title="Google Maps"
                                    width="600"
                                    height="450"
                                    loading="lazy"
                                    allowFullScreen src={data.iframe} ></iframe>
                            </div>
                        ) : (
                            <div className='contenedorImgOwoko'>
                                <img className="ImagenOwoko" src={data.imagen} alt={data.nombre} />
                            </div>
                        )}

                    <div className="BotonesOwoko">
                        <Boton className="BotonOwoko" texto="DESCRIPCION" onClick={() => expandir(data.id, 'text')}>
                            {mostrar[data.id] === 'text' ? 'Mostrar imagen' : 'Mostar texto'}
                        </Boton>
                        <Boton className="BotonOwoko" texto="MAPA" color="#d2b8b8" onClick={() => expandir(data.id, 'iframe')}>
                            {mostrar[data.id] === 'iframe' ? 'Mostrar imagen' : 'Mostar iframe'}
                        </Boton>
                    </div>
                </div>
            ))}
        </section>
    )
}



export default Sucursales


