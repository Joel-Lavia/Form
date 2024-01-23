import { useState } from 'react'
import './App.css'
import { useForm } from 'react-hook-form';

function App() {
const [formData,setFormData] = useState(
  {
    name:"",
    phone:"",
    email:"",
    age:"18",
    gender:""
  }
);

const{register, handlesubmit, formState:{errors}} = useForm({defaultValues:formData});

const onSubmit = (data) => {
console.log(data);
alert(`${data.name} a ete enregistre`)
}

  return (
      <form onsubmit = {handlesubmit(onSubmit)}>
      <div>
        <label>Nom</label>
        <input type="text" name='name' {...register("name")} />
      </div>
<div>
  <label>Telephone</label>
  <input name='Phone' type="text" {...register("Phone")}/>
</div>
<div>
  <label>Email</label>
  <input type="email" name='email' {...register("email") }/>
</div>

<div>
  <label htmlFor="">age</label>
  <input type="number" name="age" {...register("age")} />
</div>
<div>
  <label>Genre</label>
  <select {...register("gender")}>
<option value="female">Femme</option>
<option value="male">Homme</option>
<option value="other">Autre</option>
  </select>
</div>
<button type='submit'>Enregistrer</button>
      </form>
  )
}

export default App
