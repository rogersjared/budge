import Table from 'react-bootstrap/Table'
import CategoryEntry from './CategoryEntry.jsx';
import Modal from 'react-bootstrap/Modal'
import ModalDialog from 'react-bootstrap/ModalDialog'
import ModalHeader from 'react-bootstrap/ModalHeader'
import ModalTitle from 'react-bootstrap/ModalTitle'
import ModalBody from 'react-bootstrap/ModalBody'
import ModalFooter from 'react-bootstrap/ModalFooter'
import Button from 'react-bootstrap/Button'
import {useState} from 'react';
import { GetLocalStorage } from '../../localStorage.js';





const CategoryGroup = ({ type, assignedCategories, categories, setCategories }) => {
const {categoryGroups, setCategoryGroups} = GetLocalStorage();
  const addCategory = () => {
    const keys = Object.keys(categories);
    const nextKey = keys.length;
    const newCategory = {
      categoryId: nextKey,
      name: '',
      budgeted: 0,
      funded: 0,
      spent: 0,
    }
    setCategories({
      [nextKey]: newCategory
    });
    const groupUpdate = categoryGroups[type].slice();
    groupUpdate.push(nextKey);
    setCategoryGroups({
      [type]: groupUpdate
    })
  }

  return (
    <>
      <h1>{type.replace(/(^\w|\s\w)/g, m => m.toUpperCase())}</h1>
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

          {assignedCategories.map((categoryId, index) => (

            <CategoryEntry categoryId={categoryId} categories={categories} categoryType={type} index={index} key={'category' + index} />
          ))}
        </tbody>
      </Table>
      
      <Button variant="primary" onClick={addCategory}>
        +
      </Button>
    </>
  )
}

export default CategoryGroup;