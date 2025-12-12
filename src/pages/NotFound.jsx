/**
 * PÁGINA: 404 Not Found
 * 
 * Se muestra cuando:
 * - El usuario intenta acceder a una ruta que no existe
 * - Configurado en main.jsx con Route path="*"
 * 
 * Funcionalidad:
 * - Botón para volver al home
 * - Diseño simple y amigable (emoji 🔍 + mensaje claro)
 */

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NotFound.css';

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="notfound-container">
      <div className="notfound-content">
        <div className="notfound-emoji">🔍</div>
        <div className="notfound-code">404</div>
        <h1>¡Oops! Página No Encontrada</h1>
        <p>
          La página que estás buscando no existe o fue movida. 
          No te preocupes, te llevamos de vuelta al inicio.
        </p>
        <div className="notfound-buttons">
          <button 
            onClick={() => navigate('/')} 
            className="notfound-btn notfound-btn-primary"
          >
            🏠 Volver al Inicio
          </button>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
