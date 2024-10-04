import React from 'react'

const Signup = () => {
    
  return (
    <div className='login-container'>
        <h2>Sign Up</h2>
      <form >
      <div className="form-group">
          <label htmlFor="email">Email </label>
          <input
            type="text"
            id="email"
            
            

            required
          />
        </div>
      <div className="form-group">
          <label htmlFor="fullname">Fullname</label>
          <input
            type="text"
            id="fullname"
            
            

            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            
            

            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            
           

            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="confirmpassword">Confirm password</label>
          <input
            type="password"
            id="confirmpassword"
            
           

            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            
           

            required
          />
        </div>
        

        <button type="submit">Signup</button>
       
      </form>

    </div>
  )
}

export default Signup