import React, {useState, useEffect} from "react"
import ScheduleCard from "../components/scheduleCard/ScheduleCard"
import Modal from "react-modal"
import { Icon } from '@iconify/react';
import "./style.css"
import { Schedulex } from "./MockData.js";


function Schedule () {

    const [date, setDate] = useState("");
    const [duration, setDuration] = useState("60");
    const [calories, setCalories] = useState("120")
    const [success, setSuccess] = useState("");
    // 
    const [user, setUser] = useState("");
    const [exerciseType, setExerciseType] = useState("");
    const [exerciseType1, setExerciseType1] = useState("");
    const [exerciseType2, setExerciseType2] = useState("");

    const [bodyPart, setBodyPart] = useState("");
    

    useEffect(() => {
        // Load schedules from JSON file on component mount
        console.log(Schedulex);
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
            user: user,
            bodyPart: bodyPart,
            calories: parseInt(calories)
        };
    
        setSchedules([...schedules, newSchedule]);    
        console.log(Schedulex)
        
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

    const [schedules, setSchedules] = useState(Schedulex)

    return (
        <div className="flex-row-center">
        <div className="container-m">
            <div className="schedule-top">
                <p className="black" style={{fontWeight:"500"}}>SCHEDULE</p>
                <div className="btn-xs" onClick={openModal}>New Schedule</div>
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
                            <ScheduleCard key={schedule._id} id={schedule._id} date={dateFormatted} time={timeFormatted} user={schedule.user} bodyPart = {schedule.bodyPart} calories = {schedule.calories}/>
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
                    <h2 ref={_subtitle => (subtitle = _subtitle)} className="black" style={{fontWeight:"500"}}>Add Schedule</h2>
                    <div className="btn-close" onClick={closeModal}><Icon  icon="carbon:close-filled" color="black" /></div>
                </div>
                <form className="modal-body" onSubmit={newSchedule}>
                    <div className="flex-row" style={{height:"100%"}}>
                        <div className="flex-column">
                            <label className="black" style={{fontWeight:"500"}}>Date</label>
                            <input type="datetime-local" name="date" id="date" className="input" value={date} onChange={(e) => setDate(e.target.value)}/>
                        </div>
                    </div>
                    <div className="flex-row" style={{height:"100%"}}>
                        <div className="flex-column">
                            <label className="black" style={{fontWeight:"500"}}>Duration (minutes)</label>
                            <input type="number" name="duration" id="duration" className="input" placeholder="60" value={duration} onChange={(e) => setDuration(e.target.value)}/>
                        </div>
                    </div>
                    <div className="flex-row" style={{height:"100%"}}>
                        <div className="flex-column">
                            <label className="black" style={{fontWeight:"500"}}>Calories</label>
                            <input type="number" name="calories" id="calories" className="input" placeholder="120" value={calories} onChange={(e) => setCalories(e.target.value)}/>
                        </div>
                    </div>
                    {/* i want to add the input for the users name */}
                    <div className="flex-row" style={{height:"100%"}}>
                        <div className="flex-column">
                            <label className="black" style={{fontWeight:"500"}}>User</label>
                            <input type="text" name="user" id="user" className="input" placeholder="User" value={user} onChange={(e) => setUser(e.target.value)}/>
                        </div>
                    </div>
                    <div className="flex-row" style={{height: "100%"}}>
                        <div className="flex-column">
                            <label className="black" style={{fontWeight: "500"}}>Body Part</label>
                            <select name="bodyPart" id="bodyPart" className="input" value={bodyPart} onChange={(e) => setBodyPart(e.target.value)}>
                            <option value="">Select body part</option>
                            <option value="Leg">Leg</option>
                            <option value="Chest">Chest</option>
                            <option value="Back">Back</option>
                            <option value="Shoulder">Shoulder</option>
                            <option value="Biceps">Biceps</option>
                            <option value="Triceps">Triceps</option>
                            <option value="Core">Core</option>
                            {/* Add more options for other exercise types */}
                            </select>
                        </div>
                    </div>
                    <div className="flex-row" style={{height: "100%"}}>
                        <div className="flex-column">
                            <label className="black" style={{fontWeight: "500"}}>Exercise 1</label>
                            <select name="exerciseType" id="exerciseType" className="input" value={exerciseType} onChange={(e) => setExerciseType(e.target.value)}>
                            <option value="">Select exercise</option>
                            <option value="Leg">Bench Press</option>
                            <option value="Chest">Push-ups</option>
                            <option value="Back">Lat Pulldown</option>
                            <option value="Shoulder">Back extension</option>
                            <option value="Biceps">Bicep Curl</option>
                            <option value="Triceps">Bench dips</option>
                            <option value="Core">Skull Crushers</option>
                            <option value="Cardio">Plank</option>

                            {/* Add more options for other exercise types */}
                            </select>
                        </div>
                    </div>
                    <div className="flex-row" style={{height: "100%"}}>
                        <div className="flex-column">
                            <label className="black" style={{fontWeight: "500"}}>Exercise 2</label>
                            <select name="exerciseType1" id="exerciseType1" className="input" value={exerciseType1} onChange={(e) => setExerciseType1(e.target.value)}>
                            <option value="">Select exercise</option>
                            <option value="Leg">Bench Press</option>
                            <option value="Chest">Push-ups</option>
                            <option value="Back">Lat Pulldown</option>
                            <option value="Shoulder">Back extension</option>
                            <option value="Biceps">Bicep Curl</option>
                            <option value="Triceps">Bench dips</option>
                            <option value="Core">Skull Crushers</option>
                            <option value="Cardio">Plank</option>
                            
                            {/* Add more options for other exercise types */}
                            </select>
                        </div>
                    </div>    
                    <div className="modal-bottom">
                        <input type="submit" value="Add" className="btn-xs"  />
                    </div>

                </form>
            </Modal>
        </div>
        </div>
    )
    }

export default Schedule