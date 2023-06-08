import React, { Component } from 'react';
import HumanTest from './HumanTest';
import image from '../images/image-login.png';
import Card from 'react-bootstrap/Card';

export default class Login extends Component {
  render() {
    const { isAnswerCorrect } = this.props;

    return (
      <div className="d-flex justify-content-center">
        <Card style={{ maxWidth: '400px', marginTop: '5rem' }}>
          <Card.Body>
            <Card.Title className="text-center">Inicio de sesión</Card.Title>
            <div className="text-center mb-3">
              <img src={image} className="center" alt="Imagen de inicio de sesión" />
            </div>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Correo electrónico"
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Contraseña"
                required
              />
            </div>

            <div className="mb-3">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customCheck1"
                />
                <label className="custom-control-label" htmlFor="customCheck1">
                  Recordar
                </label>
              </div>
            </div>

            <div className="mb-3">
              <HumanTest isAnswerCorrect={isAnswerCorrect} />
            </div>

            <div className="d-grid">
              <button type="submit" className="btn btn-primary">
                Iniciar sesión
              </button>
            </div>
            <p className="forgot-password text-right">
              <a href="#">¿Olvidaste tu contraseña?</a>
            </p>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
