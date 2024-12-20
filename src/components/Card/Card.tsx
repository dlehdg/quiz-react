import React from 'react'
import styled from 'styled-components'

const Card = () => {
  return (
    <>
      <Front>
        <span>앞면</span>
      </Front>

      <Back>
        <span>뒷면</span>
      </Back>
    </>
  )
}

export default Card


const Front = styled.div`

`;

const Back = styled.div`

`;