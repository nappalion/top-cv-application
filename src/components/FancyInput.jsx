function FancyInput({ label, name, handleChange }) {
  return (
    <label>
      {label}
      <input name={name} onChange={handleChange} />
    </label>
  );
}

export default FancyInput;
