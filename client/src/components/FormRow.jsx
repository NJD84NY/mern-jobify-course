const FormRow = ({ type, name, labelText, onChange }) => {
  return (
    <div className='form-row'>
      <label htmlFor={name} className='form-label'>
        {labelText || name}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        className='form-input'
        onChange={onChange}
        required
      />
    </div>
  );
};
export default FormRow;
