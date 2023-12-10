/* eslint-disable react/jsx-no-undef */
import {  Flex } from "@chakra-ui/react"



import BottomBarItems from "./BottomBarItems";

const BottomBar = () => {



  return (

      <Flex justifyContent={'space-between'} alignItems={'center'} backgroundColor={'black'} zIndex={999} gap={10} w='full' height={'70px'} position={'fixed'} bottom={0} left={0} py={8} px={{base: 2, md: 4}}>
           <BottomBarItems />
      </Flex>
  )
}

export default BottomBar