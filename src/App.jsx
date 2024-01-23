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
      <form onsubmit = {handlesubmit(onSubmit)} action="">
      <div>
        <label>Nom</label>
        <input type="text" name='name' {...register("name")} />
      </div>
<div>
  <label>Telephone</label>
</div>
      </form>
  )
}

export default App
