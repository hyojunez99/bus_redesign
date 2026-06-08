import "./Input.scss";

const Input = ({
  label,
  placeholder,
  value,
  readOnly = true,
  onClick,
  icon,
}) => {
  return (
    <div className="input">
      {label && <span className="input__label">{label}</span>}

      <button type="button" className="input__field" onClick={onClick}>
        <span
          className={`input__value ${
            !value ? "input__value--placeholder" : ""
          }`}
        >
          {value || placeholder}
        </span>

        {icon && <span className="input__icon">{icon}</span>}
      </button>
    </div>
  );
};

export default Input;
