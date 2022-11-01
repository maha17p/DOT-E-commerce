import React from 'react'
import { Outlet } from 'react-router-dom'
import EmptyNavbar from '../EmptyNavbar/EmptyNavbar'
import { SHeaderHeight } from '../ProductsDisplayer/Products.styled'

const ProfileSharedLayout = () => {
  return (
    <>
        <EmptyNavbar />
      <SHeaderHeight />
        <Outlet />
    </>
  )
}

export default ProfileSharedLayout