import Table from 'react-bootstrap/Table'
import { GetLocalStorage } from '../../localStorage.js';


const CategoryEntry = ({ category, categoryType, index }) => {
  const { categories, setCategories } = GetLocalStorage();

  const updateColumn = (event) => {
    const update = categories[categoryType].slice();
    update[index][event.target.name] = event.target.value;
    setCategories({
      [categoryType]: update
    });
  }

  return (
    <tr>
      <td><input name='name' type='text' value={category.name} onChange={updateColumn} /></td>
      <td><input name='budgeted' type='number' value={category.budgeted} onChange={updateColumn} /></td>
      <td><input name='funded' type='number' value={category.funded} onChange={updateColumn} /></td>
      <td>{category.spent}</td>
    </tr>
  )
}

export default CategoryEntry;