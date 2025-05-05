export type TicketNavigationProps = {
  activeTab: 'flights' | 'stays';
  handleTabChange: (tab: 'flights' | 'stays') => void;
};

export type TicketTabItemProps = TicketNavigationProps & {
  text: string;
  argument: 'flights' | 'stays';
};
