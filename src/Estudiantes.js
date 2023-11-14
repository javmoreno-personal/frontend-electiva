// Import necessary dependencies
import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Function to fetch students from the API
const fetchEstudiantes = async () => {
  try {
    const response = await axios.get('http://universidadelectiva2.somee.com/api/Estudiante/GetAll');
    return response.data;
  } catch (error) {
    console.error('Error al cargar estudiantes:', error);
  }
};

// React component for displaying the list of students
const Estudiantes = () => {
  // State to store the list of students
  const [estudiantes, setEstudiantes] = useState([]);

  // useEffect to fetch students when the component mounts
  useEffect(async () => {
    // Cargar estudiantes desde la API
    const estudiantesData = await fetchEstudiantes();
    setEstudiantes(estudiantesData);
  }, []); // Empty dependency array ensures the effect runs once when the component mounts

  return (
    <div>
      <h1>Listado de Estudiantes</h1>
      <ul>
        {/* Map through the list of students and display their names */}
        {estudiantes.map((estudiante) => (
          <li key={estudiante.Id}>{estudiante.Nombres} {estudiante.Apellidos}</li>
        ))}
      </ul>
    </div>
  );
};

export default Estudiantes;
