import "./App.css";
import Title from "./components/Title";
import { EventList } from "./components/EventList";
import { Modal } from "./components/Modal";
import { useState } from "react";

function App() {
  const subTitle = "This is a prop subtitle";
  const [modal, setmodal] = useState(false);

  const [events, setevents] = useState([]);
  const handleClose = () => {
    setmodal(false);
  };

  const addEvent = (events) => {
    setevents((prevEvents) => {
      return [...prevEvents, events];
    });
  };

  return (
    <div className="App">
      <Title title="This is a prop title" subtitle={subTitle} />
      <Title title="This is a second prop title" subtitle="This is second prop subtitle" />
      <Title title="This is a third prop title" subtitle="This is third prop subtitle" />
      <EventList events={events} setevents={setevents} />
      {modal && (
        <Modal handleClose={handleClose} addEvent={addEvent}>
          <h2>Lorem</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed elit tortor, vestibulum at cursus congue,
            sodales a risus. Nunc finibus vel nulla et gravida. Nullam non ligula varius, condimentum nunc vitae,
            molestie felis. Mauris feugiat rhoncus suscipit. Phasellus mattis cursus nisl vel dapibus. Fusce id tempor
            leo. Suspendisse gravida dui diam, sed malesuada urna tincidunt vitae. Nulla ut pharetra nunc, eu rhoncus
            lorem. Nullam at ex ultricies, lacinia felis non, fermentum velit. Ut cursus sapien nunc, quis egestas
            libero tempor at. Nulla justo quam, efficitur a laoreet vel, euismod et felis. Ut ac consectetur nisi, vel
            volutpat diam. Suspendisse vel dolor eu quam condimentum suscipit. Curabitur laoreet lorem sit amet ante
            finibus, ac venenatis quam dignissim.
          </p>
        </Modal>
      )}
      <button onClick={() => setmodal(true)}>Show Modal</button>
    </div>
  );
}

export default App;
