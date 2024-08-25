import React from 'react'
import { useSelector } from 'react-redux'


const GrandsonBox = () => {
    const count = useSelector(state =>state.count)

  return (
    <div>
      imaGrandsonBox {count}
    </div>
  )
}

export default GrandsonBox
