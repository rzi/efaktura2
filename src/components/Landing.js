import React, { Component } from 'react'

class Landing extends Component {
  render() {
    return (
      <div className="container">
        <div className="jumbotron mt-5">
          <div className="col-sm-8 mx-auto">
            <h1 className="text-center">Witaj</h1>
            <h3 className="text-left">To jest aplikacja do Efaktur, zrobiona technologiach:</h3>
            <div>
              <ul>
                <li className="text-left">React dla frontendu</li>
                <li className="text-left" >Node wraz z frameworkiem Express dla backendu</li>
                <li className="text-left">mysql to baza danych ( tymczasowo na cba.pl docelowo na ct8.pl)</li>
                <li className="text-left">Wykorzystany darmowy hosting ct8.pl z nodem</li>
              </ul>
            </div>
            <br/>
            <div>
              <p> Jeśli nie masz jeszcze konta zarejestruj się klikając w menu Register</p>
              <p> Jeśli jesteś użyktownikiem zaloguj sę klikając w menu Login</p>

            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default Landing
