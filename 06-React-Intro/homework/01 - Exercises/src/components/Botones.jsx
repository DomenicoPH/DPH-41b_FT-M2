import React from 'react'

export default class Botones extends React.Component {
  render() {
    //const {alerts} = this.props
    const {m1,m2} = this.props.alerts
    return (
      <div>
        <button onClick={() => alert(m1)}>Módulo 1</button>
        <button onClick={() => alert(m2)}>Módulo 2</button>
      </div>
    )
  }
}
