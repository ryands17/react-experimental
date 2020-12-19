import React from 'react'
import { classnames } from 'tailwindcss-classnames'
import type { User } from '../utils'

type CardProps = {
  user: User
}

export const Card = (props: CardProps) => {
  const { user } = props
  return (
    <div
      className={classnames('bg-gray-200', 'rounded-lg', 'p-6', 'w-1/4', 'm-4')}
      data-testid="user-card"
    >
      {/* <img className="h-16 w-16 rounded-full mx-auto" src="avatar.jpg" /> */}
      <div className={classnames('text-center')}>
        <h2 className={classnames('text-lg')}>{user.name}</h2>
        <div className={classnames('text-purple-600')}>{user.email}</div>
        <div className={classnames('text-purple-600')}>{user.phone}</div>
      </div>
    </div>
  )
}
