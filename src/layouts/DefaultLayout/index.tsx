import {  DefaultLayoutContainer } from "./styles"
import { Outlet  } from 'react-router-dom'

export const DefaultLayout = () => {

  return (
    <DefaultLayoutContainer>
      <Outlet />
    </DefaultLayoutContainer>
  )


}