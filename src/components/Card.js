import React, { Component } from 'react';
import { connect } from 'react-redux';
/* import { Link } from 'react-router-dom'; */
import asteroid from '../images/icon-asteroid.svg';
import asteroids from '../images/icon-asteroids.svg';
import orbit from '../images/icon-orbit.svg';
import telescope from '../images/icon-telescope.svg';
import alert from '../images/icon-alert.svg';
import './css/Card.css';
import Cargando from './General/Cargando';
import Error from './General/Error'


import * as asteroidesActions from '../actions/asteroidesActions';


class Card extends Component {

  componentDidMount() {
      this.props.traerTodos();
  }

  ponerDatos = () => {
    if (this.props.cargando) {
      return <Cargando />
    }

    if (this.props.error) {
      return <Error mensaje={ this.props.error }  />
    }

    return (
      this.props.getNeos.map((nombre) => (
        <div key={ nombre._id }>
              <div className="card">
                <div className="asteroid">
                  <img src={asteroid} alt="asteroide card" />
                </div>
                <div className="card__content">
                <h3 className="card__name" >
                { nombre.name }
              </h3>
                  <div className="card__container">
                  <div className="card__item">
                    <img src={asteroids} alt=""/>
                  </div>
                  <div className="card__item">
                    <div className="data">
                      <h3  className="title__api">Diametro estimado</h3>
                      <p className="title__data">{ nombre.estimated_diameter.kilometers.estimated_diameter_min }</p>
                      <p className="title__data">{ nombre.estimated_diameter.kilometers.estimated_diameter_max }</p>
                    </div>
                  </div>
                  <div className="card__item">
                      <img src={orbit} alt=""/>
                  </div>
                  <div className="card__item">
                    <div className="data">
                      <h3 className="title__api">Orbita</h3>
                      <p className="title__data">dsfsdf</p>
                      <p className="title__data">sdfd</p>
                    </div>
                  </div>
                  <div className="card__item">
                      <img src={telescope} alt=""/>
                  </div>
                  <div className="card__item">
                    <div className="data">
                      <h3 className="title__api">Magnitud Adsoluta</h3>
                      <p className="title__data">{ nombre.absolute_magnitude_h }</p>
                  </div>
                          </div>
                          <div className="card__item">
                            <img src={alert} alt=""/>
                          </div>
                          <div className="card__item">
                            <div className="data">
                              <h3  className="title__api">Potencialmente Peligroso</h3>
                              <p className="title__data">{ nombre.is_potentially_hazardous_asteroid }</p>
                                                                                </div>
                          </div>
                        </div>
                        {/* <Link to="/" className="card__button" alt="">Explora</Link> */}
                        </div>
                </div>
            </div>
          ))
    )

    }


  render() {
      console.log(this.props.getNeos)
      return (
        <div className="father">
          { this.ponerDatos() }
        </div>
    )}
  }

  const mapStateToProps = (reducers) => {
    return reducers.asteroidesReducer;
  };

export default connect(mapStateToProps, asteroidesActions)(Card);