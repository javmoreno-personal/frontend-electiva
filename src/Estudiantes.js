export default Estudiantes;
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Estudiantes = () => {
  const [estudiantes, setEstudiantes] = useState([]);
  const [estudianteSeleccionado, setEstudianteSeleccionado] = useState(null);

  const fetchEstudiantes = async () => {
    try {
      const response = await axios.get('https://universidadelectiva2.somee.com/api/Estudiante/GetAll');
      setEstudiantes(response.data.DatosRespuesta);
    } catch (error) {
      console.error('Error al cargar estudiantes:', error.message);
    }
  };

  useEffect(() => {
    fetchEstudiantes();
  }, []);

  const showStudentDetails = async (estudianteId) => {
    try {
      const response = await axios.get(`https://universidadelectiva2.somee.com/api/Estudiante/GetById/${estudianteId}`);
      setEstudianteSeleccionado(response.data.DatosRespuesta);
    } catch (error) {
      console.error(`Error al cargar detalles del estudiante ${estudianteId}:`, error.message);
    }
  };

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

      {estudianteSeleccionado && (
        <div>
          <h2>Detalles del Estudiante</h2>
          <p>ID: {estudianteSeleccionado.Id}</p>
          <p>Nombre: {estudianteSeleccionado.Nombres} {estudianteSeleccionado.Apellidos}</p>
          <p>Edad: {estudianteSeleccionado.Edad}</p>
          <p>Curso: {estudianteSeleccionado.Curso}</p>
          {/* Agrega más detalles según tu estructura de datos */}
        </div>
      )}
    </div>
  );
};

export default Estudiantes;
