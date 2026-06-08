import { createPortal } from "react-dom";
import { useEffect, useMemo, useState } from "react";

import "./TerminalModal.scss";

import Terminals from "../../assets/data/Terminals.json";

const REGIONS = [
  "전체",
  "서울",
  "인천/경기",
  "강원",
  "대전/충남",
  "충북",
  "광주/전남",
  "전북",
  "부산/경남",
  "대구/경북",
];

const TerminalModal = ({ title, onClose, onSelect }) => {
  const [selectedRegion, setSelectedRegion] = useState("전체");
  const [search, setSearch] = useState("");

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const filteredTerminals = useMemo(() => {
    return Terminals.filter((item) => {
      const regionMatch =
        selectedRegion === "전체" ? true : item.region === selectedRegion;

      const searchMatch =
        item.name.includes(search) || item.address.includes(search);

      return regionMatch && searchMatch;
    });
  }, [selectedRegion, search]);

  return createPortal(
    <div className="terminal-modal" onClick={onClose}>
      <div
        className="terminal-modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="terminal-modal-header">
          <div>
            <h2>{title}</h2>

            <p>터미널을 선택해주세요.</p>
          </div>

          <button type="button" className="close-btn" onClick={onClose}>
            ✕
          </button>
        </div>

        <div className="search-box">
          <input
            type="text"
            placeholder="터미널명을 검색하세요"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="region-tabs">
          {REGIONS.map((region) => (
            <button
              key={region}
              type="button"
              className={selectedRegion === region ? "active" : ""}
              onClick={() => setSelectedRegion(region)}
            >
              {region}
            </button>
          ))}
        </div>

        <div className="terminal-grid">
          {filteredTerminals.length > 0 ? (
            filteredTerminals.map((terminal) => (
              <button
                key={terminal.id}
                type="button"
                className="terminal-card"
                onClick={() => onSelect(terminal.name)}
              >
                <h4>{terminal.name}</h4>

                <p>{terminal.address}</p>
              </button>
            ))
          ) : (
            <div className="empty-terminal">검색 결과가 없습니다.</div>
          )}
        </div>
      </div>
    </div>,
    document.body,
  );
};

export default TerminalModal;
