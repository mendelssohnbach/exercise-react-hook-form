// https://react-hook-form.com/jp/get-started
// バリデーションを適用する

import { useForm } from 'react-hook-form';

export default function App() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* 必須かつ最大文字列長さ指定 */}
      <input {...register('firstName', { required: true, maxLength: 20 })} />
      {/* 正規表現ルール適用:アルファベット */}
      <input {...register('lastName', { pattern: /^[A-Za-z]+$/i })} />
      {/* 数値かつ最小値/最大値指定 */}
      <input type="number" {...register('age', { min: 18, max: 99 })} />
      <input type="submit" />
    </form>
  );
}
