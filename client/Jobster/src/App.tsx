
import './App.css'
import logo from './assets/images/logo.svg'
import main from './assets/images/main.svg'

function App() {

  return (
    <>
      <section>
        <div className='nav'>
          <img src={logo} alt='jobster logo'  />
        </div>
        <div className='home-description'>
          <div className='info'>
            <h1>
              Job <span>Tracking</span> App
            </h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est aliquam doloribus blanditiis 
            obcaecati. Possimus commodi, laudantium totam ipsa sapiente ducimus? Veritatis ipsam 
            necessitatibus explicabo incidunt nisi quae dolore? Perferendis, voluptas?
            </p>
            <button>Login/Register</button>
          </div>
          <img src={main} alt='job hunt' />
        </div>
      </section>
    </>
  )
}

export default App
