import React from 'react'
import { AdminContainer } from '../../pages/admin/AdminPageStyles'
import CreateProduct from '../../components/adminComponents/CreateProduct/CreateProduct'
import CreateCategory from '../../components/adminComponents/CreateCategory/CreateCategory'

function AdminPage() {
  return (
    <>
      <AdminContainer>
        <CreateCategory />
        <CreateProduct />
      </AdminContainer>
    </>
  )
}
export default AdminPage

