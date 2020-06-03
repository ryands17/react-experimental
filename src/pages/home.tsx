import * as React from 'react'
import { classnames } from 'tailwindcss-classnames'

const Home = () => {
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    let interval = setInterval(() => {
      setCount(count => count + 1)
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div>
      <h1 className={classnames('text-4xl', 'text-blue-600')}>
        Home Page: {count}
      </h1>
    </div>
  )
}

export default Home
