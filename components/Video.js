import React, { useEffect, useRef } from 'react'

const Video = ({ videoSource }) => {
  const videoRef = useRef()

  useEffect(() => {
    setTimeout(() => {
      videoRef.current.play()
    }, 500)
  }, [])

  return (
    <video ref={videoRef} loop muted>
      <source src={videoSource} type="video/mp4" />
    </video>
  )
}

export default Video
