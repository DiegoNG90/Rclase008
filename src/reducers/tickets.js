import { SET_TICKETS , ADD_QUANTITY, SUBSTRACT_QUANTITY} from '../actions/tickets';

export const initialState = {
    tickets: [],
    total: 0,
    resume: {}
}

const getTotal = (tickets) => {
    const total = tickets.reduce((acc, ticket) => {
        return acc + (+ticket.precio * +ticket.cantidad)
    },0)
    return total
}

export const ticketReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TICKETS: {
      return {
        tickets: action.payload.tickets,
        total: getTotal(state.tickets),
      };
    }
    case ADD_QUANTITY: {
        const tickets = state.tickets.map(ticket => ticket.id === action.payload.id ? {...ticket, cantidad: ticket.cantidad +1} : ticket)
        return {
            tickets,
            total: getTotal(tickets)
        }
    }
    default:
      return initialState;
  }
};