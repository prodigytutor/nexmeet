import React from 'react'

type Props = {}

const Meeting = ({params}: {params:{id: string} }) => {
  return (
    <div>Meeting Room #{params.id}</div>
  )
}

export default Meeting