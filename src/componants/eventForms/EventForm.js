import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './EventForm.css'; // Assuming you save the custom CSS in this file
import eventImage from '../../img/upload/event.png';


const EventForm = () => {
    return (
        <div className="wrapper">
            <div className="image-holder">
                    <img src={eventImage} alt="Event" />
                </div>
            <div className="inner animate__animated animate__fadeIn">
                <form>
                    <h3 className="text-center mb-4">Set The Event</h3>
                    <div className="form-wrapper form-price">
                        <label>Price</label>
                        <span>$270</span>
                    </div>
                    <div className="form-wrapper form-select">
                        <label>People</label>
                        <div className="form-holder">
                            <select className="form-control">
                                {[...Array(10).keys()].map(num => (
                                    <option key={num + 1} value={num + 1} className="option">
                                        {num + 1}
                                    </option>
                                ))}
                            </select>
                            <i className="fas fa-chevron-down"></i>
                        </div>
                    </div>
                    <div className="form-wrapper">
                        <label className="label-input">Name</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="form-wrapper">
                        <label className="label-input">Mail</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="form-wrapper">
                        <label className="label-input">Phone</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="form-wrapper">
                        <label className="label-comment">Comment</label>
                        <textarea className="form-control" style={{ height: '69px' }}></textarea>
                    </div>
                    <button type="submit">Send your booking</button>
                </form>
                
            </div>
        </div>
    );
};

export default EventForm;
