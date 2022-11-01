import { SErrorMsg, SSuccessMsg } from "./Notification.styled"


export const ErrorMsg = ({msg}) => {
    return(
        <SErrorMsg>{msg}</SErrorMsg>
    )
}

export const SuccessMsg = ({msg}) => {
    return(
        <SSuccessMsg>{msg}</SSuccessMsg>
    )
}