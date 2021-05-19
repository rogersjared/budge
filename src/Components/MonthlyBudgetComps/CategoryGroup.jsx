import Table from 'react-bootstrap/Table'
import CategoryEntry from './CategoryEntry.jsx';

const CategoryGroup = ({ type, categories }) => {

    return (
        <>
        <h3>{type}</h3>
        <Table striped bordered hover>
            <thead>
                <tr>
                <th>Category</th>
                <th>Budgeted</th>
                <th>Funded</th>
                <th>Available to Spend</th>
                </tr>
            </thead>
            <tbody>
                {categories.map((category, index) => (
                    <CategoryEntry category={category} key={index} />
                ))}
            </tbody>
        </Table>
        </>
    )
}

export default CategoryGroup;