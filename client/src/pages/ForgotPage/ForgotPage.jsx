import React from 'react'
import styled from 'styled-components'
import { forgot } from '../../assets'
import Form from '../../components/Form/Form'

const ForgotPage = () => {
  return (
    <SForgotPage>
        <Form
            title={"Forgot Password"}
            submitBtn={"Submit"}
            formArr = {forgotArr}
            img={forgot}
        />
    </SForgotPage>
  )
}

const forgotArr = [
    {
        label:"enter the email",
        name:"forgot",
        type:"text"
    }
]

export const SForgotPage  = styled.div``;

export default ForgotPage