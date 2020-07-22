/* import axios from "axios"; */
import { TRAER_ASTEROIDES, CARGANDO, ERROR } from '../types/asteroidesTypes'

let URL = 'http://ec2-54-234-2-6.compute-1.amazonaws.com:8080/api/graphql';


export const traerTodos = () => async (dispatch) => {
  dispatch({
    type: CARGANDO
  })
  try {
    const respuesta = await fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        query:
            `{ getNeos {
                _id
                neo_reference_id
                name
                absolute_magnitude_h
                estimated_diameter {
                  kilometers {
                    estimated_diameter_min
                    estimated_diameter_max
                  }
                }
              }
            }`
            })
    })
      .then(response => response.json())
    dispatch({
      type: TRAER_ASTEROIDES,
      payload: respuesta.data.getNeos
    })
  }
  catch (error) {
    console.log('Error: ', error.message);
    dispatch({
      type: ERROR,
      payload: 'Algo salio mal, intenta mas tarde'
    })
  }

}