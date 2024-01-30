import React from 'react'
import loading from './25.gif'

export default function Loading() {
  return (
    <div className='text-center'>
      <img src={loading} alt="loading" />
    </div>
  )
}