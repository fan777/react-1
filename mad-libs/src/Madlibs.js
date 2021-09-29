import { useState, useEffect } from 'react';
import MadlibsForm from './MadlibsForm';
import MadlibsTemplate1 from './MadlibsTemplate1';

const Madlibs = () => {
  const [madlibs, setMadlibs] = useState();
  const processForm = (formData) => {
    setMadlibs(formData);
  }

  useEffect(() => {
    console.log(madlibs);
  }, [madlibs]);

  return (
    <>
      <header>Madlibs!</header>
      {madlibs ? (<MadlibsTemplate1 madlibs={madlibs} />)
        : (<MadlibsForm processForm={processForm} />)
      }
    </>
  )
}

export default Madlibs;