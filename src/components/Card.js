import React from 'react';
/* import { Link } from 'react-router-dom'; */
import asteroid from '../images/icon-asteroid.svg';
import asteroids from '../images/icon-asteroids.svg';
import orbit from '../images/icon-orbit.svg';
import telescope from '../images/icon-telescope.svg';
import alert from '../images/icon-alert.svg';
import './css/Card.css';

class Card extends React.Component {
  constructor(props) {
    super(props);
    console.log('1. constructor()');

    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    console.log('3. componentDidMount()');

    this.timeoutId = setTimeout(() => {
      this.setState({
        data: [
          {
            "neo_reference_id":"2021277",
            "image_url":"asteroid_15123468.jpg",
            "name": "21277 (1996 TO5)",
            "absolute_magnitude_h":16.1,
            "estimated_diameter":{
                "kilometers":{
                    "estimated_diameter_min":1.6016033798,
                    "estimated_diameter_max":3.5812940302
                }
            },
            "is_potentially_hazardous_asteroid":false,
            "close_approach_data":[{
                "close_approach_date": "2020-07-01",
                "epoch_date_close_approach":-775272300000,
                "relative_velocity":{
                    "kilometers_per_hour":"55834.1106763388"
                },
                "miss_distance":{
                    "kilometers":"5000054.084456751"
                }
            }],
            "orbital_data":{
                "orbit_determination_date":"2020-04-29 06:55:15",
                "minimum_orbit_intersection":".313031",
                "eccentricity":".5205881322259853",
                "semi_major_axis":"2.37660147442171",
                "inclination":"20.95226489770891",
                "orbital_period":"1338.23680580907",
                "perihelion_distance":"1.139370951806989",
                "aphelion_distance":"3.613831997036431",
                "orbit_class":{
                    "orbit_class_type":"AMO",
                    "orbit_class_description":"Near-Earth asteroid orbits similar to that of 1221 Amor",
                    "orbit_class_range":"1.017 AU < q (perihelion) < 1.3 AU"
                }
            }
        },
        {
          "neo_reference_id":"3726710",
          "image_url":"Asteroide1.jpg",
          "name":"(2015 RC)",
          "absolute_magnitude_h":24.3,
          "estimated_diameter":{
              "kilometers":{
                  "estimated_diameter_min":0.0366906138,
                  "estimated_diameter_max":0.0820427065
              }
          },
          "is_potentially_hazardous_asteroid":false,
          "close_approach_data":[{
              "close_approach_date": "2020-07-01",
              "epoch_date_close_approach":1441705500000,
              "relative_velocity":{
                  "kilometers_per_hour":"70146.106302123"
              },
              "miss_distance":{
                  "kilometers":"4027630.320552233"
              }
          }]
      },
      {
          "neo_reference_id":"2162038",
          "name":"162038 (1996 DH)",
          "image_url":"PIA02494_orig.jpg",
          "absolute_magnitude_h":16.6,
          "estimated_diameter":{
              "kilometers":{
                  "estimated_diameter_min":1.2721987854,
                  "estimated_diameter_max":2.844722965
              }
          },
          "is_potentially_hazardous_asteroid":false,
          "close_approach_data":[{
              "close_approach_date": "2020-07-02",
              "epoch_date_close_approach":1441705500000,
              "relative_velocity":{
                  "kilometers_per_hour":"70146.106302123"
              },
              "miss_distance":{
                  "kilometers":"4027630.320552233"
              }
          }],
          "orbital_data":{
              "orbit_determination_date":"2020-05-26 08:20:27",
              "minimum_orbit_intersection":".135023",
              "eccentricity":".2766900137323586",
              "semi_major_axis":"1.586813070911491",
              "inclination":"17.23326680059163",
              "orbital_period":"730.107955454301",
              "perihelion_distance":"1.147757740530304",
              "aphelion_distance":"2.025868401292677",
              "orbit_class":{
                  "orbit_class_type":"AMO",
                  "orbit_class_description":"Near-Earth asteroid orbits similar to that of 1221 Amor",
                  "orbit_class_range":"1.017 AU < q (perihelion) < 1.3 AU"
              }
          }
      },
      {
        "neo_reference_id":"2162038",
        "name":"162038 (1996 DH)",
        "image_url":"PIA02494_orig.jpg",
        "absolute_magnitude_h":16.6,
        "estimated_diameter":{
            "kilometers":{
                "estimated_diameter_min":1.2721987854,
                "estimated_diameter_max":2.844722965
            }
        },
        "is_potentially_hazardous_asteroid":false,
        "close_approach_data":[{
            "close_approach_date": "2020-07-02",
            "epoch_date_close_approach":1441705500000,
            "relative_velocity":{
                "kilometers_per_hour":"70146.106302123"
            },
            "miss_distance":{
                "kilometers":"4027630.320552233"
            }
        }],
        "orbital_data":{
            "orbit_determination_date":"2020-05-26 08:20:27",
            "minimum_orbit_intersection":".135023",
            "eccentricity":".2766900137323586",
            "semi_major_axis":"1.586813070911491",
            "inclination":"17.23326680059163",
            "orbital_period":"730.107955454301",
            "perihelion_distance":"1.147757740530304",
            "aphelion_distance":"2.025868401292677",
            "orbit_class":{
                "orbit_class_type":"AMO",
                "orbit_class_description":"Near-Earth asteroid orbits similar to that of 1221 Amor",
                "orbit_class_range":"1.017 AU < q (perihelion) < 1.3 AU"
            }
        }
    },
        ],
      });
    }, 100);
  }

  ponerDatos = () => (
    this.state.data.map((nombre) => (
          <div  key={ nombre.neo_reference_id }>
          <div className="card">
      <div className="asteroid">
        <img src={asteroid} alt="asteroide card" />
      </div>
      <div className="card__content">
          <div>
            <h3 className="card__name" >
            { nombre.name }
            </h3>
            </div>
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
                  <h3  className="title__api">Potencialmente Peligroso</h3>
                  <p className="title__data">dfdf</p>
                  <p className="title__data">dfdf</p>
                </div>
              </div>
            </div>
            {/* <Link to="/" className="card__button" alt="">Explora</Link> */}
            </div>
    </div>
          </div>
    ))
  )

  render() {
    console.log('2. render()');
    console.log(this.state.data)
      return (
      <div className="father">
      { this.ponerDatos() }
      </div>
    )}
  }


export default Card;