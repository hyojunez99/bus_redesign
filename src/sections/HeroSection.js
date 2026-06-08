import { useState } from "react";

import "./HeroSection.scss";

import ReservationForm from "../components/ReservationForm/ReservationForm";
import ReservationCheckForm from "../components/ReservationCheckForm/ReservationCheckForm";

import NoticeData from "../assets/data/NoticeData.json";

import HeroBg from "../assets/images/bg.png";

const HeroSection = () => {
  const [activeTab, setActiveTab] = useState("reservation");

  return (
    <section id="hero">
      <div className="hero-bg">
        <img src={HeroBg} alt="배경이미지" />
        <div className="hero-inner">
          <div className="hero-title">
            <span>더 빠르게, 더 편리하게</span>

            <h2>당신의 여정을 연결합니다</h2>

            <p>전국 고속버스 예매를 한 번에 쉽고 빠르게</p>
          </div>

          <div className="hero-content">
            <div className="reservation-card">
              <div className="reservation-tab">
                <button
                  className={activeTab === "reservation" ? "active" : ""}
                  onClick={() => setActiveTab("reservation")}
                >
                  버스예매
                </button>

                <button
                  className={activeTab === "check" ? "active" : ""}
                  onClick={() => setActiveTab("check")}
                >
                  예매확인
                </button>
              </div>

              {activeTab === "reservation" ? (
                <ReservationForm />
              ) : (
                <ReservationCheckForm />
              )}
            </div>

            <div className="notice-wrap">
              <div className="notice-header">
                <h3>공지사항</h3>

                <button type="button">전체보기</button>
              </div>

              <ul className="notice-list">
                {NoticeData.map((item) => (
                  <li key={item.id} className="notice-item">
                    <p>{item.title}</p>

                    <span>{item.day}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="recent-search">
            <span>최근 검색</span>

            <div className="chip-list">
              <button>서울 → 부산</button>
              <button>서울 → 강릉</button>
              <button>서울 → 대전</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
