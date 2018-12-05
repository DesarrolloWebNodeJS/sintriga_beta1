import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';

const parallaxStyle = {
  parallax: {
    position: 'absolute',
    height: '100vh',
    width: '100%',
    zIndex: -1
  }
};

class Fondo extends Component {
  constructor(props) {
    super(props);
    var windowScrollTop = window.pageYOffset / 3;
    this.state = {
      imagenes: props.imagenes,
      efectos: ['zoom', 'fade', 'zoom'],
      currentSlide: 0,
      transform: 'translate3d(0,' + windowScrollTop + 'px,0)'
    };
    this.runSlideShow = this.runSlideShow.bind(this);
    this.autoSlideshow = this.autoSlideshow.bind(this);
    this.resetTransform = this.resetTransform.bind(this);
  }
  componentDidMount() {
    this.runSlideShow();
    this.resetTransform();
    window.addEventListener('scroll', this.resetTransform);
  }

  runSlideShow() {
    let intervalId = setInterval(this.autoSlideshow, 5000);
    this.setState({
      intervalId
    });
  }

  autoSlideshow() {
    this.setState({
      currentSlide: (this.state.currentSlide + 1) % this.state.imagenes.length
    });
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
    window.removeEventListener('scroll', this.resetTransform);
  }

  resetTransform() {
    var windowScrollTop = window.pageYOffset / 3;
    this.setState({
      transform: 'translate3d(0,' + windowScrollTop + 'px,0)'
    });
  }

  render() {
    const { classes, children, imagenes } = this.props;
    const { efectos, currentSlide, transform } = this.state;
    const listaImagenes = imagenes.map((imagen, i) => {
      return (
        <div
          className={`slide ${efectos[i]} ${
            currentSlide === i ? 'mostrando-' + efectos[i] : ''
          }`}
          key={i}
          style={{
            backgroundImage: `url(${imagen})`,
            transform
          }}
        />
      );
    });

    return (
      <div>
        <div className={classes.parallax}>{listaImagenes}</div>
        {children}
      </div>
    );
  }
}

Fondo.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node,
  imagenes: PropTypes.array
};

export default withStyles(parallaxStyle)(Fondo);
