import './Reserva.css';

const Reserva = ({ reserva }) => {
  return (
    <div className="reserva">
      <p><strong>Nombre:</strong> {reserva.nombre}</p>
      <p><strong>Día:</strong> {reserva.dia}</p>
      <p><strong>Horario:</strong> {reserva.horario}</p>
      <p><strong>Cancha:</strong> {reserva.cancha}</p>
    </div>
  );
};

export default Reserva;