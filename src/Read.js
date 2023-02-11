import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

const Read = () => {
    const [data, setdata] = useState([]);
    const [inputtext, setinputtext] = useState("");
    const sub = useNavigate();
    const inputhandle = (e) => {
        setinputtext(e.target.value.toLowerCase());
    }
    function delete_data(id) {
        console.log(id + ".......");
        axios.delete(`https://63105ae4826b98071a3ef0e9.mockapi.io/CRUD/${id}`)
            .then(() => { getData(); });
    }
    function getData() {
        axios.get('https://63105ae4826b98071a3ef0e9.mockapi.io/CRUD').then((res) => {


            setdata(res.data);


        })
    }
    const update_data = (id, name, mail) => {
        console.log(id);

        localStorage.setItem("Id", id)
        localStorage.setItem("Name", name)
        localStorage.setItem("Email", mail)
        sub('/update');
    }


    useEffect(() => {
        getData();
    }, [])
    console.log(data);
    return (
        <>
            <table className="table">
                <thead>

                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Mail</th>

                        <th scope="col"></th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                {
                    data.map((eachdata, index) => {

                        return (
                            <>
                                <tbody>
                                    <tr>
                                        <th scope="row">{index + 1}</th>
                                        <td>{eachdata.name}</td>
                                        <td>{eachdata.email}</td>

                                        <td><button type="button" className="btn-success" onClick={() => update_data(eachdata.id, eachdata.name, eachdata.email)}>Edit</button> </td>
                                        <td><button type="button" className="btn btn-primary" onClick={() => delete_data(eachdata.id)}>Delete</button> </td>
                                    </tr>

                                </tbody>


                            </>
                        )
                    }
                    )

                }



            </table>
        </>
    );
};

export default Read;