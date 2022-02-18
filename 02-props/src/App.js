import "./App.css";
import Title from "./components/Title";
import { EventList } from "./components/EventList";

function App() {
  const subTitle = "This is a prop subtitle";
  return (
    <div className="App">
      <Title title="This is a prop title" subtitle={subTitle} />
      <Title title="This is a second prop title" subtitle="This is second prop subtitle" />
      <Title title="This is a third prop title"  subtitle="This is third prop subtitle"/>
      <EventList />
    </div>
  );
}

export default App;
