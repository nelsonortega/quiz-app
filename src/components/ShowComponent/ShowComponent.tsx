import React, { ReactChild } from 'react'

interface IShowComponentProps {
  show: boolean
  children: ReactChild
}

const ShowComponent = (props: IShowComponentProps) => {
  return (
    <React.Fragment>
      {props.show && props.children}
    </React.Fragment>
  )
}

export default ShowComponent