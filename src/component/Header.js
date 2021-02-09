import React from 'react'

const Header = () => {
  const [number, setNumber] = React.useState(0)
  const [colorChange, setColorchange] = React.useState(false)

  const btn_up = <button onClick={upNumber}>UP !!!!!</button>
  const btn_down = <button onClick={upDownumber}>DOWN !!!!!</button>

  function upNumber() {
    setNumber(number + 1)
  }

  function upDownumber() {
    setNumber(number - 1)
  }

  function onChange(event) {
    let numberC = event.target.selectionEnd
    if (numberC > 10) {
      setColorchange(true)
      console.log(colorChange.toString())
    }
  }

  return (
    <div>
      <div>{number}</div>
      <div>
        {btn_up} ||{''}|| {btn_down}
      </div>
      <div>
        <input type='text' />
        <h2>col</h2>
      </div>
    </div>
  )
}

export default Header
