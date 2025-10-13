import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../components/ui';

export const Home = () => {
    const navigate = useNavigate();

  return (
    <div className='mx-5 mt-2 flex gap-5 '>
        <Button onClick={() => navigate("/login")}>Login</Button>
        <Button onClick={() => navigate("/register")} variant='secondary'>Signup</Button>
    </div>
  )
}
