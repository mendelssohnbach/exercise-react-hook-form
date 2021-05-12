// https://react-hook-form.com/jp/get-started
// エラーを処理する

import { useForm } from 'react-hook-form';

export default function App() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('firstName', { required: true })} />
      {errors.firstName?.type === 'required' && 'First name is required'}

      <input {...register('lastName', { required: true })} />
      {errors.lastName && 'Last name is required'}

      <input type="submit" />
    </form>
  );
}
