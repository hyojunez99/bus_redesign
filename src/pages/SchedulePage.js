import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import BusData from "../assets/data/BusData.json";
import SeatModal from "../components/SeatModal/SeatModal";

import "./SchedulePage.scss";

const SchedulePage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const [selectedBus, setSelectedBus] = useState(null);
  const [selectedSeat, setSelectedSeat] = useState(null);

  if (!state) {
    return (
      <div className="schedule-page">
        <h2>잘못된 접근입니다.</h2>

        <button className="home-btn" onClick={() => navigate("/")}>
          홈으로 이동
        </button>
      </div>
    );
  }

  console.log("선택 출발지 :", state.departure);
  console.log("선택 도착지 :", state.arrival);
  console.log("BusData :", BusData);

  const filteredBus = BusData.filter(
    (bus) =>
      bus.departure.trim() === state.departure.trim() &&
      bus.arrival.trim() === state.arrival.trim() &&
      (state.grade === "전체" || bus.grade === state.grade),
  );

  console.log("검색결과 :", filteredBus);

  return (
    <div className="schedule-page">
      <h1 className="schedule-title">버스 조회 결과</h1>

      <div className="schedule-info">
        <p>
          <strong>출발지</strong> : {state.departure}
        </p>

        <p>
          <strong>도착지</strong> : {state.arrival}
        </p>

        <p>
          <strong>가는날</strong> : {state.departureDate}
        </p>

        {state.tripType === "round" && (
          <p>
            <strong>오는날</strong> : {state.returnDate}
          </p>
        )}

        <p>
          <strong>등급</strong> : {state.grade}
        </p>
      </div>

      {filteredBus.length === 0 ? (
        <div className="empty-result">조회된 버스가 없습니다.</div>
      ) : (
        <div className="bus-list">
          {filteredBus.map((bus) => (
            <article key={bus.id} className="bus-card">
              <div className="bus-route">
                <h3>
                  {bus.departure} → {bus.arrival}
                </h3>

                <p>
                  {bus.departureTime} ~ {bus.arrivalTime}
                </p>

                <p>{bus.duration}</p>
              </div>

              <div className="bus-info">
                <p>등급 : {bus.grade}</p>
                <p>잔여좌석 : {bus.remainSeat}석</p>
              </div>

              <div className="bus-price">
                <h3>{bus.price.toLocaleString()}원</h3>

                <button
                  type="button"
                  className="reserve-btn"
                  onClick={() => {
                    setSelectedBus(bus);
                    setSelectedSeat(null);
                  }}
                >
                  예매하기
                </button>
              </div>
            </article>
          ))}
        </div>
      )}

      {selectedBus && (
        <SeatModal
          bus={selectedBus}
          selectedSeat={selectedSeat}
          setSelectedSeat={setSelectedSeat}
          onClose={() => {
            setSelectedBus(null);
            setSelectedSeat(null);
          }}
        />
      )}
    </div>
  );
};

export default SchedulePage;
