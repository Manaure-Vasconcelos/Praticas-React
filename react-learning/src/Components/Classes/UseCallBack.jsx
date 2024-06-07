import P from 'prop-types'
import React, { useCallback, useState } from 'react';

/* React.memo => Verifica se mudou algo no component e atualiza caso true */
const Button = React.memo(function Button({ incrementButton }) {
  console.log('Component')
  return <button onClick={() => incrementButton(2)}>Increment</button>

})

Button.propTypes = {
  incrementButton: P.func
}

function UseCallBack() {
  const [count, setCount] = useState(0)

  /* Dessa forma só quem atualiza é o App e não o component */
  const incrementCounter = useCallback((num) => {
    /* Usa uma função e recebe a props com parâmetro automaticamente. */
    setCount((c) => c + num)
  }, [])
  /* Informa um array de dependencias, que sempre que a dependencia mudar eçe atualiza todo o estado */

  console.log('App')


  return (
    <div>
      <h1>Count: {count}</h1>
      <Button incrementButton={incrementCounter} />
    </div>
  )
}

export default UseCallBack
