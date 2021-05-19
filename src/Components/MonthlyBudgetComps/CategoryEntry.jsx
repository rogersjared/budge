import Table from 'react-bootstrap/Table'


const CategoryEntry = ({category}) => {
    return (
        <tr>
            <td>{category.name}</td>
            <td>{category.budgeted}</td>
            <td>{category.funded}</td>
            <td>{category.funded - category.spent}</td>
        </tr>
    )
}

export default CategoryEntry;