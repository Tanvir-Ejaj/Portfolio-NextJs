import React from 'react'
import { GrFormNextLink } from 'react-icons/gr';

const NextArrow = ({onClick}) => {
  return (
    <>
      <div className="next-arrow" onClick={onClick}>
        <GrFormNextLink />
      </div>
    </>
  )
}

export default NextArrow