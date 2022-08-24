import React from 'react'

export default function Alerts(props) {
    const capitalize = (message)=> {
        const temp = message.toLowerCase();
        return message.charAt(0).toUpperCase() + temp.slice(1);
    }
  return (
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{capitalize(props.alert.type)}</strong>: {capitalize(props.alert.msg)}
    </div>
  )
}