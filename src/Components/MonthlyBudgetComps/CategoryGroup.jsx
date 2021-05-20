import Table from 'react-bootstrap/Table'
import CategoryEntry from './CategoryEntry.jsx';

const CategoryGroup = ({ type, categories }) => {

    return (
        <>
        <h3>{type.replace(/(^\w|\s\w)/g, m => m.toUpperCase())}</h3>
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
                    <CategoryEntry category={category} categoryType={type} index={index} key={'category'+index}/>
                    
                ))}
            </tbody>
        </Table>
        </>
    )
}

export default CategoryGroup;