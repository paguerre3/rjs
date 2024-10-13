import React from 'react'

function extractVideoId(url) {
  console.log("hdurl: " + url)
  if (!url) return null;
  const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const matches = url.match(regex);
  return matches ? matches[1] : null;
}

export default function Main(props) {
  const {data} = props
  const videoId = data?.media_type === 'video' ? extractVideoId(data?.url) : null
  return (
    <div className='imgContainer'>
      {data?.media_type === 'image' ? (
        <img src={data?.hdurl} alt={data?.title || 'bg-img-demo'} className='bgImage' />
      ) : data?.media_type === 'video' ? (
        <iframe
          className='bgImage'
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}`}
          title={data?.title || 'YouTube video'}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <div className='bgImage'><p>Unsupported media type</p></div>
      )}
    </div>
  )
}
