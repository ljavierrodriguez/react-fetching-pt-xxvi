import { toast } from "react-toastify";

const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            url: 'https://3001-ljavierrodr-reactfetchi-d10ka9oxwl9.ws-us47.gitpod.io',
            students: [],
            name: '',
            lastname: '',
            gender: 'Female',
        },
        actions: {
            getStudents: () => {
                const { url } = getStore();
                fetch(`${url}/users`)
                    .then((response) => response.json())
                    .then((data) => {
                        //if(data.length < 5) throw new Error("Numero de estudiantes invalido!");
                        setStore({ students: data })

                    })
                    .catch((error) => {
                        console.log(error)
                    })
            },
            insertStudent: (student) => {
                const { url } = getStore();
                const { getStudents } = getActions();
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
            },
            insertStudentAsync: async (student) => {
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
                        getUsers();
                    } else {
                        throw Error('Ha ocurrido un error!')
                    }
        
                } catch (error) {
                    console.log(error)
                }
            },
            deleteStudentById: (id) => {
                const { url } = getStore();
                const { getStudents } = getActions();

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
            },
            deleteStudentByIdAsync: async (id) => {
                try {
                    const { url } = getStore();
                    const { getStudents } = getActions();

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
            },
            handleSubmit: (e) => {
                e.preventDefault();
                const { name, lastname, gender } = getStore();
                const { insertStudent } = getActions();
                const newStudent = { name: name, lastname: lastname, gender: gender }
                insertStudent(newStudent);
                setStore({
                    name: '',
                    lastname: '',
                    gender: 'Female'
                })
                toast.success('Estudiante creado con exito!');
            },
            handleChange: (e) => {
                const { name, value } = e.target;
                setStore({
                    [name]: value
                })
            },
            handleChangeRadio: (gender) => {
                setStore({
                    gender: gender
                })
            }
        }
    }
}

export default getState;