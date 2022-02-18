import React, { useState } from "react";

export function EventList() {
  const [events, setevents] = useState([
    {
      title: "This is a event",
      id: 1,
    },
    {
      title: "This is an another event",
      id: 2,
    },
    {
      title: "This is a completely different event",
      id: 3,
    },
  ]);

  const deleteEvent = (id) => {
    setevents(
      events.filter((events) => {
        return id !== events.id;
      })
    );
  };

  return (
    <div>
      <div>
        {events.map((events, index) => (
          <React.Fragment key={events.id}>
            <h3>
              {events.id} - {events.title}
            </h3>
            <button onClick={() => deleteEvent(events.id)}>Delete this event</button>
          </ React.Fragment>
        ))}
      </div>
    </div>
  );
}
