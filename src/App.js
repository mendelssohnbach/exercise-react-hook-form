// https://react-hook-form.com/jp/get-started
// 制御された Input

import Select from 'react-select';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Checkbox } from '@material-ui/core';

const App = () => {
  const { handleSubmit, control, reset } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="MyCheckbox"
        control={control}
        defaultValue={false}
        rules={{ required: true }}
        render={({ field }) => <Checkbox {...field} />}
      />
      <input type="submit" />
    </form>
  );
};

export default App;
