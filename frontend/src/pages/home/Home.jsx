import { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import VideoCard from "../../components/videoCard/VideoCard";
import "./home.scss";
import axios from "axios";

const Home = ({ format }) => {
  const [videoList, setVideoList] = useState([]);
  const [category, setCategory] = useState(null);

  useEffect(()=>{
    const getVideoList = async () => {
      try {
        const res = await axios.get(`api/videos/${format ? "?format=" + format : ""}${format && category ? "&category=" + category : ""}`, {
          headers: { 
            token: "Bearer "+JSON.parse(localStorage.getItem("user")).accessToken, 
          }
        });
        setVideoList(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getVideoList();
  },[format, category]);

  return (
    <div className="home">
      <Navbar format={format} setCategory={setCategory} />
      <div className="container">
          <div className="feedRow">
            {videoList.map((video, index) => (
              <VideoCard item={video} key={index} />
            ))}
          </div>
      </div>
    </div>
  )
}

export default Home;