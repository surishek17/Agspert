import React from 'react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button, useDisclosure, FormControl, FormLabel, Input } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const NewOrderModal = ({ isOpen, onClose }) => {
  const { register, handleSubmit, reset } = useForm();
  const queryClient = useQueryClient();

  const mutation = useMutation(newOrder => {
    // Mimic API call
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(newOrder);
      }, 500);
    });
  }, {
    onSuccess: () => {
      queryClient.invalidateQueries('orders');
      onClose();
      reset();
    }
  });

  const onSubmit = data => {
    mutation.mutate(data);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create Sale Order</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form id="new-order-form" onSubmit={handleSubmit(onSubmit)}>
            <FormControl>
              <FormLabel>Customer ID</FormLabel>
              <Input {...register('customer_id', { required: true })} />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>SKU ID</FormLabel>
              <Input {...register('sku_id', { required: true })} />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Quantity</FormLabel>
              <Input type="number" {...register('quantity', { required: true })} />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Price</FormLabel>
              <Input type="number" {...register('price', { required: true })} />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Invoice No</FormLabel>
              <Input {...register('invoice_no', { required: true })} />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Invoice Date</FormLabel>
              <Input type="date" {...register('invoice_date', { required: true })} />
            </FormControl>
          </form>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} form="new-order-form" type="submit">
            Save
          </Button>
          <Button onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default NewOrderModal;
