import React, { useState, useEffect, useRef } from 'react';
import axios from '../axios';
import st from './style.module.css';
import { Random } from "react-animated-text";
import { GrMapLocation } from "react-icons/gr";
import { FaPhone } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import Navbar from "./global-components/navbar-v5"
import Footer from './global-components/footer-v2'
import { Link } from 'react-router-dom';

const Fun = () => {
    const [busnumber, setBusNumber] = useState(0);
    const [subject, setSubject] = useState('');
    const [describe, setDescribe] = useState('');
    const [isEditing, setIsEditing] = useState(true);
    const [showPreview, setShowPreview] = useState(false);
    const animationRef = useRef(null);

    useEffect(() => {
        animationRef.current = true;
    }, []);

    const HandleChange = (event) => {
        const { name, value } = event.target;
        if (name === 'subject') setSubject(value);
        if (name === 'busnumber') setBusNumber(value);
        if (name === 'describe') setDescribe(value);
    };

    const HandleSubmit = () => {
        if (busnumber === 0 || subject === '' || describe === '') {
            return alert("Please fill all the details");
        }
        setShowPreview(true);
        setIsEditing(false);
    };

    const handleEdit = () => {
        setShowPreview(false);
        setIsEditing(true);
    };

    const handleFinalSubmit = () => {
        var data = {
            busNumber: busnumber,
            subject: subject,
            description: describe
        };

        // axios.post("http://localhost:9001/com", data)
        axios.post("/com", data)
            .then(res => {
                console.log(res);
                alert("Complaint submitted successfully!");
                setBusNumber(0);
                setSubject('');
                setDescribe('');
                setShowPreview(false);
                setIsEditing(true);
            })
            .catch(err => {
                console.error(err);
                alert("There was an error submitting your complaint.");
            });
    };

    return (
        <>
            <Navbar/>
            <div className={st.main}>
                <div className={st.hesitate}>
                    <div className={st.exampleStyle}>
                        {!animationRef.current && (
                            <Random
                                text="Don't Hesitate To Contact Us"
                                effect="verticalFadeIn"
                                effectChange={2}
                                effectDirection="up"
                                iterations={1}
                                onAnimationComplete={() => {
                                    animationRef.current = true;
                                }}
                            />
                        )}
                        {animationRef.current && (
                            <span>Don't Hesitate To Contact Us</span>
                        )}
                    </div>
                    <div className={st.DC}>
                        Sed ut perspiciatis unde omnis iste natus erro voluptat accusantium
                        doloremque laudantium totam rem aperiam eaque
                    </div>
                    <div className={st.div}>
                        <div className={st.sub}>
                            <div className={st.i}><GrMapLocation /></div>
                            <div className={st.h}>Address :</div>
                            <div className={st.m8}>
                                Transport Department,<br /> Vishweswerao Bhavan
                            </div>
                        </div>
                        <div className={st.sub}>
                            <div className={st.i}><FaPhone /></div>
                            <div className={st.h}>Contact :</div>
                            <div className={st.m}>455647878212115</div>
                        </div>
                        <div className={st.sub}>
                            <div className={st.i}><MdOutlineEmail /></div>
                            <div className={st.h}>Support :</div>
                            <div className={st.m}>TransportSupport@gmail.com</div>
                        </div>
                    </div>
                    <div className={st.butdiv}>
                        <div className={st.animated_button1}>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            
                            <Link to="/complaint3">Learn More</Link>
                        </div>
                    </div>
                </div>
                <div className={st.hesitate2}>
                    <div className={st.exampleStyle2}>
                        {!animationRef.current && (
                            <Random
                                text="Raise Complaint"
                                effect="verticalFadeIn"
                                effectChange={2}
                                effectDirection="up"
                                iterations={1}
                                onAnimationComplete={() => {
                                    animationRef.current = true;
                                }}
                            />
                        )}
                        {animationRef.current && (
                            <span>Raise Complaint</span>
                        )}
                    </div>
                    <div className={st.DC}>
                        Sed ut perspiciatis unde omnis iste natus erro voluptat accusantium
                        doloremque laudantium totam rem aperiam eaque
                    </div>
                    <div className={st.div}>
                        <div className={st.sub2}>
                            <input 
                                type="text" 
                                placeholder="Subject" 
                                name='subject' 
                                onChange={HandleChange} 
                                value={subject} 
                                required 
                            />
                        </div>
                        <div className={st.sub2}>
                            <input 
                                type="number" 
                                placeholder="Bus Number" 
                                name='busnumber' 
                                onChange={HandleChange} 
                                // value={busnumber} 
                                required 
                            />
                        </div>
                        <div className={st.sub2}>
                            <textarea 
                                placeholder="Description" 
                                name='describe' 
                                onChange={HandleChange} 
                                value={describe} 
                            />
                        </div>
                    </div>
                    <div className={st.butdiv2}>
                        <button className={st.button} onClick={HandleSubmit}>
                            Submit
                        </button>
                    </div>
                </div>

                {/* Preview Overlay */}
                {showPreview && (
                   <div className={st.previewOverlay}>
                   <div className={st.previewBox}>
                       <h3>Preview</h3>
                       <div className={st.previewContent}>
                           <div className={st.previewItem}>
                               <strong>Subject:</strong>
                               <p>{subject}</p>
                           </div>
                           <div className={st.previewItem}>
                               <strong>Bus Number:</strong>
                               <p>{busnumber}</p>
                           </div>
                           <div className={st.previewItem}>
                               <strong>Description:</strong>
                               <p>{describe}</p>
                           </div>
                       </div>
                       <button onClick={handleEdit} className={st.editButton}>Edit</button>
                       <button onClick={handleFinalSubmit} className={st.submitButton}>Confirm Submission</button>
                   </div>
               </div>
               
               
                )}
            </div>
            <Footer/>
        </>
    );
};

export default Fun;