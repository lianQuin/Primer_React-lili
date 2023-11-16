import React from 'react'
import {Card, Box,Text, Image , Heading, Button, CardBody, CardFooter } from '@chakra-ui/react'
import { Icon, createIcon } from '@chakra-ui/react'
import { Badge,Flex,Avatar } from '@chakra-ui/react'
import { color } from '@chakra-ui/react'

const Contenido = ({producto}) => {
    
  return (
    <div>

     <Flex as='header' >
       <Avatar src= './favicon.ico/carrito.png' w='19px' h='19px'/>
        <Box ml='3'>
         <Text fontWeight='bold'>
          Sitio ecommerce
          <Badge ml='1' colorScheme='green'>
          New
          </Badge>
         </Text>
          <Text fontSize='sm'>Producto</Text>
          </Box>
     
    
     </Flex>

    <Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
>
  <Image
    objectFit='cover'
    maxW={{ base: '400%', sm: '400px' }}
    src={producto.image}
    alt='Mens Casual Slim Fit'
  />

  <Box>
    <CardBody>
      <Heading size='md'>{producto.title}</Heading>

      <Text py='2'>
      {producto.description}
      </Text>
      <Text as='p' fontSize='3X1' fontWeight='bold'>Precio:$ {producto.price}</Text>

      <Text as='p' fontSize='3X1' fontWeight='bold'>Categoria: {producto.category}</Text>

      <Text as='p' fontSize='3X1' fontWeight='bold'>Sku: {producto.id}</Text>

      <Text as='p' fontSize='3X1' fontWeight='bold'>Cantidad en stock: {producto.cantidad}</Text>
      <Text as='p' fontSize='3X1' fontWeight='bold'><strong>Colores disponobles</strong></Text>
      <Icon viewBox='0 0 200 200' color='red.500'>
         <path
         fill='currentColor'
        d='M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0'
         />
     </Icon>
     <Icon viewBox='0 0 200 200' color='blue.500'>
         <path
         fill='currentColor'
        d='M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0'
         />
     </Icon>
     <Icon viewBox='0 0 200 200' color='black.500'>
         <path
         fill='currentColor'
        d='M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0'
         />
     </Icon>
     
    </CardBody>

    <CardFooter>
      <Button variant='solid' colorScheme='blue'>
        comprar
      </Button>


    </CardFooter>
   
  </Box>
  
</Card> 
<Box>
    <Text as='footer' textAlign='center' fontSize='3X1' fontWeight='bold' ><strong>@Copyright Liliana Quintana</strong></Text>
    </Box>
</div>  
  )
}
export default Contenido