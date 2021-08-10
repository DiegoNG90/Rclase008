import { render, fireEvent } from '@testing-library/react';
import { tickets } from '../../../mocks/tickets'
import TicketTable from '../components/TicketTable'


describe("TicketTable", ()=> {
    test("TicketTable should render properly", () => {
        const {getByText} = render(<TicketTable tickets={tickets}/>)
        getByText(/tickets/i)
        // getByText("0")
        getByText("$0")
    })


    test("Should increment ticket quantity and modify total", ()=> {
        const { getByRole, getByText } = render(<TicketTable tickets={tickets} />);
        fireEvent.click(getByRole("button", {name: "+"} ))
        getByText("1")
        getByText("700")
    })
})