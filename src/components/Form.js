import React from 'react';
import { useForm, ValidationError } from "@formspree/react";
import './Form.css'
function ContactForm() {
    const [state, handleSubmit] = useForm("xqkvpqde");
    if (state.succeeded) {
         window.location.href = 'https://kdhandloomscheck2.vercel.app/';
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="name">
                    Name
                </label>

                <input
                    id="name"
                    type="text"
                    name="name"
                    required
                />
            </div>

            <div className="form-group">
                <label htmlFor="email">
                    Email Address
                </label>

                <input
                    id="email"
                    type="email"
                    name="email"
                    required
                />

            </div>

            <div className="form-group">
                <label htmlFor="gst">
                    GST Number (optional)
                </label>
                <input
                    id="gst"
                    type="text"
                    name="gst"
                />
            </div>
            <div className="form-group">
                <label htmlFor="phone">
                    Phone Number
                </label>

                <input
                    id="phone"
                    type="tel"
                    name="phone"
                    required
                />
            </div>

            <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
            />
            <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
            />
            <ValidationError
                prefix="Phone"
                field="phone"
                errors={state.errors}
            />

            <button type="submit" disabled={state.submitting} className='form-btn'>
                Submit
            </button>
        </form>
    );
}

const Form = () => {
    return (
        <div className="form-container">
            <h2>Please fill basic details to continue</h2>
            <ContactForm />
        </div>
    );
}

export default Form;
