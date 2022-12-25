import React from 'react'

export class Content extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      backgroundColor1: 'white',
      textColor1: 'black',
      backgroundColor2: 'white',
      textColor2: 'black',
    }
  }

  changeColor1() {
    const textColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(
      Math.random() * 255
    )}, ${Math.floor(Math.random() * 255)})`
    this.setState({ textColor1: textColor, backgroundColor1: 'cyan' })
  }

  changeColor2() {
    const textColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(
      Math.random() * 255
    )}, ${Math.floor(Math.random() * 255)})`
    this.setState({ textColor2: textColor, backgroundColor2: 'yellow' })
  }

  render() {
    return (
      <>
        <div>Народження: 14 січня, 2002 року, м. Херсон</div>
        <ul>
          Освіта:
          <li id="elem">
            <div
              onClick={() => this.changeColor1()}
              style={{
                backgroundColor: this.state.backgroundColor1,
                color: this.state.textColor1,
              }}
            >
              Херсонська гімназія №6
            </div>
          </li>
          <li id="elem2">
            <div
              onClick={() => this.changeColor2()}
              style={{
                backgroundColor: this.state.backgroundColor2,
                color: this.state.textColor2,
              }}
            >
              Національних технічний університет України "Київський політехнічний університет імені Ігоря Сікорського"
            </div>
          </li>
        </ul>
        <ul>
          Хобі:
          <li>Гра на музичних інструментах</li>
          <li>Розробка ігор</li>
          <li>Спортзал</li>
          <li>Шкіряне вбрання</li>
          <li>Боротьба</li>
        </ul>
        <ul>
          Улюблені фільми:
          <ol type="1">
            <li>Інтерстеллар</li>
            <li>Початок</li>
            <li>Тенет</li>
          </ol>
        </ul>
        <div>
          Херсон - чудове місце із ароматом солоду кавунів, що залишається в серці кожного, хто побував тут.
        </div>
      </>
    )
  }
}
