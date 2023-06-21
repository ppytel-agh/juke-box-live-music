import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Homepage from './routes/Homepage';
import Login from './routes/Login';
import SignUp from './routes/SignUp';
import EventDetails from './routes/EventDetails';
import Event from './components/Event/Event';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import EventsPage from './routes/EventsPage';
import BookTicket from './routes/BookTicket';
import TicketSuccess from './routes/TicketSuccess';
import ClientPanel from './routes/ClientPanel';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Homepage />,
  },
  {
    path: '/zaloguj-sie',
    element: <Login />,
  },
  {
    path: '/zarejestruj-sie',
    element: <SignUp />,
  },
  {
    path: '/wydarzenia/:id',
    element: <EventDetails />,
  },
  {
    path: '/wydarzenia',
    element: <EventsPage />,
  },
  {
    path: '/kup-bilet/:id',
    element: <BookTicket />,
  },
  {
    path: '/kupiono-bilet',
    element: <TicketSuccess />,
  },
  {
    path: '/panel-klienta',
    element: <ClientPanel />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
