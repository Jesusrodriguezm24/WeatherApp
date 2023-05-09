import './LoadingPage.css'
import cloudImg from '../../assets/vectorLoad.svg'


const LoadingPage = () => {
  return (
    <section className='load_container'> 
        <div>
        <img src={cloudImg} alt="Img/loading"/>
        </div>

        <div className='loading_bar'>

        </div>
        <p className='loading_text'>Loading weather...</p>
    </section>
  )
}

export default LoadingPage