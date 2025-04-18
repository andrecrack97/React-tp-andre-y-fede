import Reserva from './Reserva';
import './ListadoReservas.css';

const ListadoReservas = ({ reservas }) => {
  return (
    <div className="listado">
      <h2>Listado</h2>
      {reservas.map((reserva) => (
        <Reserva key={reserva.id} reserva={reserva} />
      ))}
    </div>
  );
};

export default ListaReservas;