import React, { useEffect, useState } from 'react';
import axios from 'axios';

const fetchEstudiantes = async () => {
  try {
    const response = await axios.get('http://universidadelectiva2.somee.com/api/Estudiante/GetAll');
    return response.data.DatosRespuesta;
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
      <table>
        <thead>
          <tr>
            <th>Identificacion</th>
            <th>Nombres</th>
            <th>Apellidos</th>
            <th>Edad</th>
            <th>IdGenero</th>
            <th>Curso</th>
            <th>Id</th>
            <th>Activo</th>
          </tr>
        </thead>
        <tbody>
          {estudiantes.map((estudiante) => (
            <tr key={estudiante.Id}>
              <td>{estudiante.Identificacion}</td>
              <td>{estudiante.Nombres}</td>
              <td>{estudiante.Apellidos}</td>
              <td>{estudiante.Edad}</td>
              <td>{estudiante.IdGenero}</td>
              <td>{estudiante.Curso}</td>
              <td>{estudiante.Id}</td>
              <td>{estudiante.Activo.toString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Estudiantes;
