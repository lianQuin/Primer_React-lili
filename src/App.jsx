
import React from 'react'
import Contenido  from './Components/Contenido/Contenido'
import { ChakraProvider } from '@chakra-ui/react'


function App() {
  // Creamos un objeto con los datos del producto que queremos mostrar
const producto = {
  "id":4,
  "title":"Mens Casual Slim Fit",
  "cantidad": 500 ,
  "price":15.99,
  "description":"The color could be slightly different between on the screen and in practice Lorem, ipsum dolor sit amet consectetur adipisicing elit. At id architecto veritatis sequi corrupti! Obcaecati, labore quibusdam exercitationem a quisquam nemo libero aliquid cum eos necessitatibus sequi laborum aut esta re buenoooo te va a quedar super lindo, por algo trabajas si no te das estos mimos quien??. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. At id architecto veritatis sequi corrupti! Obcaecati, labore quibusdam exercitationem a quisquam nemo libero aliquid cum eos necessitatibus sequi laborum aut<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. At id architecto veritatis sequi corrupti! Obcaecati, labore quibusdam exercitationem a quisquam nemo libero aliquid cum eos necessitatibus sequi laborum aut",
  "category":"men's clothing",
  "image":"https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg"
}
 return (
    <>
    
     <div>
     
     <ChakraProvider><Contenido producto={producto}/></ChakraProvider>
      </div>
    </>
 )
}

export default App
