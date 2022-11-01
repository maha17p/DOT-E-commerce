import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { flexCenter } from '../../styles/variable.styled'
import { ErrorMsg, SuccessMsg } from '../../utils/Notification/Notification'

const ActivationEmail = () => {
    const {activation_token} = useParams()
    const [success,setSuccess] = useState('')
    const [err, setErr] = useState('')
    const activationTokenEmail = async () => {
      try {
        const resp = await axios.post('/api/v1/user/activation',{activation_token})
        setSuccess(resp.data.msg)
      } catch (err) {
        err.response.data.msg && setErr(err.response.data.msg)
      }
    }
    useEffect(() => {
      if(activation_token){
        activationTokenEmail()
      }
    },[activation_token])
    
  return (
    <SActivation>
      {success &&  <SuccessMsg msg={success} />}
      {err &&  <ErrorMsg msg={err} />}

    </SActivation>
  )
}

const SActivation = styled.div`
  ${flexCenter}
  height: 100vh;
`

export default ActivationEmail