import "./MobileAppSection.scss";

import MobileMockup from "../assets/images/mobile-app.png";
import GoogleBtn from "../assets/images/GooglePlay-btn.png";
import AppBtn from "../assets/images/AppStore-btn.png";

import MobileAppData from "../assets/data/MobileAppData.json";

const MobileAppSection = () => {
  const leftFeatures = MobileAppData.filter((item) => item.position === "left");

  const rightFeatures = MobileAppData.filter(
    (item) => item.position === "right",
  );

  return (
    <section id="mobile-app">
      <div className="mobile-app-inner">
        <div className="mobile-app-content">
          <span>KOBUS APP</span>

          <h2>
            언제 어디서나
            <br />
            모바일로 간편하게 예매
          </h2>

          <p>
            모바일 티켓 발급부터 예매 조회, 승차권 변경까지 한 번에 이용할 수
            있습니다.
          </p>

          <div className="app-button-group">
            <button type="button">
              <img src={AppBtn} alt="앱스토어" />
            </button>

            <button type="button">
              <img src={GoogleBtn} alt="구글플레이" />
            </button>
          </div>
        </div>

        <div className="mobile-app-showcase">
          <div className="app-feature-group left">
            {leftFeatures.map((item) => (
              <article key={item.id} className="app-feature-card">
                <span className="app-feature-number">{item.number}</span>

                <div className="app-feature-content">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mobile-phone">
            <img src={MobileMockup} alt="모바일 앱" />
          </div>

          <div className="app-feature-group right">
            {rightFeatures.map((item) => (
              <article key={item.id} className="app-feature-card">
                <span className="app-feature-number">{item.number}</span>

                <div className="app-feature-content">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileAppSection;
