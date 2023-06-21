import Header from '../components/Header/Header';
import Events from '../components/Events/Events';

function EventsPage() {
  const isLogged = false;
  return (
    <>
      <Header isLogged={isLogged}/>
      <Events />
    </>
  );
}

export default EventsPage;
