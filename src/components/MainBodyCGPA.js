import React,{useState} from "react";
import FinalCGPA from "./FinalCGPA";
import Semi from "./Semi";
import GradingGuide from "./GradingGuide";
import { useNavigate } from "react-router-dom";
export default function MainBodyCGPA(){
    const navigate = useNavigate();
    const [semesters,setSemesters] = useState([]);
    const addSemester = (newSem)=>{
        setSemesters([...semesters,{...newSem, id:Date.now()}])
    }
    const deleteSemester = (id)=>{
        setSemesters(semesters.filter((c)=>c.id !==id))
    }
    const updateSemester = (id,field,value) =>{
        setSemesters(semesters.map((c)=>(c.id === id ? {...c,[field]:value}:c)),);
    }
    const totalCredits = semesters.reduce(
        (sum,c)=> sum + Number(c.credits||0),0,
    );
    const totalPoints = semesters.reduce(
        (sum,c )=> sum+Number(c.grade || 0)*Number(c.credits||0),0,
    );
    const cgpa = totalCredits >0 ?(totalPoints/totalCredits).toFixed(2):"0.00";
    return(
        <div 
            className="container py-5"
            style={{ minHeight: "100vh", backgroundColor: "#e8e9ea" }}
            >
                <div className="text-center mb-5">
                    <h2 style={{ fontWeight: "800", color: "#1a202c" }}>
                    <span style={{ color: "#6366f1" }}>🎓</span> CGPA Calculator
                    </h2>
                    <p className="text-secondary" style={{fontSize:"15px"}}>
                    Track your semesters and calculate your CGPA
                    </p>
                    <button className="btn btn-sm btn-outline-primary mt-2"
                    onClick={() =>
                        navigate("/")}
                    >
                        Switch to GPA Calculator
                    </button>
                </div>
                <FinalCGPA gpa = {cgpa} totalCredits={totalCredits}/>
                <Semi onAdd ={addSemester}/>
                <div
                    className="card shadow-sm border-0"
                    style={{ borderRadius: "15px", overflow: "hidden" }}
                >
                    <table className="table table-hover mb-0">
                <thead className="table-light">
                    <tr>
                    <th className="ps-4">Semester Number</th>
                    <th>Credits</th>
                    <th>Grade Point</th>
                    <th className="text-end pe-4">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {semesters.map((c) => (
                    <tr key={c.id}>
                        <td className="ps-4">
                        <input
                            className="form-control form-control-sm border-0 bg-transparent"
                            value={c.number}
                            onChange={(e) => updateSemester(c.id, "name", e.target.value)}
                        />
                        </td>
                        <td>
                        <input
                            type="number"
                            className="form-control form-control-sm border-0 bg-transparent"
                            value={c.credits}
                            onChange={(e) =>
                            updateSemester(c.id, "credits", e.target.value)
                            }
                            style={{ width: "60px" }}
                        />
                        </td>
                        <td>
                        <input
                            type="number"
                            className="form-control form-control-sm border-0 bg-transparent"
                            value={c.grade}
                            onChange={(e) =>
                            updateSemester(c.id, "grade", e.target.value)
                            }
                            style={{ width: "80px" }}
                        />
                        </td>
                        <td className="text-end pe-4">
                        <button
                            className="btn btn-sm btn-outline-danger border-0"
                            onClick={() => deleteSemester(c.id)}
                        >
                            <i className="fa-solid fa-trash-can"></i>
                        </button>
                        </td>
                    </tr>
                    ))}
                </tbody>
                </table>
                </div>
                    <GradingGuide/>
            </div>
    )
}   