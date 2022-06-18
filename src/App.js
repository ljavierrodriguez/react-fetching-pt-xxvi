import { useState } from "react";
import { FaEdit, FaTrash } from 'react-icons/fa';
import { ToastContainer, toast } from "react-toastify";

import './App.css';

const initialState = [
    { id: 1, name: 'John', lastname: 'Doe', gender: 'Male' },
    { id: 2, name: 'Jane', lastname: 'Doe', gender: 'Female' },
    { id: 3, name: 'Sarai', lastname: 'Santiago', gender: 'Female' },
]

const App = () => {
    // Number, String, Boolean, Undefined,  Object = Array, Null, Literal Object

    const [students, setStudents] = useState(initialState);
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [gender, setGender] = useState('Female');

    /* const saludo = () => {}

    const noRedirigir = evento => {
        evento.preventDefault();
    } */


    /* 
    const deleteStudentByPosition = (position) => {
        //console.log(position);
        const newStudents = [...students];
        newStudents.splice(position, 1);
        setStudents(newStudents);
    }
    */

    const getId = () => {
        let ids = students.map((s) => s.id);
        let max = Math.max(...ids); // extraer todos los id separados por coma // ejemplo: 1, 2, 3, 4 result: 4
        return max + 1;
    }

    const deleteStudentById = (id) => {
        //console.log(id);
        const result = students.filter((student) => student.id !== id);
        setStudents(result);
        toast('Estudiante Eliminado!')
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newStudents = students.concat({ id: getId(), name: name, lastname: lastname, gender: gender })
        setStudents(newStudents);
        setName('');
        setLastname('');
        setGender('Female');
        toast.success('Estudiante creado con exito!');
    }

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="text-center">App</h1>
                    </div>
                    <div className="col-md-12">
                        <table className="table table-bordered table-striped table-hover">
                            <thead className="table-primary">
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Lastname</th>
                                    <th colSpan={2} style={{ width: '10%' }}>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {students.map((student, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{student.id}</td>
                                            <td>{student.name}</td>
                                            <td>
                                                {student.lastname} {" "}
                                                {student.gender === 'Female' ? (
                                                    <span class="badge bg-success">{student.gender}</span>
                                                ) : (
                                                    <span class="badge bg-dark">{student.gender}</span>
                                                )}
                                            </td>
                                            <td>
                                                <button className="btn btn-info">
                                                    <FaEdit />
                                                </button>
                                            </td>
                                            <td>
                                                {/* <button className="btn btn-warning" onClick={() => deleteStudentByPosition(index)}>
                                                <FaTrash />
                                            </button> */}
                                                <button className="btn btn-danger" onClick={() => deleteStudentById(student.id)}>
                                                    <FaTrash />
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                        <button className="btn btn-primary" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                            Add Student
                        </button>
                    </div>

                    {/* <div className="col-md-12">
                    <button className="btn btn-primary" onClick={(evento) => {}}>
                        Saludar
                    </button>
                    <button className="btn btn-primary" onClick={(evento) => {
                        saludo(evento)
                    }}>
                        Saludar
                    </button>
                    <button className="btn btn-primary" onClick={(evento) => saludo(evento)}>
                        Saludar
                    </button>
                    <button className="btn btn-primary" onClick={saludo}>
                        Saludar
                    </button>
                    <a href="https://facebook.com" className="btn btn-success" onClick={(e) => noRedirigir(e, student)}>
                        Facebook
                    </a>
                </div> */}
                </div>
            </div>

            <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasExampleLabel">Add Student</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input type="text" className="form-control" id="name" placeholder="Insert Firstname" value={name} onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="lastname" className="form-label">Lastname</label>
                            <input type="text" className="form-control" id="lastname" placeholder="Insert Lastname" value={lastname} onChange={(e) => setLastname(e.target.value)} />
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked={gender === 'Male' ? true : false} onChange={() => setGender('Male')} />
                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                Male
                            </label>
                        </div>
                        <div className="form-check mb-3">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked={gender === 'Female' ? true : false} onChange={() => setGender('Female')} />
                            <label className="form-check-label" htmlFor="flexRadioDefault2">
                                Female
                            </label>
                        </div>
                        <div className="d-grid">
                            <button className="btn btn-primary gap-2">
                                Guardar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </>
    )
}

export default App;