import "./QuickMenuSection.scss";

import QuickMenuData from "../assets/data/QuickMenuData.json";

const QuickMenuSection = () => {
  return (
    <section id="quick-menu">
      <div className="quick-menu-inner">
        <div className="section-title">
          <h2>빠른 서비스</h2>
          <p>자주 찾는 서비스를 빠르게 이용해보세요</p>
        </div>

        <div className="quick-menu-grid">
          {QuickMenuData.map((item) => (
            <button key={item.id} className="quick-menu-card">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickMenuSection;
