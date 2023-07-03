import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { VideoContextProvider } from "./context/videoContext/VideoContext"
import { AuthContextProvider } from "./context/authContext/AuthContext"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <>
    <AuthContextProvider>
      <VideoContextProvider>
        <App />
      </VideoContextProvider>
    </AuthContextProvider>
  </>
)
