import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Estudiantes = () => {
  const [estudiantes, setEstudiantes] = useState([]);

  const fetchEstudiantes = async () => {
    try {
      const response = await axios.get('http://universidadelectiva2.somee.com/api/Estudiante/GetAll');
      setEstudiantes(response.data.DatosRespuesta);
    } catch (error) {
      console.error('Error al cargar estudiantes:', error.message);
    }
  };

  useEffect(() => {
    // You can remove the auto-fetch from useEffect if you prefer
    // and use the button to trigger the fetch manually.
    // fetchEstudiantes();
  }, []);

  const showAllStudents = () => {
    fetchEstudiantes();
  };

  return (
    <div>
      <h1>Listado de Estudiantes</h1>
      <button onClick={showAllStudents}>Mostrar Todos</button>
      <table>
        <thead>
          <tr>
            <th>Identificacion</th>
            <th>Nombres</th>
            <th>Apellidos</th>
            <th>Edad</th>
            <th>Curso</th>
            {/* Add more headers based on your data */}
          </tr>
        </thead>
        <tbody>
          {estudiantes.map((estudiante) => (
            <tr key={estudiante.Id}>
              <td>{estudiante.Identificacion}</td>
              <td>{estudiante.Nombres}</td>
              <td>{estudiante.Apellidos}</td>
              <td>{estudiante.Edad}</td>
              <td>{estudiante.Curso}</td>
              {/* Add more cells based on your data */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Estudiantes;
