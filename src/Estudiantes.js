// src/Estudiantes.js

// ... (importaciones)

const Estudiantes = () => {
  const [estudiantes, setEstudiantes] = useState([]);

  useEffect(() => {
    // Lógica para cargar estudiantes desde la API
    const fetchEstudiantes = async () => {
      try {
        const response = await axios.get('http://universidadelectiva2.somee.com/api/Estudiante/GetAll');
        setEstudiantes(response.data);
      } catch (error) {
        console.error('Error al cargar estudiantes:', error);
      }
    };

    fetchEstudiantes();
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
