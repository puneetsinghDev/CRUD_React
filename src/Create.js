import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';


const Create = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const sub=useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("clciekd");
        axios
            .post("https://63105ae4826b98071a3ef0e9.mockapi.io/CRUD", {
                name: name,
                email: email,
            })
            .then(()=>{
                sub('/read');
            })
       

    };

    return (
        <>
            <div className="d-flex justify-content-between m-2">
                <h2>Create</h2>

            </div>
            <form>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        aria-describedby="emailHelp"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={handleSubmit}
                >
                    Submit
                </button>
            </form>
        </>
    );
};

export default Create;