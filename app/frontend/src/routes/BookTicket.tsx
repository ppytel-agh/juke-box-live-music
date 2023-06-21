import Header from '../components/Header/Header';
import Events from '../components/Events/Events';
import EventDetails from '../components/EventDetails/EventDetails';
import EventForm from '../components/EventForm/EventForm';

function BookTicket() {
  const isLogged = false;
  return (
    <>
      <Header isLogged={isLogged} />
      <EventForm />
    </>
  );
}

export default BookTicket;
