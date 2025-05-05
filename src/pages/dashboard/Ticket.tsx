import { useState } from 'react';

import { useMetadata } from '../../hooks/useMetadata';
import TicketNavigation from '../../components/dashboard/ticket/TicketNavigation';
import TicketContainer from '../../components/dashboard/ticket/TicketContainer';

const Ticket = () => {
  useMetadata('Tickets');

  const [activeTab, setActiveTab] = useState<'flights' | 'stays'>('flights');

  const handleTabChange = (tab: 'flights' | 'stays') => {
    setActiveTab(tab);
  };

  return (
    <section className="py-8">
      <h2 className="text-3xl pb-4">Tickets/Bookings</h2>

      <TicketNavigation
        activeTab={activeTab}
        handleTabChange={handleTabChange}
      />

      <TicketContainer activeTab={activeTab} />
    </section>
  );
};

export default Ticket;
