import "./FormInput.css";

function FormInput({
  label,
  type = "text",
  placeholder = "",
  value,
  onChange,
  required = false,
  disabled = false,
  autoComplete = "off",
  error = "",
}) {
  return (
    <div className="form-group">

      {label && (
        <label className="form-label">
          {label}
          {required && <span>*</span>}
        </label>
      )}

      <input
        className={`form-input ${error ? "input-error" : ""}`}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        autoComplete={autoComplete}
      />

      {error && (
        <small className="form-error">
          {error}
        </small>
      )}

    </div>
  );
}

export default FormInput;