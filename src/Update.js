import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
const Update = () => {
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [email, setMail] = useState("");
    const sub=useNavigate();
    useEffect(() => {
        setId(localStorage.getItem("Id"));
        setName(localStorage.getItem("Name"));
        setMail(localStorage.getItem("Email"));
    })

    const handleSubmit = (e) => {
        e.preventDefault();
       
        console.log("clciekd");
        axios.put(`https://63105ae4826b98071a3ef0e9.mockapi.io/CRUD/${id}`,{
            name:name,
            email: email,
        })
        .then(()=>{
            sub('/read');
        })
      


    };
    return (
        <>
            <div className="d-flex justify-content-between m-2">
                <h2>Update</h2>

            </div>
            <form>
            <div className="mb-3">
                    <label className="form-label">ID</label>
                    <input
                        type="text"
                        className="form-control"
                        defaultValue={id}
                        onChange={(e) => setId(e.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input
                        type="email"
                        defaultValue={name}
                        className="form-control"
                        aria-describedby="emailHelp" />
                </div>

                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input
                        type="email"
                        defaultValue={email}
                        className="form-control"
                        aria-describedby="emailHelp" />
                </div>
                <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={handleSubmit}
                >
                    Update
                </button>
            </form>
        </>
    );

}
export default Update;