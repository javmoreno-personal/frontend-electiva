
// Estudiantes.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Estudiantes = () => {
  const [estudiantes, setEstudiantes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://universidadelectiva2.somee.com/api/Estudiante/GetAll');
        setEstudiantes(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Lista de Estudiantes</h2>
      <ul>
        {estudiantes.map((estudiante) => (
          <li key={estudiante.Id}>{estudiante.Nombres} {estudiante.Apellidos}</li>
        ))}
      </ul>
    </div>
  );
};

export default Estudiantes;
