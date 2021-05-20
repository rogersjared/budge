import Table from 'react-bootstrap/Table'
import { GetLocalStorage } from '../../localStorage.js';



const CategoryEntry = ( { category, categoryType, index }) => {
    const { categories, setCategories, monthRoot } = GetLocalStorage();


    const updateColumn = (event) => {
        const update = categories[categoryType].slice();
        update[index][event.target.name] = event.target.value;
        setCategories({
            [categoryType]: update
        });
    }

    return (
        <tr>
           <td><input name='name' value={category.name} onChange={updateColumn}/></td>
           <td><input name='budgeted' value={category.budgeted} onChange={updateColumn}></input></td>
            <td>{category.funded}</td>
            <td>{category.spent}</td>
        </tr>
    )
}

export default CategoryEntry;