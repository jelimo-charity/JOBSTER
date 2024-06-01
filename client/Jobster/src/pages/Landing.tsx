
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.svg';
import main from '../assets/images/main.svg';

const Landing: React.FC = () => {
import logo from '../assets/images/logo.svg'
import main from '../assets/images/main.svg'
import '../App.css'
const Landing = () => {
  return (
    <div>
      <section>
        <div className="nav">
          <img src={logo} alt="jobster logo" />
        </div>
        <div className="home-description">
          <div className="info">
            <h1>
              Job <span>Tracking</span> App
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
              aliquam doloribus blanditiis obcaecati. Possimus commodi,
              laudantium totam ipsa sapiente ducimus? Veritatis ipsam
              necessitatibus explicabo incidunt nisi quae dolore?
              Perferendis, voluptas?
            </p>
            <Link to="/register">
              <button>Login/Register</button>
            </Link>
          </div>
          <img src={main} alt="job hunt" />
          <img src={main} alt='job hunt' className='jobhunt' />
        </div>
      </section>
    </div>
  );
};

export default Landing;
