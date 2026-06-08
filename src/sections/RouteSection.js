import "./RouteSection.scss";

import RouteData from "../assets/data/RouteData.json";

const RouteSection = () => {
  return (
    <section id="route">
      <div className="route-inner">
        <div className="section-title">
          <h2>인기 노선</h2>
          <p>많은 이용객이 찾는 노선을 확인해보세요</p>
        </div>

        <div className="route-grid">
          {RouteData.map((route) => (
            <article key={route.id} className="route-card">
              <div className="route-city">
                <span>{route.departure}</span>

                <div className="route-line" />

                <span>{route.arrival}</span>
              </div>

              <div className="route-info">
                <p>{route.time}</p>

                <strong>{route.price}</strong>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RouteSection;
