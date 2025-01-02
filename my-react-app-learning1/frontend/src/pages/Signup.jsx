import '../css/Signup.css';
import Header from '../ults/Header';
import Footer from '../ults/Footer';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';

function Signup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('');
  const [country, setCountry] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [newsletter, setNewsletter] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Mật khẩu không khớp');
      return;
    }
    console.log('Đăng ký thành công', { username, firstName, lastName, password });
  };

  return (
    <>
      <Header />
      <div className="form_wrapper">
        <div className="form_container">
          <div className="title_container">
            <h2>Responsive Registration Form</h2>
          </div>
          <div className="row clearfix">
            <div className="">
              <form onSubmit={handleSubmit}>
                {/* Username */}
                <div className="input_field">
                    <span className='faUser'><FontAwesomeIcon icon={faUser} /></span>
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div>

                {/* Password */}
                <div className="input_field">
                    <span className='faUser'><FontAwesomeIcon icon={faLock} /></span>
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                {/* Confirm Password */}
                <div className="input_field">
                    <span className='faUser'><FontAwesomeIcon icon={faLock} /></span>
                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Re-type Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                </div>

                {/* First Name and Last Name */}
                <div className="row clearfix">
                  <div className="col_half">
                    <div className="input_field">
                      <span><i aria-hidden="true" className="fa fa-user"></i></span>
                      <input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col_half">
                    <div className="input_field">
                      <span><i aria-hidden="true" className="fa fa-user"></i></span>
                      <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Gender */}
                <div className="input_field radio_option">
                  <input
                    type="radio"
                    name="gender"
                    id="rd1"
                    checked={gender === 'male'}
                    onChange={() => setGender('male')}
                  />
                  <label htmlFor="rd1">Male</label>
                  <input
                    type="radio"
                    name="gender"
                    id="rd2"
                    checked={gender === 'female'}
                    onChange={() => setGender('female')}
                  />
                  <label htmlFor="rd2">Female</label>
                </div>

                {/* Country */}
                <div className="input_field select_option">
                  <select
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                  >
                    <option value="">Select a country</option>
                    <option value="Option1">Option 1</option>
                    <option value="Option2">Option 2</option>
                  </select>
                  <div className="select_arrow"></div>
                </div>

                {/* Terms and conditions */}
                <div className="input_field checkbox_option">
                  <input
                    type="checkbox"
                    id="cb1"
                    checked={termsAccepted}
                    onChange={() => setTermsAccepted(!termsAccepted)}
                  />
                  <label htmlFor="cb1">I agree with terms and conditions</label>
                </div>

                {/* Newsletter */}
                <div className="input_field checkbox_option">
                  <input
                    type="checkbox"
                    id="cb2"
                    checked={newsletter}
                    onChange={() => setNewsletter(!newsletter)}
                  />
                  <label htmlFor="cb2">I want to receive the newsletter</label>
                </div>

                {/* Submit Button */}
                <input className="button" type="submit" value="Register" />
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Signup;
