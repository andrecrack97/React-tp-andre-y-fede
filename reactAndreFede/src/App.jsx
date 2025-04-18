import { useState } from 'react';
import './App.css';
import Formulario from './Componentes/Formulario';
import ListaReservas from './Componentes/ListaReservas';

function App() {
  const [reservas, setReservas] = useState([
    {
      id: 1,
      nombre: 'Juan Pérez',
      dia: 'Sábado',
      horario: '19:00',
      cancha: 'Cancha 1',
    },
    {
      id: 2,
      nombre: 'María López',
      dia: 'Domingo',
      horario: '17:00',
      cancha: 'Cancha 2',
    },
    {
      id: 3,
      nombre: 'Carlos Gómez',
      dia: 'Viernes',
      horario: '20:00',
      cancha: 'Cancha 3',
    },
  ]);

  return (
    <div className="contenedor">
      <h1>Serrano Corner - Reservas Fútbol 5</h1>
      <div className="app">
        <Formulario />
        <ListadoReservas reservas={reservas} />
      </div>
    </div>
  );
}

export default App;