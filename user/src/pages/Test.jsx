import React from 'react'

const Test = (props) => {
    const name = "Hello";
    // const name = props.res;
    console.log("Name : "+name);
  return (
    <div>
        Hello 
        {name}</div>
  )
}

export default Test;