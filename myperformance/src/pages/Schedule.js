import React, {useState, useEffect} from "react"
import ScheduleCard from "../components/scheduleCard/ScheduleCard"
import Modal from "react-modal"
import { Icon } from '@iconify/react';
import "./style.css"


function Schedule () {

    const [date, setDate] = useState("");
    const [duration, setDuration] = useState("60");
    const [success, setSuccess] = useState("");
    const [loggedUser, setUser] = React.useState("");
    

    useEffect(() => {
        // Load schedules from JSON file on component mount
        const fetchSchedules = async () => {
          try {
            const response = await fetch("schedules.json");
            const data = await response.json();
            setSchedules(data.schedule);
          } catch (error) {
            console.log("Error fetching schedules:", error);
          }
        };
    
        fetchSchedules();
      }, []);
    
      async function newSchedule(event) {
        event.preventDefault();
    
        // If no user is logged in, redirect to login page
    
        console.log(date, duration);
    
        // Create new schedule object
        const newSchedule = {
          _id: Date.now(),
          date: new Date(date),
          duration: parseInt(duration),
          username: loggedUser.username,
        };
    
        // Update schedules state with new schedule
        setSchedules([...schedules, newSchedule]);
    
        // Simulate successful response
        setSuccess(true);
    
        // Simulate saving new schedule to JSON file (you can use an API endpoint here instead)
        try {
          const response = await fetch("schedules.json", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ schedule: [...schedules, newSchedule] }),
          });
          if (!response.ok) {
            console.log("Error saving new schedule");
          }
        } catch (error) {
          console.log("Error saving new schedule:", error);
        }
    
        // Simulate redirect after successful response
        setTimeout(() => {
          window.location.href = "/Schedule";
        }, 2000);
      }
    

    let subtitle
    Modal.setAppElement('#root');

    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        // Check if user is logged in
    
        setIsOpen(true);
    }
    
    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#231F20';
    }
    
    function closeModal() {
        setIsOpen(false);
    }

    const [schedules, setSchedules] = useState([])

    useEffect(() => {
        // Simulate API call and update schedule data
        const mockData = [
            { _id: 1, date: new Date(), duration: 60, username: "John" },
            { _id: 2, date: new Date(), duration: 90, username: "Jane" },
        ];
        setSchedules(mockData);
    }, []);

    

    return (
        <div className="flex-row-center">
        <div className="container-m">
            <div className="schedule-top">
                <p className="black" style={{fontWeight:"500"}}>SCHEDULE</p>
                <div className="btn-xs" onClick={openModal}>Adicionar novo</div>
            </div>
            <div className="schedule-table">
                {
                    schedules.map((schedule) => {
                    // Transform date into a more readable format
                        const date = new Date(schedule.date)
                        const dateFormatted = date.getDate() + " " + date.toLocaleString('default', { month: 'long' }) + " " + date.getFullYear()
                        // Sum startTime with duration to get endTime
                        const endTime = new Date(date.getTime() + schedule.duration*60000)
                        const timeFormatted = date.getHours() + ":" + String(date.getMinutes()).padStart(2, '0') + "-" + endTime.getHours() + ":" + String(endTime.getMinutes()).padStart(2, '0')

                        return (
                            <ScheduleCard key={schedule._id} id={schedule._id} date={dateFormatted} time={timeFormatted} user={schedule.username} />
                        )
                    })
                }
            </div>
            <div className="schedule-bottom">
                <div className="btn-add" onClick={openModal}></div>
            </div>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                className="modal"
                contentLabel="Modal"
            >
                <div className="modal-header">
                    <h2 ref={_subtitle => (subtitle = _subtitle)} className="black" style={{fontWeight:"500"}}>Adicionar Horário</h2>
                    <div className="btn-close" onClick={closeModal}><Icon  icon="carbon:close-filled" color="black" /></div>
                </div>
                <form className="modal-body" onSubmit={newSchedule}>
                    <div className="flex-row" style={{height:"100%"}}>
                        <div className="flex-column">
                            <label className="black" style={{fontWeight:"500"}}>Data</label>
                            <input type="datetime-local" name="date" id="date" className="input" value={date} onChange={(e) => setDate(e.target.value)}/>
                        </div>
                    </div>
                    <div className="flex-row" style={{height:"100%"}}>
                        <div className="flex-column">
                            <label className="black" style={{fontWeight:"500"}}>Duração (minutos)</label>
                            <input type="number" name="duration" id="duration" className="input" placeholder="60" value={duration} onChange={(e) => setDuration(e.target.value)}/>
                        </div>
                    </div>
                    <div className="modal-bottom">
                        <input type="submit" value="Adicionar" className="btn-xs" />
                        <p className={success === true ? "success-txt" : "error-txt"}></p>
                    </div>

                </form>
            </Modal>
        </div>
        </div>
    )
    }

export default Schedule