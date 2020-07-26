import React, { Component } from 'react'

class Invoice extends Component {
  render() {
    return (
      <div className="container">
        <div className="jumbotron mt-5">
          <div className="col-sm-8 mx-auto">
            <h1 className="text-center">Zarządzaine fakturami</h1>
            <h3 className="text-left">Możesz tworzyć edytować i drukować twoje faktury</h3>
            <div>
              <ul>
                <li className="text-left">Utwórz nową fakturę</li>
                <li className="text-left" >Zmodyfikuj istniejącą  fakturę</li>
                <li className="text-left">Wydrukuj fakturę</li>
                <li className="text-left">Dodaj kontrahenta</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Invoice
