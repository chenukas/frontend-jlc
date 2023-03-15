import { Provider } from 'react-redux';
import { render, cleanup, screen } from '@testing-library/react';
import App from './App';
import store from '../../store';

afterEach(cleanup)

function renderWithRedux(component: any, store: any) {
    return {
        ...render(<Provider store={store}>{component}</Provider>)
    }
}

it('renders app with redux', async () => {
    const { getByText } = renderWithRedux(<App />, store)
    expect(screen.getByText(/JEAN'S LC./)).toBeInTheDocument()
})

it('renders with product price from store', async () => {
    const { getByText } = renderWithRedux(<App />, store)
    expect(screen.getByText(/AUD 25/)).toBeInTheDocument()
})