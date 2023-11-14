
// Estudiantes.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

// src/Estudiantes.js

// ... (importaciones)

const fetchEstudiantes = async () => {
  try {
    const response = await axios.get('http://universidadelectiva2.somee.com/api/Estudiante/GetAll');
    return response.data;
  } catch (error) {
    console.error('Error al cargar estudiantes:', error);
  }
};

const Estudiantes = () => {
  const [estudiantes, setEstudiantes] = useState([]);

  useEffect(async () => {
    // Cargar estudiantes desde la API
    const estudiantes = await fetchEstudiantes();
    setEstudiantes(estudiantes);
  }, []);

  return (
    <div>
      <h1>Listado de Estudiantes</h1>
      <ul>
        {estudiantes.map((estudiante) => (
          <li key={estudiante.Id}>{estudiante.Nombres} {estudiante.Apellidos}</li>
        ))}
      </ul>
    </div>
  );
};

export default Estudiantes;