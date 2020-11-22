import React from 'react'
import { useQuery } from 'react-query'
import { classnames } from 'tailwindcss-classnames'
import { allUsers, User } from '../utils'
import { Card } from './Card'

export const Users = () => {
  const { data: users } = useQuery<User[]>('users', allUsers)

  return (
    <div
      className={classnames(
        'flex',
        'items-center',
        'justify-center',
        'flex-col'
      )}
    >
      {users?.map(user => (
        <Card user={user} key={user.id} />
      ))}
    </div>
  )
}
