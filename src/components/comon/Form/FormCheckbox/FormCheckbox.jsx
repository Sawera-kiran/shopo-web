import "./FormCheckbox.css";

function FormCheckbox({
  label,
  checked,
  onChange,
}) {
  return (
    <label className="checkbox-wrapper">

      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />

      <span className="checkbox-text">
        {label}
      </span>

    </label>
  );
}

export default FormCheckbox;