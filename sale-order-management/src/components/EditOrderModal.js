import React from 'react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button, FormControl, FormLabel, Input } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const EditOrderModal = ({ isOpen, onClose, order }) => {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: order,
  });
  const queryClient = useQueryClient();

  const mutation = useMutation(updatedOrder => {
    // Mimic API call
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(updatedOrder);
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
        <ModalHeader>Edit Sale Order</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form id="edit-order-form" onSubmit={handleSubmit(onSubmit)}>
            <FormControl>
              <FormLabel>Customer ID</FormLabel>
              <Input {...register('customer_id', { required: true })} readOnly />
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
          <Button colorScheme="blue" mr={3} form="edit-order-form" type="submit">
            Save
          </Button>
          <Button onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default EditOrderModal;
