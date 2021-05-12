// https://react-hook-form.com/jp/get-started
// 基本的な使用法

import { useForm } from 'react-hook-form';

export default function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  console.log(watch('example')); // 入力値の名前を渡して、入力値を監視する

  return (
    /* "handleSubmit "は、"onSubmit "を呼び出す前に入力を検証します。" */
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* "register "機能を使って、入力した内容をフックに登録します。 */}
      <input defaultValue="test" {...register('example')} />

      {/* 必須または他の標準的なHTML検証ルールによる検証を含む */}
      <input {...register('exampleRequired', { required: true })} />
      {/* フィールドの検証に失敗した場合、エラーを返します。  */}
      {errors.exampleRequired && <span>This field is required</span>}

      <input type="submit" />
    </form>
  );
}
