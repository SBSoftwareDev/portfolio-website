import React, { useState } from "react";
import styles from './leavenote.module.css';

export default function Sandbox() {
    const [input, setInput] = useState({
        name: '', 
        email: '',
        phone: '',
        note: ''
    });

    function handleChange(event) {
        setInput(prevInput => {
            return ({
                ...prevInput,
                [event.target.id]: event.target.value,
            });
        });
    }

    return (
        <div className={styles.leaveNote}>
            <div className={styles.leaveNoteHeader}>
                <h2>Reach out to me!</h2>
                <p>If you would like leave me a note, have something to say,
                     <sup className='superText'>or want to offer me a job</sup> please do so!</p>
            </div>

            <div className={styles.noteInputs}>
                <div>
                    <label htmlFor="name">Name: </label>
                    <input 
                        type="text" 
                        name="name"
                        id="name"
                        required
                        value={input.name}
                        onChange={handleChange}
                        maxLength={31}
                        size={20}
                    />
                </div>

                <div>
                    <label htmlFor="email">Contact E-mail: </label>
                    <input 
                        type="email" 
                        name="email"
                        id="email"
                        required
                        value={input.email}
                        onChange={handleChange}
                        maxLength={31}
                        size={20}
                    />
                </div>

                <div>
                    <label htmlFor="phone">Phone Number: </label>
                    <input 
                        type="tel" 
                        name="phone"
                        id="phone"
                        value={input.phone}
                        onChange={handleChange}
                        maxLength={20}
                        size={20}
                    />
                </div>

            </div>

            <label htmlFor="note">Note: </label>
            <textarea 
                name="note"
                id="note"
                required
                value={input.note}
                onChange={handleChange}
                placeholder="Leave a message..."
                maxLength={999}
                rows={7}
                cols={60}
                className={styles.noteField}
            />
        </div>
    );
}