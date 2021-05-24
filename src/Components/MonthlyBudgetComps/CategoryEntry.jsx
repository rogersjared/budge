import Table from 'react-bootstrap/Table'
import { GetLocalStorage } from '../../localStorage.js';
import {useState} from 'react';


const CategoryEntry = ({ categoryId, categoryType, index, categories }) => {
  const { setCategories } = GetLocalStorage();
  const category = categories[categoryId];

  const updateColumn = (event) => {
    setCategories({
        [categoryId]: {
          [event.target.name] : event.target.value
        }
    });
  };
  
  const renderAvailable = () => {
    var available = category.funded - category.spent;
    if (typeof available === NaN) {
      return 0 
    } else {
      return available;
    }
  }
  return (
    <tr>
      <td><input name='name' type='text' value={category.name} onChange={updateColumn} /></td>
      <td><input name='budgeted' type='number' value={category.budgeted} onChange={updateColumn} /></td>
      <td><input name='funded' type='number' value={category.funded} onChange={updateColumn} /></td>
      <td>{renderAvailable()}</td>
    </tr>
  )
}

export default CategoryEntry;