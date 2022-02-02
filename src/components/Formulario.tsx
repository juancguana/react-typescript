import { useForm } from '../hooks/useForm';
export const Formulario = () => {
  interface FormData {
    email: string;
    name: string;
    age: number;
  }

  const { email, name, age, handleChange, formulario } = useForm<FormData>({
    email: 'juan@gmail.com',
    name: 'Juan Guana',
    age: 27,
  });

  return (
    <form autoComplete='off'>
      <div className='mb-3'>
        <label className='form-label'>Email:</label>

        <input
          type='email'
          className='form-control'
          name='email'
          value={name}
          onChange={handleChange}
        />
      </div>
      <div className='mb-3'>
        <label className='form-label'>Nombre:</label>
        <input
          type='text'
          className='form-control'
          name='name'
          value={email}
          onChange={handleChange}
        />
      </div>
      <div className='mb-3'>
        <label className='form-label'>Edad:</label>
        <input
          type='number'
          className='form-control'
          name='age'
          value={age}
          onChange={handleChange}
        />
      </div>
      <pre>{JSON.stringify(formulario)}</pre>
    </form>
  );
};
