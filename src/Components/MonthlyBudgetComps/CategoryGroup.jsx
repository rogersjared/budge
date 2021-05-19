import Table from 'react-bootstrap/Table'
import CategoryEntry from './CategoryEntry.jsx';

const CategoryGroup = () => {

    return (
        <>
        <h3>Category Name</h3>
        <Table striped bordered hover>
            <thead>
                <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
                </tr>
            </thead>
            <tbody>
                <CategoryEntry />
                <CategoryEntry />
            </tbody>
        </Table>
        </>
    )
}

export default CategoryGroup;