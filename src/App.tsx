import React, { FC, useState } from 'react'
import { render } from 'react-dom'

const App: FC = () => {
  const [count, setCount] = useState(0)

  const incCount = () => setCount(count + 1)

  return (
    <>
      <h1>{ count }</h1>
      <button onClick={ incCount }>+1</button>
    </>
  )
}

export const renderApp = (root: Element | null): void => render(<App/>, root)
