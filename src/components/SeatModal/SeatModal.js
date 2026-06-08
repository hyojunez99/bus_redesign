import { useNavigate } from "react-router-dom";
import "./SeatModal.scss";

const seats = Array.from({ length: 28 }, (_, i) => i + 1);

const SeatModal = ({ bus, selectedSeat, setSelectedSeat, onClose }) => {
  const navigate = useNavigate();

  const handleConfirm = () => {
    alert(
      `${bus.departure} → ${bus.arrival}\n${selectedSeat}번 좌석 예매가 완료되었습니다.`,
    );

    onClose();

    navigate("/");
  };

  return (
    <div className="seat-overlay">
      <div className="seat-modal">
        <div className="seat-header">
          <h2>좌석 선택</h2>

          <button type="button" onClick={onClose}>
            ✕
          </button>
        </div>

        <div className="bus-info-box">
          <h3>
            {bus.departure} → {bus.arrival}
          </h3>

          <p>
            {bus.departureTime} ~ {bus.arrivalTime}
          </p>
        </div>

        <div className="seat-layout">
          {seats.map((seat) => (
            <button
              key={seat}
              type="button"
              className={`seat ${selectedSeat === seat ? "selected" : ""}`}
              onClick={() => setSelectedSeat(seat)}
            >
              {seat}
            </button>
          ))}
        </div>

        <button
          type="button"
          className="confirm-btn"
          disabled={!selectedSeat}
          onClick={handleConfirm}
        >
          좌석 선택 완료
        </button>
      </div>
    </div>
  );
};

export default SeatModal;
