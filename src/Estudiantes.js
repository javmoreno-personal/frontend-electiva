import React, { useEffect, useState } from 'react';
import axios from 'axios';

const fetchEstudiantes = async () => {
  try {
    const response = await axios.get('http://universidadelectiva2.somee.com/api/Estudiante/GetAll');
    return response.data;
  } catch (error) {
    console.error('Error al cargar estudiantes:', error);
    throw error; // Rethrow the error to indicate that the data fetching failed
  }
};

const Estudiantes = () => {
  const [estudiantes, setEstudiantes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const estudiantesData = await fetchEstudiantes();
        setEstudiantes(estudiantesData);
      } catch (error) {
        // Handle error, e.g., show an error message to the user
        console.error('Error al cargar estudiantes:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs once after the initial render

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
