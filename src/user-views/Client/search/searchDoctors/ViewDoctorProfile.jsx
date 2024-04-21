import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router';
import './viewDoctorProfile.css';
import axios from 'axios';
import CovidModal from './CovidModal';
import { doc } from 'firebase/firestore';

function ViewDoctorProfile(){
    const navigate = useNavigate(); 
    const location = useLocation();
    const doctor = location.state.doctor;
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleBookAppointment = () =>{
        setIsModalOpen(true);
    }
    const profileDetails = async () => {
        try { 
          const response = await axios.post('http://localhost:8000/profile_details/', { doctor });
        } catch (error) {
          console.error('Error:', error);
        }
      };
    const confirmBookAppointment = (isChecked) => {
        if(isChecked){
            navigate('/covid-questionnaire',{ state: {covidQuestionnaire: true}});
        }
        else{
            navigate('/book-appointment',{ state: {covidQuestionnaire: false}});
        }
    }


    const opentab = (tabname, event) => {
        var tablinks = document.getElementsByClassName("tab-links");
        var tabcontents = document.getElementsByClassName("tab-contents");
        for(let tablink of tablinks){
            tablink.classList.remove("active-link");
        }
        for(let tabcontent of tabcontents){
            tabcontent.classList.remove("active-tab");
        }
        event.currentTarget.classList.add("active-link");
        document.getElementById(tabname).classList.add("active-tab");
    }
    
    return(
        <div className="profile-page">
            <div className="main-card">
                <div className="profile-description">
                {doctor && (
                        <>
                            <img src={doctor.photoURL} alt={doctor.fullName} />
                            <h1 className="subtitle">{doctor.fullName}</h1>
                            <p>{doctor.specialization}</p>
                            
                        </>
                    )}
                </div>
                <div className="apointment-section">
                    <p>5 out of 5 stars (40 reviews)</p>
                    <p>Accepting new patients</p>
                    <p>Provides Covid Support: {doctor.covidSupport ? 'Yes':'No'}</p>
                    <button type="submit" onClick={handleBookAppointment}>Book An Appointment</button>
                </div>
            </div>

            <div className="details-container">
                <div className="tab-titles">
                    <p className="tab-links active-link" onClick={(event) => opentab('insurance', event)}>Insurance</p>
                    <p className="tab-links" onClick={(event) => opentab('location', event)}>Location</p>
                    <p className="tab-links" onClick={(event) => opentab('specialities', event)}>Hours</p>
                    <p className="tab-links" onClick={(event) => opentab('ratings_reviews', event)}>Ratings & Reviews</p>
                    
                </div>
                <div className="tab-contents active-tab" id="insurance">
                        <div className="detail-chart">
                            <h3>Accepted Insurance plans are: </h3>
                            <p>Aetna</p>
                            <p>Anthem</p>
                        </div>
                </div>   
                <div className="tab-contents" id="location">
                        <div className="detail-chart">
                            {/* <h3>Location</h3> */}
                            <p>{ doctor.location }</p>
                        </div>
                </div> 
                <div className="tab-contents" id="specialities">
                    <div className="detail-chart">
                        <h3>Hours</h3>
                        <p>Monday 10AM - 5PM</p>
                        <p>Tueday 10AM - 5PM</p>
                        <p>Thursday 10AM - 5PM</p>
                    </div>
                </div> 
                <div className="tab-contents" id="ratings_reviews">
                    <div className="detail-chart">
                        <p>5 out of 5 stars (40 reviews)</p>
                    </div>
                </div> 
            </div>       
            {isModalOpen && (
                <CovidModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    onConfirm={confirmBookAppointment}
                />
            )}
        </div>
    );

}
export default ViewDoctorProfile;