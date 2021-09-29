import { useState } from 'react';

const MadlibsForm = ({ processForm }) => {
  const initialState = {
    noun1: '',
    noun2: '',
    adjective: '',
    color: ''
  }

  const [formData, setFormData] = useState(initialState);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(data => ({
      ...data,
      [name]: value
    }))
  }

  const handleSubmit = e => {
    e.preventDefault();
    processForm({ ...formData });
    setFormData(initialState);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        id='noun1'
        type='text'
        name='noun1'
        placeholder='noun1'
        value={formData.noun1}
        onChange={handleChange} />
      <br />

      <input
        id='noun2'
        type='text'
        name='noun2'
        placeholder='noun2'
        value={formData.noun2}
        onChange={handleChange} />
      <br />

      <input
        id='adjective'
        type='text'
        name='adjective'
        placeholder='adjective'
        value={formData.adjective}
        onChange={handleChange} />
      <br />

      <input
        id='color'
        type='text'
        name='color'
        placeholder='color'
        value={formData.color}
        onChange={handleChange} />
      <br />

      <button>Get Story</button>
    </form>
  )
}

export default MadlibsForm;