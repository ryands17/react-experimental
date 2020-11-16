import React from 'react'
import { useQuery } from 'react-query'
import { classnames } from 'tailwindcss-classnames'
import type { User } from '../utils'

export const Users = () => {
  const { data: users } = useQuery<User[]>('users')

  return (
    <>
      <h1 className={classnames('text-4xl')}>Users</h1>
      <ul>
        {users?.map(u => (
          <li key={u.id}>
            <span className={classnames('font-bold', 'text-blue-600')}>
              {u.name}
            </span>{' '}
            =&gt;{' '}
            <span className={classnames('text-purple-700')}>{u.email}</span>
          </li>
        ))}
      </ul>
    </>
  )
}
