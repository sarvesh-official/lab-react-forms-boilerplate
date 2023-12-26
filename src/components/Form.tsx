
function Form() {
  return (
      <div>
          <fieldset className="border border-solid border-gray-300 p-3">
              <legend className="text-md bg-black text-white">Fill This Form</legend>

              <form className="flex bg-slate-300 p-4 flex-col justify-center space-y-5 px-20 font-bold text-1xl">
                  <div className=" text-green-500">
                      <p className="text-2xl font-bold">Registration Successful</p>
                  </div>
                  <label>First Name: </label>
                  <input type="text" name="firstName" className="bg-slate-100" />

                  <label>Last Name: </label>
                  <input type="text" name="lastName" className="bg-slate-100" />
                  
                  <label>Email: </label>
                  <input type="email" name="email" className="bg-slate-100" />
                 
                  <label>Phone Number: </label>
                  <input type="number" name="phone" className="bg-slate-100" />

                  <input type="submit" className="cursor-pointer text-2xl m-2 bg-green-400 p-3 rounded-md hover:bg-green-700 hover:text-white" value={"Register"} />
              
                  
              </form>
          </fieldset>
    </div>
  )
}

export default Form