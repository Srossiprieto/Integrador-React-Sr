import React from 'react'
import { AdminContainer } from '../../pages/admin/AdminPageStyles'
// import CreateCategory from '../../components/adminComponents/CreateCategory/CreateCategory'
// import ListProducts from '../../components/adminComponents/ListProducts/ListProducts'
import CreateProduct from '../../components/adminComponents/CreateProduct/CreateProduct'


function AdminPage() {
  return (
    <>
      <AdminContainer>
        {/* <CreateCategory />
        <ListProducts/> */}
          <CreateProduct />

      </AdminContainer>
    </>
  )
}
export default AdminPage

