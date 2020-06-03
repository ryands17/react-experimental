import * as React from 'react'
import { classnames } from 'tailwindcss-classnames'
import { NavLink } from 'react-router-dom'
import { routes } from '../routes'

const spacer = classnames('mr-2')

export const Nav = () => {
  return (
    <nav>
      <ul
        style={{ listStyle: 'none' }}
        className={classnames('w-full', 'flex')}
      >
        <li>
          <NavLink to={routes.home.path}>Home</NavLink>
        </li>
        <div className={spacer}></div>
        <li>
          <NavLink to={routes.about.path}>About</NavLink>
        </li>
        <div className={spacer}></div>
        <li>
          <NavLink to={routes.contact.path}>Contact</NavLink>
        </li>
      </ul>
    </nav>
  )
}
