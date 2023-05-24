import React, { useEffect, useState } from "react";
import "./style.css";
import { FaTrashAlt } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';
import { FaEdit } from 'react-icons/fa';


const ScheduleCard = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedScheduleId, setSelectedScheduleId] = useState("");
  


  const handleDelete = () => {
    // Perform deletion logic here using selectedScheduleId
    console.log(`Deleting schedule with id ${selectedScheduleId}`);
    setShowModal(false);
    // Simulating a successful schedule removal
    setTimeout(() => {
      window.location.reload();
    }, 500);
  };

  const openModal = (id) => {
    setSelectedScheduleId(id);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const date = props.date;
  const time = props.time;
  const user = props.user;
  const exerciseType = props.exerciseType;
  const bodyPart = props.bodyPart;
  const calories = props.calories;
  const id = props.id;

  return (
    <div className="card-schedule" id={id}>
      <div className="text-box">
        <p className="black schedule-title">{date}</p>
        <p className="black schedule-description">{time}</p>
      </div>
      <div className="text-box">
        <p className="black schedule-title">User</p>
        <p className="black schedule-description">{user}</p>
      </div>
      <div className="text-box">
        <p className="black schedule-title">Body Part</p>
        <p className="black schedule-description">{bodyPart}</p>
      </div>
      <div className="text-box">
        <p className="black schedule-title">Calories</p>
        <p className="black schedule-description">{calories}</p>
      </div>

      <button className="delete-button" onClick={() => openModal(id)}>
        <FaTrashAlt />
      </button>
      {/* <button className="edit-button" onClick={() => openModal(id)}>
        <FaEdit />
      </button> */}
      
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h3>Confirm Deletion</h3>
            <p>Are you sure you want to delete this schedule?</p>
            <div className="modal-buttons">
              <button className="cancel-button" onClick={closeModal}>
                <FaTimes />
              </button>
              <button className="delete-button" onClick={handleDelete}>
                <FaTrashAlt />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ScheduleCard