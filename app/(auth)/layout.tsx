import React from 'react'

// layout for auth page
const AuthLayout = ({ children }: { children : React.ReactNode}) => {
  return (
    <div className='flex pt-40 justify-center'>{children}</div>
  )
}

export default AuthLayout