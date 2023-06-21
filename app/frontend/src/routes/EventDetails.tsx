import Header from '../components/Header/Header';
import Events from '../components/Events/Events';
import EventDetails from '../components/EventDetails/EventDetails';

function Homepage() {
  const isLogged = false;
  return (
    <>
      <Header isLogged={isLogged} />
      <EventDetails />
    </>
  );
}

export default Homepage;
