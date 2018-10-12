import React from 'react'

export default (props) => {

  const { date, open, close} = props

  return (
    <React.Fragment>
      
        <tbody>
          <tr>
            <td>{ date }</td>
            <td>{ open }</td>
            <td>{ close }</td>
          </tr>
        </tbody>
      
      
    </React.Fragment>
  )
}
