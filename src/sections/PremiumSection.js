import "./PremiumSection.scss";

import BusBg from "../assets/images/bus-bg.png";
import PremiumData from "../assets/data/PremiumData.json";

const PremiumSection = () => {
  return (
    <section id="premium">
      <div className="premium-inner">
        <div className="premium-layout">
          <div className="premium-visual">
            <img src={BusBg} alt="프리미엄 버스" />

            <div className="premium-overlay">
              <span>PREMIUM BUS</span>

              <h2>
                더 편안한 여행을 위한
                <br />
                프리미엄 서비스
              </h2>

              <p>
                넓은 좌석과 다양한 편의시설로 더욱 쾌적한 이동 경험을
                제공합니다.
              </p>
            </div>
          </div>

          <div className="premium-feature">
            {PremiumData.map((item) => (
              <article key={item.id} className="premium-feature-card">
                <div className="premium-feature-icon">
                  <img
                    src={require(`../assets/images/icons/${item.icon}`)}
                    alt={item.title}
                  />
                </div>

                <div className="premium-feature-content">
                  <span className="premium-feature-number">{item.number}</span>

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

export default PremiumSection;
