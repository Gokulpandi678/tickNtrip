import React from 'react'
import { Input } from '../ui'

const AuthForm = ({data}) => {
  return (
        <form action="" className='space-y-3'>
            {
                data.map((item, i) => (
                    <Input 
                        key={i}
                        placeholder={item.placeholder}
                        label={item.label}
                        type={item.type || 'text'}
                        required={item.required}
                        onChange={item.onChange}
                        value={item.value}
                        icon={item.icon}
                    />
                ))
            }
        </form>
  )
}

export default AuthForm