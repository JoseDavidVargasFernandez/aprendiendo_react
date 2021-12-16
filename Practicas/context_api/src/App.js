import React, {useContext} from "react";
import styled from "styled-components";
import { BrowserRouter,Routes, Route} from "react-router-dom";
import Inicio from "./componentes/Inicio";
import Blog from "./componentes/Blog";
import AcercaDe from "./componentes/Acerca_de";
import Header from "./componentes/Header";
import Post1 from "./componentes/Post";
import Error404 from "./componentes/Error404";
import { ContextoTema } from "./contextos/ContextoTema";







const App = () => {

    const {tema} = useContext(ContextoTema);
    
  return ( 

    <BrowserRouter>
      <ContenedorPrincipal>
        <Header/>
        <Main tema = {tema}>
        <Routes>
                <Route path="/" element={<Inicio/>}  />
                <Route path="/blog" element={<Blog/>} />
                <Route path="/post" element={<Post1/>} />
                <Route path="/acerca-de" element={<AcercaDe/>} />
                <Route path="*" element={<Error404/>}/>
              </Routes>
        </Main>
      </ContenedorPrincipal>
    </BrowserRouter>
   );
}

const ContenedorPrincipal = styled.div `
  padding: 40px;
  width: 90% ;
  max-width: 700px;
  
`;

const Main = styled.main`
  font-size: ${props => props.tema ? props.tema.fuente + 'px' : '16px'};
  text-align: ${props => props.tema ? props.tema.alineado: 'right'};
  background: #fff;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0px 0px 5px rgba(129, 129, 129, 0.1)
`;
 
export default App;
