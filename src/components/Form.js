import React, { useRef } from "react";

export default function Form() {
  const formRef = useRef();
  function onSubmitForm(e) {
    e.preventDefault();
    const data = new FormData(formRef.current);
    const settings = {
      method: "POST",
      mode: "cors",
      cache: "default",
      body: data
    };
    const url = "https://localhost:44311/api/default/UploadImage";
    fetch(url, settings)
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(error => console.error(error));
  }
  return (
    <>
      <form name='form1' ref={formRef} id='form1' onSubmit={onSubmitForm}>
        <div>
          <label htmlFor='file'>File</label>
          <input type='file' name='File' id='File' />
        </div>
        <div>
          <label htmlFor='Param'>Param</label>
          <input type='text' name='Param' id='Param' />
        </div>
        <button>Send</button>
      </form>
    </>
  );
}
