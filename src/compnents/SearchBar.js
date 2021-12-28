import React,{useState} from 'react'

const Searchbar = () => {
    const [students,setstudents]=useState(0);
    const addstudent=()=>{
        setstudents(students+1);
    }
    const removestudent=()=>{
        setstudents(students-1);
    }
    return (
        <div className="app">
            <p>No. of students in {students}</p>
            <button className="btn btn-outline-primary ml-5 " style={{Backgroundcolor:'blue'}} onClick={addstudent}>Add a student</button>
            <button className="btn btn-primary ml-5" disabled={false} onClick={removestudent}>Remove a student</button>
        </div>
    )
}

export default Searchbar
