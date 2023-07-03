import "./videoCard.scss"
import { useNavigate } from "react-router-dom";

const VideoCard = () => {
  const navigate = useNavigate();
  const navigateToplayer = () => {
    navigate('/player');
  }
  return (
    <div className="videoCard">
        <img 
          src=""
          alt=""
          onClick={navigateToplayer}
        />
    </div>
  )
}

export default VideoCard