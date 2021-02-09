import React from 'react'
import Title from '../styles/title/Title'
import { format } from 'date-fns'

const Header = () => {
  const [number, setNumber] = React.useState(0)
  // const [colorChange, setColorchange] = React.useState(false)

  const btn_up = <button style={{ color: 'red'}} onClick={upNumber}>UP !!!!!</button>
  const btn_down = <button style={{ color: 'red'}} onClick={upDownumber}>DOWN !!!!!</button>
  const btn_alert = <button style={{ color: 'red'}} onClick={alertA}>DOWN !!!!!</button>

  function upNumber() {
    setNumber(number + 1)
  }

  function upDownumber() {
    setNumber(number - 1)
  }

  function alertA() {
    // let numberC = event.target.value
    alert('TTTTTTTT')
  }

  // let t_date = (new Date().getFullYear()) + '/' + (new Date().getMonth()) + 1 + '/' + (new Date().getDate())
  let t_date = format(new Date(), 'yyyy/MM/dd')

  return (
    <div>
     <Title> T PPKS </Title>
      <div><h1>{number}</h1></div>
      <div>
        {btn_up}{'---'}{btn_down}
      </div>
      <div>
        <input type='text' />
        <h2>{}</h2>
        <p>{t_date}</p>
        {btn_alert}
      </div>
    </div>
  )
}

export default Header
