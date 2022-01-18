import { useEffect, useState } from 'react';

export const InlineEdit = ({ profiledata,name,value, setValue }) => {
  const [editingValue, setEditingValue] = useState(value);

  // useEffect(()=>{
  //   console.log(profiledata)
  // },[])

  const onChange = (event) => setEditingValue(event.target.value);

  const onKeyDown = (event) => {
    if (event.key === "Enter" || event.key === "Escape") {
      event.target.blur();
    }else{
      console.log("elsepart",editingValue)
    }
  }

  const onBlur = (event) => {
    if (event.target.value.trim() === "") {
      setEditingValue(value);
    } else {
      console.log("elseparthere",editingValue)
      setValue({
        ...profiledata,
        [name]: event.target.value
    })
    }
  }

  return <>
    <input
      type="text"
      aria-label="Field name"
      value={editingValue}
      onChange={onChange}
      onKeyDown={onKeyDown}
      onBlur={onBlur}
    />
    <button onClick={onKeyDown}>Done</button>
  </>;
};