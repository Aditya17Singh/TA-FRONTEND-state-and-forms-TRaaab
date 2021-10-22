import React from "react";
class MultipInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: "",
    };
  }
  render() {
    return (
      <>
        <div className="w-80 border-solid border-4 border-light-blue-500  m-auto mt-5 mb-10 p-10">
          <form className="">
            <fieldset>
              <div className="mb-5">
                <label className="">Text Input</label>
                <input className=" border-solid border-2 border-black  block" type="text" />
              </div>
              <div className="mb-5">
                <label className="">Date Input</label>
                <input className=" border-solid border-2 border-black block" type="date" />
              </div>
              <div className="mb-5">
                <label className="">File Input</label>
                <input className="block" type="file" />
              </div>
              <div className="mb-5">
                <label className="">Read-Only Input</label>
                <input
                  className=" border-solid border-2 border-black block"
                  placeholder="This can be copied"
                  readOnly  
                />
              </div>
              <div className="mb-5">
                <label className="">Disabled Input</label>
                <input className=" border-solid border-2 border-black block" type="text" disabled />
              </div>
              <div className="mb-5">
                <label className="">Textarea</label>
                <textarea className=" border-solid border-2 border-black block"></textarea>
              </div>
              <div className="mb-5">
                <label className="">Textarea Disabled</label>
                <textarea className=" border-solid border-2 border-black block" disabled></textarea>
              </div>
            </fieldset>
          </form>
        </div>
      </>
    );
  }
}

export default MultipInput;
