function FancyInput({ label, name, value, handleChange }) {
  return (
    <label>
      {label}
      <input name={name} value={value} onChange={handleChange} />
    </label>
  );
}

export default FancyInput;
