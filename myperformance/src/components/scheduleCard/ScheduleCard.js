import React, { useEffect } from "react";
import "./style.css";

const ScheduleCard = (props) => {
  const [loggedUser, setUser] = React.useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      // Simulating a successful login
      setTimeout(() => {
        setUser({ username: "JohnDoe" });
      }, 2000); // Simulating a delay of 2 seconds
    }
  }, []);

  async function removeSchedule() {
    // Get username from logged in user
    const username = loggedUser.username;

    // Get all inputs from doc and check which one is checked
    const inputs = document.querySelectorAll("input");
    let checked = [];
    inputs.forEach((input) => {
      if (input.checked) {
        checked.push(input);
      }
    });
    // Get value from checked input
    const scheduleId = checked[0].value;

    console.log(scheduleId);

    // Simulating a successful schedule removal
    setTimeout(() => {
      window.location.reload();
    }, 500);
  }

  const date = props.date;
  const time = props.time;
  const user = props.user;
  const id = props.id;

  return (
    <div className="card-schedule" id={id}>
      <div className="text-box">
        <p className="black schedule-title">{date}</p>
        <p className="black schedule-description">{time}</p>
      </div>
      <div className="text-box">
        <p className="black schedule-title">USER</p>
        <p className="black schedule-description">{user}</p>
      </div>
      <form className="checkbox-container" onChange={removeSchedule}>
        <input className="checkbox" type="checkbox" id="check" name="check" value={id} />
      </form>
    </div>
  );
};

export default ScheduleCard;