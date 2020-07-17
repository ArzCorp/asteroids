<<<<<<< HEAD
import React from 'react';
import { Link } from 'react-router-dom';
import asteroid from '../images/icon-asteroid.svg';
import asteroids from '../images/icon-asteroids.svg';
import orbit from '../images/icon-orbit.svg';
import telescope from '../images/icon-telescope.svg';
import alert from '../images/icon-alert.svg';
import './css/Card.css';

class Card extends React.Component {
    render() {
      return (
        <div className="card">
        <div className="asteroid">
          <img src={asteroid} alt="asteroide card" />
        </div>
        <div className="card__content">
              <h2 className="card__name">Asteroide</h2>
              <div className="card__container">
                <div className="card__item">
                  <img src={asteroids} alt=""/>
                </div>
                <div className="card__item">
                  <div className="data">
                    <h3  className="title__api">Titulo API</h3>
                    <p className="title__data">Dato 1</p>
                    <p className="title__data">Dato 2</p>
                  </div>
                </div>
                <div className="card__item">
                  <img src={orbit} alt=""/>
                </div>
                <div className="card__item">
                  <div className="data">
                    <h3 className="title__api">Titulo API</h3>
                    <p className="title__data">Dato 1</p>
                    <p className="title__data">Dato 2</p>
                  </div>
                </div>
                <div className="card__item">
                  <img src={telescope} alt=""/>
                </div>
                <div className="card__item">
                  <div className="data">
                    <h3 className="title__api">Titulo API</h3>
                    <p className="title__data">Dato 1</p>
                    <p className="title__data">Dato 2</p>
                  </div>
                </div>
                <div className="card__item">
                  <img src={alert} alt=""/>
                </div>
                <div className="card__item">
                  <div className="data">
                    <h3  className="title__api">Titulo API</h3>
                    <p className="title__data">Dato 1</p>
                    <p className="title__data">Dato 2</p>
                  </div>
                </div>
              </div>
              <a href="#" className="card__button">Explora</a>
          </div>
      </div>
      )
    }
  }

=======
import React from 'react';
import { Link } from 'react-router-dom';
import asteroid from '../images/icon-asteroid.svg';
import asteroids from '../images/icon-asteroids.svg';
import orbit from '../images/icon-orbit.svg';
import telescope from '../images/icon-telescope.svg';
import alert from '../images/icon-alert.svg';
import './css/Card.css';

class Card extends React.Component {
    render() {
      return (
        <div className="card">
        <div className="asteroid">
          <img src={asteroid} alt="asteroide card" />
        </div>
        <div className="card__content">
              <h2 className="card__name">Asteroide</h2>
              <div className="card__container">
                <div className="card__item">
                  <img src={asteroids} alt=""/>
                </div>
                <div className="card__item">
                  <div className="data">
                    <h3  className="title__api">Titulo API</h3>
                    <p className="title__data">Dato 1</p>
                    <p className="title__data">Dato 2</p>
                  </div>
                </div>
                <div className="card__item">
                  <img src={orbit} alt=""/>
                </div>
                <div className="card__item">
                  <div className="data">
                    <h3 className="title__api">Titulo API</h3>
                    <p className="title__data">Dato 1</p>
                    <p className="title__data">Dato 2</p>
                  </div>
                </div>
                <div className="card__item">
                  <img src={telescope} alt=""/>
                </div>
                <div className="card__item">
                  <div className="data">
                    <h3 className="title__api">Titulo API</h3>
                    <p className="title__data">Dato 1</p>
                    <p className="title__data">Dato 2</p>
                  </div>
                </div>
                <div className="card__item">
                  <img src={alert} alt=""/>
                </div>
                <div className="card__item">
                  <div className="data">
                    <h3  className="title__api">Titulo API</h3>
                    <p className="title__data">Dato 1</p>
                    <p className="title__data">Dato 2</p>
                  </div>
                </div>
              </div>
              <Link to="/" className="card__button" alt="">Explora</Link>
          </div>
      </div>
      )
    }
  }

>>>>>>> d14c1c46a6425a2cebc62e0d50131825548dadc8
export default Card;