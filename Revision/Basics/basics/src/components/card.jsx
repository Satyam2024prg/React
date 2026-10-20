import '../App.css'
// import PropTypes from 'prop-types'
import profile_pic from '../../public/images.jpg'

function Card({ name = "Guest", ...props }) {

  return <>
    <div className="card">
      <div className={props.logged ? "loggedIn" : "loggedOut"}>

      </div>

      <div className="data">
        <h1 className='name'>{name}</h1>
        <h1 className='id'>Id : {props.id}</h1>
      </div>

      {/* <img src="../../public/images.jpg" alt="Profile Picture" /> */}
      <img className="profile_pic" src={profile_pic} alt="Profile Picture" />

    </div>
  </>
};

// Card.propTypes = {
//   name: PropTypes.string,
//   id: PropTypes.number
// }

export default Card;