import React from 'react'
import type { User } from '../utils'

type CardProps = {
  user: User
}

export const Card = (props: CardProps) => {
  const { user } = props

  return (
    <div
      className="bg-gray-200 rounded-lg p-6 w-1/4 m-4"
      data-testid="user-card"
    >
      <div className="text-center">
        <h2 className="text-lg">{user.name}</h2>
        <div className="text-purple-600">{user.email}</div>
        <div className="text-purple-600">{user.phone}</div>
      </div>
    </div>
  )
}
