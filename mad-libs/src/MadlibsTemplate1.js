const MadlibsTemplate1 = (props) => {
  // console.log(props)
  const { noun1, noun2, adjective, color } = props.madlibs;
  return <p>{`There was a ${color} ${noun1} who loved a ${adjective} ${noun2}`}</p>
}

export default MadlibsTemplate1;