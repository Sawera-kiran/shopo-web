import "./FormTextarea.css";

function FormTextarea({
  label,
  placeholder,
  value,
  onChange,
  rows = 5,
}) {
  return (
    <div className="form-group">

      {label && (
        <label className="form-label">
          {label}
        </label>
      )}

      <textarea
        className="form-textarea"
        rows={rows}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />

    </div>
  );
}

export default FormTextarea;