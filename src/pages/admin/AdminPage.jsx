import React from 'react'
import { AdminContainer } from '../../pages/admin/AdminPageStyles'
import CreateCategory from '../../components/adminComponents/CreateCategory/CreateCategory'
import ListProducts from '../../components/adminComponents/ListProducts/ListProducts'

function AdminPage() {
  return (
    <>
      <AdminContainer>
        <CreateCategory />
        <ListProducts/>
      </AdminContainer>
    </>
  )
}
export default AdminPage

