import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    Button,
    useDisclosure,
    createLocalStorageManager,
  } from '@chakra-ui/react'
  import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../AuthContext/AuthContext'


function OrderConfirm() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = React.useRef()

    const {setAfterDelete,setTotal,cart,users} = useContext(AppContext)

    // console.log(cart.length)

    const handleDelete = () => {
        setAfterDelete([])
        setTotal(0)
    }

    return (
      <>
        <Button disabled={cart.length<=0} bgColor='teal.300' onClick={()=>{onOpen();handleDelete()}}>
          Order
        </Button>
  
        <AlertDialog
          isOpen={isOpen}
          leastDestructiveRef={cancelRef}
          onClose={onClose}
        >
          <AlertDialogOverlay>
            <AlertDialogContent>
              <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                Order Done
              </AlertDialogHeader>
  
              <AlertDialogBody>
                {users.name} Your Food Gets Deliverd Soon at {users.address}
              </AlertDialogBody>
  
              <AlertDialogFooter>
                <Button ref={cancelRef} onClick={onClose}>
                  Back
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      </>
    )
  }

  export default OrderConfirm