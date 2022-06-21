import { FaEdit, FaTrash } from 'react-icons/fa';

const TableRow = ({ student, deleteStudentById }) => {
    return (
        <tr>
            <td>{student.id}</td>
            <td>{student.name}</td>
            <td>
                {student.lastname} {" "}
                {student.gender === 'Female' ? (
                    <span className="badge bg-success">{student.gender}</span>
                ) : (
                    <span className="badge bg-dark">{student.gender}</span>
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
}

export default TableRow;