import React from 'react';
import PropTypes from 'prop-types';
const Profile = (props) => {
  props.handleName(`I m  ${props.fullName} `);
  return (
  <div>
       fullName = {props.fullName}
       <br></br>
       Bio ={props.Bio}
       <br></br>
       profession ={props.profession}
       <br></br>
    
       <img src={props.src} />

       <button onClick={() => props.handleName(`I m ${props.fullName} `)}>
        Hire Me
      </button>

  </div>
  
  );

};

Profile.defaultProps = {
  fullName: "Johw Wick",
  profession: "A legenday assassin",
  bio: "Hitman",
};

Profile.propTypes = {
    fullName: PropTypes.string,
    Bio: PropTypes.string,
    profession: PropTypes.string,
}

export default Profile;