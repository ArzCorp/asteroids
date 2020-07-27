import React, { Component } from 'react';
import { connect } from 'react-redux';
/* import { Link } from 'react-router-dom'; */
import asteroid from '../images/icon-asteroid.svg';
import asteroids from '../images/icon-asteroids.svg';
import orbit from '../images/icon-orbit.svg';
import telescope from '../images/icon-telescope.svg';
import alert from '../images/icon-alert.svg';
import '../css/Global.css'
import './css/Card.css';
import Cargando from './General/Cargando';
import Error from './General/Error'
import Carousel from './carousel'



import * as asteroidesActions from '../actions/asteroidesActions';


class Card extends Component {
// Código para el manejo de los botones
  state = {
    focus: 0,
    meteorito: 0
  };

  onClickPrev = () =>
    this.setState(state => ({
      focus: state.focus - (this.props.getNeos.length - this.props.getNeos.length) + 1 < (this.props.getNeos.length - this.props.getNeos.length) ? (this.props.getNeos.length - this.props.getNeos.length) : state.focus - 1
    }));

  onClickNext = () =>
    this.setState(state => ({
      focus: state.focus + (this.props.getNeos.length - this.props.getNeos.length) - 1 >= this.props.getNeos.length ? (this.props.getNeos.length - 1) : state.focus + 1
    }));

     // Manejo de botones
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
 /* Uso el llamado de del array utilizando length para identificar cuantos elementos de array traigo y poder movernos uno a uno */
    return (
      <Carousel component="ul" leftPadding={this.props.getNeos.length - this.props.getNeos.length + this.state.focus} focus={this.state.focus} >
      {this.props.getNeos.map((nombre) => (
            <li key={ nombre._id } className={this.state.focus === this.props.getNeos.length - this.props.getNeos.length + this.state.focus && "has-focus"}>
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
                      <h3 className="title__api">Referencia Neo</h3>
                      <p className="title__data">{ nombre.neo_reference_id }</p>
                    </div>
                  </div>
                  <div className="card__item">
                      <img src={telescope} alt=""/>
                  </div>
                  <div className="card__item">
                    <div className="data">
                      <h3 className="title__api">Magnitud Adsoluta</h3>
                      <p className="title__data">{ nombre.absolute_magnitude_h }Km</p>
                  </div>
                          </div>
                          <div className="card__item">
                            <img src={alert} alt=""/>
                          </div>
                          <div className="card__item">
                            <div className="data">
                              <h3  className="title__api">Potencialmente Peligroso</h3>
                              <p className="title__data">{ nombre.is_potentially_hazardous_asteroid } No</p>
                                                                                </div>
                          </div>
                        </div>
                        {/* <Link to="/" className="card__button" alt="">Explora</Link> */}
                        </div>
                        </div>
            </li>
          ))}
          </Carousel>
    )

    }


  render() {
      console.log('valor', this.props.getNeos.length - 1)
      console.log('Aumento ', this.props.getNeos.length - this.props.getNeos.length + this.state.focus)
      console.log('click ', this.state.focus)
      console.log('meteorito ', this.props.getNeos.slice[this.state.focus])
      return (
        <div className="father">
            { this.ponerDatos() } {/* Se realiza el llamado de la funcion para ver las cards en pantalla */}
          <button className="slick-arrow slick-prev" onClick={this.onClickPrev}>Prev</button>
          <button className="slick-arrow slick-next" onClick={this.onClickNext}>Next</button>
        </div>
    )}
  }


  const mapStateToProps = (reducers) => {
    return reducers.asteroidesReducer;
  };

export default connect(mapStateToProps, asteroidesActions)(Card);