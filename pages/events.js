import { useState } from "react";
import { useRouter } from "next/router";

const Events = ({ eventList }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [events, setEvents] = useState(eventList);
  const router = useRouter();
  const fetchSportsEvents = async () => {
    const response = await fetch(
      "http://localhost:4000/events?category=sports"
    );
    const data = await response.json();
    setEvents(data);
    setIsLoading(false);

    router.push("/events?category=sports", undefined, { shallow: true });
  };

  return (
    <>
      <button onClick={fetchSportsEvents}>Sports Events</button>
      <h2>List of Events</h2>
      {events.map((event) => {
        return (
          <div key={event.id}>
            <h2>
              {event.id} {event.title} {event.date} {event.category}
            </h2>
            <p>{event.description}</p>
            <hr />
          </div>
        );
      })}
    </>
  );
};
export default Events;

export async function getServerSideProps(context) {
  const { category } = context.query;
  const queryString = category ? `?category=${category}` : "";
  const response = await fetch(`http://localhost:4000/events${queryString}`);
  const data = await response.json();
  return {
    props: {
      eventList: data,
    },
  };
}
