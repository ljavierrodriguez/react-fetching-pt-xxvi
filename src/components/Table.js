import TableRow from './TableRow';

const Table = ({ students, deleteStudentById }) => {
    return (
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
                {
                    students.length == 0 ? (
                        <tr>
                            <th colSpan={5} className="text-center py-5">
                                <div className="spinner-border text-info" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            </th>
                        </tr>
                    ) :
                        students.map((student, index) => {
                            return (
                                <TableRow student={student} key={index} deleteStudentById={deleteStudentById} />
                            )
                        })}
            </tbody>
        </table>
    )
}

export default Table;