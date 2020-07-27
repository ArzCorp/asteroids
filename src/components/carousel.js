import React, { Component, createRef } from "react";

class Carousel extends Component {
  state = {
    x: 0,
    currentPage: 1
  };

  $carousel = createRef();

  componentDidUpdate(prevProps) {
    // si los props cambiaron
    if (prevProps.focus !== this.props.focus) {
      // movemos el carrusel para la izquierda o derecha (-1 izquierda, 1 derecha)
      // ej. está en 2 y antes estaba en 1 entonces se mueve a la derecha
      this.move(this.props.focus - prevProps.focus);
    }
  }

  calculateSizes = () => {
    // obtenemos la lista de elementos del DOM de los children
    const children = this.$carousel.current.children;
    // obtenemos el width del elemento que representa nuestro carrusel
    const pageWidth = this.$carousel.current.clientWidth;

    const { elements } = Array.from(children) // convertimos a un array
      .map(child => child.getBoundingClientRect()) // obtenemos su posición en x/y y su tamaño en width/heigh
      .map(({ x, width }) => ({
        start: x, // guardamos x como start
        width, // guardamos el width
        end: x + width // calculamos donde termina el elemento sumando x y width
      }))
      .reduce(
        (result, { end, start, width }) => {
          // calculamos la paǵina (abajo vamos a ver la explicación)
          const page = Math.ceil(
            (end + result.rest + this.props.leftPadding) / pageWidth
          );

          // devolvemos el resto de la página, la última página calculada y la lista de elementos con su página
          return {
            lastPage: result.lastPage !== page ? page : result.lastPage,
            elements: result.elements.concat({ width, start, end, page }),
            rest:
              result.lastPage !== page
                ? pageWidth * result.lastPage - start
                : result.rest
          };
        },
        { rest: 0, lastPage: 1, elements: [] } // empezamos el reduce con resto 0, página 1 y sin elementos
      );

    // devolvemos la lista de elementos
    return elements;
  };

  move = (direction = 0) => {
    // obtenemos los tamaños de todos los elementos la primera vez
    // o los traemos de los que ya calculamos en this.sizes.
    this.sizes = this.sizes || this.calculateSizes();
    // obtenemos la página a la que pertenece el nuevo elemento
    const { page } = this.sizes[this.props.focus];
    // si la página no cambió no hacemos nada
    if (this.state.currentPage === page) return;
    // obtenemos el punto de inicio del primer elemento de la página
    const { start } = this.sizes.find(element => element.page === page);
    // actualizamos el estado
    this.setState(state => ({
      // guardamos la nueva página
      currentPage: page,
      // guardamos la nueva posición en X usando el punto de inicio menos el leftPadding
      x: start - this.props.leftPadding < 0 ? 0 : start - this.props.leftPadding
    }));
  };

  render() {
    // armamos nuestro objeto con los estilos que vamos a aplicar para mover el carrusel
    const style = {
      transition: "transform 200ms linear", // agregamos una transición de 200ms linear a la propiedad transform
      transform: `translateX(-${this.state.x}px)` // aplicamos un translateX en base a un valor del state llamado x
    };

    return (
      <this.props.component
        ref={this.$carousel}
        children={this.props.children}
        style={style} // nuestro componente custom debe soportar un prop `style` para aplicar estilos inline
      />
    );
  }
}

export default Carousel;