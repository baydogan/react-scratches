import "./Modal.css";
import { useState } from "react";
import ReactDOM from "react-dom";

export function Modal({ children, handleClose, addEvent }) {
  const [title, settitle] = useState("");
  const [date, setdate] = useState("");

  const resetForm = () => {
    settitle("");
    setdate("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const eventList = {
      title: title,
      date: date,
      id: Math.floor(Math.random() * 5000),
    };
    addEvent(eventList);
    resetForm();
    handleClose()
  };

  return ReactDOM.createPortal(
    <div className="modal-backdrop">
      <div
        className="modal"
        style={{
          border: "4px solid",
          borderColor: "#ff4500",
          textAlign: "center",
          color: "#8b9bac",
        }}
      >
        {children}
        <form onSubmit={handleSubmit}>
          <label>
            <span>Title:</span>
            <input type="text" value={title} onChange={(e) => settitle(e.target.value)} />
          </label>
          <label>
            <span>Date:</span>
            <input type="date" value={date} onChange={(e) => setdate(e.target.value)} />
          </label>
          <button>Submit</button>
        </form>

        <p>
          <span>Date: </span>
          {date}
        </p>
        <p>
          <span>Title: </span>
          {title}
        </p>
        <p onClick={resetForm}>Reset form</p>
        <hr />
        <button onClick={handleClose}>Close</button>
      </div>
    </div>,
    document.body
  );
}
