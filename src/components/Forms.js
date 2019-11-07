import React, { Component } from "react";

export default class Forms extends Component {
  constructor() {
    super();
    this.onSubmitForm = this.onSubmitForm.bind(this);
    this.formRef = React.createRef();
  }

  onSubmitForm = e => {
    e.preventDefault();
    const data = new FormData(this.formRef.current);
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
  };

  render() {
    return (
      <form
        name="form1"
        ref={this.formRef}
        id="form1"
        onSubmit={this.onSubmitForm}
      >
        <div>
          <label htmlFor="file">File</label>
          <input type="file" name="File" id="File" />
        </div>
        <div>
          <label htmlFor="Param">Param</label>
          <input type="text" name="Param" id="Param" />
        </div>
        <button>Send</button>
      </form>
    );
  }
}
