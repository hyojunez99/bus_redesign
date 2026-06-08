import "./Chip.scss";

const Chip = ({ children, variant = "default", onClick }) => {
  return (
    <button type="button" className={`chip chip--${variant}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Chip;
