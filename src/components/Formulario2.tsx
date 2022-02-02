import { useForm } from '../hooks/useForm';
export const Formulario2 = () => {
  const { postal, city, handleChange, formulario } = useForm({
    postal: '1711011',
    city: 'Quito',
  });

  return (
    <form autoComplete='off'>
      <div className='mb-3'>
        <label className='form-label'>Ciudad:</label>

        <input
          type='text'
          className='form-control'
          name='city'
          value={city}
          onChange={handleChange}
        />
      </div>
      <div className='mb-3'>
        <label className='form-label'>Código postal:</label>
        <input
          type='text'
          className='form-control'
          name='postal'
          value={postal}
          onChange={handleChange}
        />
      </div>
      <pre>{JSON.stringify(formulario)}</pre>
    </form>
  );
};
