import React from 'react';
import { Box, Table, Thead, Tbody, Tr, Th, Td, Button, useDisclosure } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import EditOrderModal from './EditOrderModal';

const fetchOrders = () => {
  // Mimic API call
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([
        { id: 1, customer_id: 11908, sku_id: 248, quantity: 10, price: 50, invoice_no: 'Invoice-123', invoice_date: '2024-07-05', status: 'active' },
        { id: 2, customer_id: 11908, sku_id: 247, quantity: 5, price: 30, invoice_no: 'Invoice-124', invoice_date: '2024-07-06', status: 'completed' },
      ]);
    }, 500);
  });
};

const CompletedOrders = () => {
  const { data: orders, isLoading } = useQuery('orders', fetchOrders);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedOrder, setSelectedOrder] = React.useState(null);

  const handleEdit = (order) => {
    setSelectedOrder(order);
    onOpen();
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <Box>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Customer ID</Th>
            <Th>SKU ID</Th>
            <Th>Quantity</Th>
            <Th>Price</Th>
            <Th>Invoice No</Th>
            <Th>Invoice Date</Th>
            <Th>Action</Th>
          </Tr>
        </Thead>
        <Tbody>
          {orders.filter(order => order.status === 'completed').map(order => (
            <Tr key={order.id}>
              <Td>{order.customer_id}</Td>
              <Td>{order.sku_id}</Td>
              <Td>{order.quantity}</Td>
              <Td>{order.price}</Td>
              <Td>{order.invoice_no}</Td>
              <Td>{order.invoice_date}</Td>
              <Td>
                <Button onClick={() => handleEdit(order)}>Edit</Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      {selectedOrder && (
        <EditOrderModal isOpen={isOpen} onClose={onClose} order={selectedOrder} />
      )}
    </Box>
  );
};

export default CompletedOrders;


