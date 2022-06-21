import { useContext, /* useEffect, useState */ } from "react";
import { ToastContainer, /* toast */ } from "react-toastify";

import './Home.css';
import Table from "../components/Table";
import { Context } from "../store/appContext";

/* const initialState = [
    { id: 1, name: 'John', lastname: 'Doe', gender: 'Male' },
    { id: 2, name: 'Jane', lastname: 'Doe', gender: 'Female' },
    { id: 3, name: 'Sarai', lastname: 'Santiago', gender: 'Female' },
] */

const initialState = [];

const Home = () => {
    // Number, String, Boolean, Undefined,  Object = Array, Null, Literal Object

    const { store, actions } = useContext(Context);

    const { deleteStudentById, handleChange, handleChangeRadio, handleSubmit } = actions;
    //const [url] = useState('https://3001-ljavierrodr-reactfetchi-d10ka9oxwl9.ws-us47.gitpod.io');
    //const [students, setStudents] = useState(initialState);
    /* const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [gender, setGender] = useState('Female'); */


    /* useEffect(() => {
        //getStudents();
    }, []) */

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

    /* const getId = () => {
        let ids = students.map((s) => s.id);
        let max = Math.max(...ids); // extraer todos los id separados por coma // ejemplo: 1, 2, 3, 4 result: 4
        return max + 1;
    } */

    /* const deleteStudentById = (id) => {
        //console.log(id);
        const result = students.filter((student) => student.id !== id);
        setStudents(result);
        toast('Estudiante Eliminado!')
    } */

    /* const handleSubmit = (e) => {
        e.preventDefault();
        const newStudents = students.concat({ id: getId(), name: name, lastname: lastname, gender: gender })
        setStudents(newStudents);
        setName('');
        setLastname('');
        setGender('Female');
        toast.success('Estudiante creado con exito!');
    } */

    /* const getUsersAsync = async () => {
        try {

            const response = await fetch(`${url}/users`);
            const data = await response.json();
            //console.log(data);
            setStudents(data);

        } catch (error) {
            console.log(error)
        }
    } */

    /* const getStudents = () => {
        fetch(`${url}/users`)
            .then((response) => response.json())
            .then((data) => {
                //if(data.length < 5) throw new Error("Numero de estudiantes invalido!");
                setStudents(data)

            })
            .catch((error) => {
                console.log(error)
            })
    } */

    /* const insertStudent = (student) => {
        fetch(`${url}/users`, {
            method: 'POST',
            body: JSON.stringify(student),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((response) => response.json())
            .then((data) => {

                if (data.id) {
                    getStudents();
                } else {
                    throw new Error('Ha ocurrido un error!')
                }

            })
            .catch((error) => {
                console.log(error)
            })
    }

    const insertStudentAsync = async (student) => {
        try {
            const response = await fetch(`${url}/users`, {
                method: 'POST',
                body: JSON.stringify(student),
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            const data = await response.json();

            if (data.id) {
                getStudents();
            } else {
                throw Error('Ha ocurrido un error!')
            }

        } catch (error) {
            console.log(error)
        }
    } */

    /* const deleteStudentById = (id) => {
        fetch(`${url}/users/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((response) => response.json())
            .then(() => {

                getStudents();

            })
            .catch((error) => {
                console.log(error)
            })
    }

    const deleteStudentByIdAsync = async (id) => {
        try {
            const response = await fetch(`${url}/users/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            if (response.status === 200) {
                getStudents();
            }
        } catch (error) {
            console.log(error)
        }
    } */


    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="text-center">App</h1>
                    </div>
                    <div className="col-md-12">
                        <Table students={store?.students} deleteStudentById={deleteStudentById} />
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
                            <input type="text" className="form-control" name="name" placeholder="Insert Firstname" value={store?.name} onChange={(e) => handleChange(e)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="lastname" className="form-label">Lastname</label>
                            <input type="text" className="form-control" name="lastname" placeholder="Insert Lastname" value={store?.lastname} onChange={(e) => handleChange(e)} />
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked={store?.gender === 'Male' ? true : false} onChange={() => handleChangeRadio('Male')} />
                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                Male
                            </label>
                        </div>
                        <div className="form-check mb-3">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked={store?.gender === 'Female' ? true : false} onChange={() => handleChangeRadio('Female')} />
                            <label className="form-check-label" htmlFor="flexRadioDefault2">
                                Female
                            </label>
                        </div>
                        {/* <div className="mb-3">
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
                        </div> */}
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

export default Home;