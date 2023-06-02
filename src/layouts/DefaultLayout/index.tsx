import { Header } from "../../components/Header"
import {  DefaultLayoutContainer } from "./styles"
import { Outlet  } from 'react-router-dom'

export const DefaultLayout = () => {

  return (
    <DefaultLayoutContainer>
      <Header />
      <Outlet />
    </DefaultLayoutContainer>
  )


}