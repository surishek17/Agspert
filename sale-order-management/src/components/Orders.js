import React from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel, Box, Button } from '@chakra-ui/react';
import ActiveOrders from './ActiveOrders';
import CompletedOrders from './CompletedOrders';
import NewOrderModal from './NewOrderModal';

const Orders = () => {
  const [isModalOpen, setModalOpen] = React.useState(false);

  return (
    <Box p={4}>
      <Button onClick={() => setModalOpen(true)} colorScheme="blue" mb={4}>+ Sale order</Button>
      <NewOrderModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
      <Tabs>
        <TabList>
          <Tab>Active Orders</Tab>
          <Tab>Completed Orders</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <ActiveOrders />
          </TabPanel>
          <TabPanel>
            <CompletedOrders />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default Orders;
