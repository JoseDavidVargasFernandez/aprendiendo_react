import React, {useState, useEffect} from "react";
import styled from "styled-components";

const Blog = () => {

    const [articulos, establecerArticulos] = useState([]);
    const [cargando, establecerCargando] = useState(true);


   useEffect(() => {    
       setTimeout(() => {
            establecerArticulos([
                {
                    id:1,
                    titulo: 'Titulo del primer articulo'
                }, 
                {
                    id:2,
                    titulo: 'Titulo del segundo articulo'
                }, 
                {
                    id:3,
                    titulo: 'Titulo del tercer articulo'
                }
    ]);
    establecerCargando(false);
}, 3000)
},[]);

console.log(articulos)



    return (
        <ContenedorBlog>
            <Titulo>Blog</Titulo>

            {cargando === true ? 
                <p>Cargando ....</p>
                :
                <div>
                {articulos.map((articulo) => {
                    return <Articulo key={articulo.id}>{articulo.titulo}</Articulo>
                })}
            </div>
        }       
        </ContenedorBlog>
      );
}

const ContenedorBlog = styled.div`
    margin: 40px 0 20px 0;
`
const Titulo = styled.h2`
    margin-bottom: 10px;
`
const Articulo = styled.p`
    padding: 10px 0;
    margin-bottom: 10px;
    border-bottom: 1px solid #ccc
`
 
export default Blog;