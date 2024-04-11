import './Principal.css'
import image from "./../../assets/BleuSpa_2.png"

function Principal() {
  return (
    <div style={{ backgroundColor: '#f2f2f2' }}>
      <div className='Box_P'>
        <img src={image} alt="s" />
      </div>
    </div>
  )
}

export default Principal