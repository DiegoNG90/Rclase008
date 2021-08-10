import TicketTable from './components/TicketTable';
const tickets = [
  {
    id: 1,
    descripcion: 'Descripcion del ticket',
    precio: 700,
    cantidad: 0,
  },
  {
    id: 2,
    descripcion: 'Descripcion del ticket 2',
    precio: 900,
    cantidad: 0,
  },
];
const Tickets = () => {
  return (
    <>
      <h1>Tickets</h1>
      <TicketTable tickets={tickets} />
    </>
  );
};

export default Tickets;
