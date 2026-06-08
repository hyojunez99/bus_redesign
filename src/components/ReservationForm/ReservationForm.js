import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Input from "../Input/Input";
import Button from "../Button/Button";
import TerminalModal from "../TerminalModal/TerminalModal";

import "./ReservationForm.scss";

const ReservationForm = () => {
  const navigate = useNavigate();

  const [tripType, setTripType] = useState("oneway");

  const [departure, setDeparture] = useState("");
  const [arrival, setArrival] = useState("");

  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");

  const [modalType, setModalType] = useState(null);

  const [grade, setGrade] = useState("전체");
  const [isGradeOpen, setIsGradeOpen] = useState(false);

  const gradeOptions = ["전체", "프리미엄", "우등", "일반"];

  const handleSwap = () => {
    setDeparture(arrival);
    setArrival(departure);
  };

  const handleSearch = () => {
    console.log("조회 클릭");

    if (!departure) {
      alert("출발지를 선택해주세요.");
      return;
    }

    if (!arrival) {
      alert("도착지를 선택해주세요.");
      return;
    }

    if (departure === arrival) {
      alert("출발지와 도착지는 같을 수 없습니다.");
      return;
    }

    if (!departureDate) {
      alert("가는날을 선택해주세요.");
      return;
    }

    if (tripType === "round" && !returnDate) {
      alert("오는날을 선택해주세요.");
      return;
    }

    navigate("/schedule", {
      state: {
        tripType,
        departure,
        arrival,
        departureDate,
        returnDate,
        grade,
      },
    });
  };

  return (
    <>
      <div className="trip-type">
        <button
          type="button"
          className={tripType === "oneway" ? "active" : ""}
          onClick={() => {
            setTripType("oneway");
            setReturnDate("");
          }}
        >
          편도
        </button>

        <button
          type="button"
          className={tripType === "round" ? "active" : ""}
          onClick={() => setTripType("round")}
        >
          왕복
        </button>
      </div>

      <div className="reservation-form">
        <div className="route-field">
          <div
            className="input-wrapper"
            onClick={() => setModalType("departure")}
          >
            <Input
              label="출발지"
              placeholder="출발지를 선택하세요"
              value={departure}
              readOnly
            />
          </div>

          <button type="button" className="swap-btn" onClick={handleSwap}>
            ↔
          </button>

          <div
            className="input-wrapper"
            onClick={() => setModalType("arrival")}
          >
            <Input
              label="도착지"
              placeholder="도착지를 선택하세요"
              value={arrival}
              readOnly
            />
          </div>
        </div>

        <div className="date-field">
          <label>가는날</label>

          <input
            type="date"
            value={departureDate}
            min={new Date().toISOString().split("T")[0]}
            onChange={(e) => {
              const newDate = e.target.value;

              setDepartureDate(newDate);

              if (returnDate && returnDate < newDate) {
                setReturnDate("");
              }
            }}
          />
        </div>

        {tripType === "round" && (
          <div className="date-field">
            <label>오는날</label>

            <input
              type="date"
              value={returnDate}
              min={departureDate || new Date().toISOString().split("T")[0]}
              onChange={(e) => setReturnDate(e.target.value)}
            />
          </div>
        )}

        <div className="grade-field">
          <label>등급</label>

          <button
            type="button"
            className="grade-select"
            onClick={() => setIsGradeOpen(!isGradeOpen)}
          >
            {grade}
          </button>

          {isGradeOpen && (
            <ul className="grade-dropdown">
              {gradeOptions.map((item) => (
                <li key={item}>
                  <button
                    type="button"
                    onClick={() => {
                      setGrade(item);
                      setIsGradeOpen(false);
                    }}
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <Button variant="primary" size="lg" onClick={handleSearch}>
        조회하기
      </Button>

      {modalType && (
        <TerminalModal
          title={modalType === "departure" ? "출발지 선택" : "도착지 선택"}
          onClose={() => setModalType(null)}
          onSelect={(terminalName) => {
            if (modalType === "departure") {
              if (terminalName === arrival) {
                alert("도착지와 동일한 터미널은 선택할 수 없습니다.");
                return;
              }

              setDeparture(terminalName);
            } else {
              if (terminalName === departure) {
                alert("출발지와 동일한 터미널은 선택할 수 없습니다.");
                return;
              }

              setArrival(terminalName);
            }

            setModalType(null);
          }}
        />
      )}
    </>
  );
};

export default ReservationForm;
