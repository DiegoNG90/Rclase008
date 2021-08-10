import { Table } from 'react-bootstrap';
import TicketRow from '../components/TicketRow'
import { useReducer, useEffect } from 'react';
import {initialState, ticketReducer} from '../../../reducers/tickets'
import { SET_TICKETS, ADD_QUANTITY, SUBSTRACT_QUANTITY } from '../../../actions/tickets';

const TicketTable = ({tickets}) => {
  const [state, dispatch] = useReducer(ticketReducer, initialState);

  useEffect(() => {
    dispatch({ type: SET_TICKETS, payload: { tickets } });
  }, [tickets]);

  const addTicketQuantity = (id) => {
    dispatch({ type: ADD_QUANTITY, payload: { id } })
  }
  const substractTicketQuantity = (id) => {
    dispatch({ type: SUBSTRACT_QUANTITY, payload: { id } });
  };

  return (
    <>
      <Table>
        <thead>
          <tr>
            <th>Tickets</th>
            <th className="text-center">Cantidad</th>
            <th className="text-center">Precio</th>
          </tr>
        </thead>

        <tbody>
          {state.tickets?.length > 0 &&
            state.tickets?.map((ticket) => (
              <TicketRow
                key={ticket.id}
                {...ticket}
                addTicketQuantity={addTicketQuantity}
                substractTicketQuantity={substractTicketQuantity}
              />
            ))}
        </tbody>
      </Table>
      {'$'} {state.total}
    </>
  );
};

export default TicketTable;
