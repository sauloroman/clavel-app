import { useEffect, useRef } from 'react';
import { useUi } from '../../../hooks';
import logo from '../../../assets/img/logo-matrimonio.png';

export const Navigation = () => {

  const navigationRef = useRef();
  const { isMenuOpen, onCloseMenu, onShowMenu } = useUi();

  useEffect(() => {
    if ( isMenuOpen ) {
      navigationRef.current.classList.add('show-element');
      return;
    }

    navigationRef.current.classList.remove('show-element');
  }, [ isMenuOpen ])

  return (
    <div className="flex flex-center">
      <nav className="navigation" ref={ navigationRef }>
        <div className="navigation__iconClose">
          <p>Cerrar</p>
          <i onClick={ onCloseMenu } className="bx bx-x navigation__icon navigation__icon-close"></i>
        </div>
        <ul className="navigation__list flex">
          <li className="navigation__item">
            <a className="navigation__link" href="#">
              Fecha
            </a>
            <div className="navigation__separator"></div>
          </li>
          <li className="navigation__item">
            <a className="navigation__link" href="#">
              Vestimenta
            </a>
            <div className="navigation__separator"></div>
          </li>
          <li className="navigation__item">
            <a className="navigation__link" href="#">
              Ubicación
            </a>
            <div className="navigation__separator"></div>
          </li>
          <li className="navigation__item">
            <a className="navigation__link" href="#">
              Itinerario
            </a>
            <div className="navigation__separator"></div>
          </li>
          <li className="navigation__item">
            <a className="navigation__link" href="#">
              Galería
            </a>
            <div className="navigation__separator"></div>
          </li>
          <li className="navigation__item">
            <a className="navigation__link" href="#">
              Confirmación
            </a>
          </li>
        </ul>
        <footer className="navigation__footer">
          <img src={ logo } alt="Claudia y Mario Logo" />
        </footer>
      </nav>
      <div className="navigation__iconMenu">
        <p>Menú</p>
        <i onClick={ onShowMenu } className="bx bx-menu navigation__icon navigation__icon-menu"></i>
      </div>
    </div>
  );
};
