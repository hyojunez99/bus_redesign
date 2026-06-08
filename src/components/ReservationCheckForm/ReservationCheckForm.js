import { useState } from "react";

import Input from "../Input/Input";
import Button from "../Button/Button";

import "./ReservationCheckForm.scss";

const ReservationCheckForm = () => {
  const [activeTab, setActiveTab] = useState("phone");

  return (
    <div className="reservation-check">
      <div className="check-tab">
        <button
          className={activeTab === "phone" ? "active" : ""}
          onClick={() => setActiveTab("phone")}
        >
          휴대폰 번호 찾기
        </button>

        <button
          className={activeTab === "card" ? "active" : ""}
          onClick={() => setActiveTab("card")}
        >
          카드번호 찾기
        </button>
      </div>

      {activeTab === "phone" ? (
        <>
          <Input label="휴대폰 번호" placeholder="- 없이 입력하세요" />

          <div className="input-with-button">
            <Input label="인증번호" placeholder="인증번호 입력" />

            <Button size="md">인증번호 발송</Button>
          </div>
        </>
      ) : (
        <>
          <Input label="카드번호" placeholder="카드번호를 입력하세요" />

          <Input label="비밀번호" placeholder="비밀번호 앞 2자리" />
        </>
      )}

      <Button variant="primary" size="lg">
        조회하기
      </Button>
    </div>
  );
};

export default ReservationCheckForm;
