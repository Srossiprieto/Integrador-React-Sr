import React from 'react'
import { AdminContainer } from '../../pages/admin/AdminPageStyles'
// import CreateCategory from '../../components/adminComponents/CreateCategory/CreateCategory'
// import ListProducts from '../../components/adminComponents/ListProducts/ListProducts'
import ListProducts from '../../components/adminComponents/ListProducts/ListProducts'
import CreateCategory from '../../components/adminComponents/CreateCategory/CreateCategory'
import CategoryList from '../../components/adminComponents/CategoryList/CategoryList'


function AdminPage() {
  return (
    <>
      <AdminContainer>
        <CreateCategory/>
        <CategoryList/>
        <ListProducts/> 
      </AdminContainer>
    </>
  )
}
export default AdminPage

