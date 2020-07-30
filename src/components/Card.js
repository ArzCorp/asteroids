import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import asteroid from '../images/icon-asteroid.svg';
import asteroids from '../images/icon-asteroids.svg';
import orbit from '../images/icon-orbit.svg';
import telescope from '../images/icon-telescope.svg';
import alert from '../images/icon-alert.svg';
import Loading from './General/Loading';
import NotAsteroids from './General/notAsteroid';
import Error from './General/Error';
import Carousel from './Carousel';
import * as asteroidesActions from '../actions/asteroidesActions';
import '../css/Global.css';
import './css/Card.css';
class Card extends Component {
  componentDidMount() {
    this.props.traerTodos();
  };

  ponerDatos = () => {
    if (this.props.cargando) {
      return <Loading />
    };

    if (this.props.error) {
      return <Error mensaje={this.props.error} />
    };

    return (
      <Fragment>
        {
          this.props.getNeos.map((nombre) => (
            <li key={nombre._id} className="card">
              <div className="asteroid">
                <img src={asteroid} alt="asteroide card" />
              </div>
              <div className="card__content">
                <h3 className="card__name" >
                  {nombre.name}
                </h3>
                <div className="card__container">
                  <div className="card__item">
                    <img src={asteroids} alt="" />
                  </div>
                  <div className="card__item">
                    <div className="data">
                      <h3 className="title__api">Diametro estimado</h3>
                      <p className="title__data">{nombre.estimated_diameter.kilometers.estimated_diameter_min.toFixed(3)}</p>
                      <p className="title__data">{nombre.estimated_diameter.kilometers.estimated_diameter_max.toFixed(3)}</p>
                    </div>
                  </div>
                  <div className="card__item">
                    <img src={orbit} alt="" />
                  </div>
                  <div className="card__item">
                    <div className="data">
                      <h3 className="title__api">Referencia Neo</h3>
                      <p className="title__data">{nombre.neo_reference_id}</p>
                    </div>
                  </div>
                  <div className="card__item">
                    <img src={telescope} alt="" />
                  </div>
                  <div className="card__item">
                    <div className="data">
                      <h3 className="title__api">Magnitud Adsoluta</h3>
                      <p className="title__data">{nombre.absolute_magnitude_h}Km</p>
                    </div>
                  </div>
                  <div className="card__item">
                    <img src={alert} alt="" />
                  </div>
                  <div className="card__item">
                    <div className="data">
                      <h3 className="title__api">Potencialmente Peligroso</h3>
                      <p className="title__data">{nombre.is_potentially_hazardous_asteroid} No</p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
      </Fragment>
    );
  };

  render() {
    if (this.props.cargando) {
      return <Loading />
    };

    if (!this.props.getNeos.length) {
      return (
        <Carousel>
          <NotAsteroids />
        </Carousel>
      );
    };
    return (
      <Carousel>
        <div className="carousel">
          {this.ponerDatos()}
        </div>
        <button onClick={() => {
          let more = this.props.page + 9;
          this.props.bringMore(more)
          window.scroll(0, 0)
        }} className="button button-center">Mas asteroides</button>
      </Carousel>
    );
  };
};

const mapStateToProps = (reducers) => {
  return reducers.asteroidesReducer;
};

export default connect(mapStateToProps, asteroidesActions)(Card);