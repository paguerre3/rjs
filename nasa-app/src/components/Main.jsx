import React from 'react'

function extractVideoId(url) {
  console.log("url: " + url)
  if (!url) return null;
  const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|embed|e(?:mbed)?)\/|watch\?v=|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})|vimeo\.com\/(?:channels\/(?:\w+\/)?|groups\/(?:\w+\/)?|album\/(?:\d+\/)?video\/|video\/|)(\d+)|dailymotion\.com\/video\/([a-zA-Z0-9]+)/;
  const matches = url.match(regex);
  const id = matches ? matches[1] || matches[2] || matches[3] : null;
  console.log("id: " + id)
  return id;
}

function extractCuratedUrl(url) { 
  if (!url) return null;
  if (url.indexOf('?') > -1) { 
    if (url.indexOf('rel=0') > -1) 
      return url
    if (url.indexOf('?') == url.length - 1) 
      return url + 'rel=0'
    return url + '&rel=0'
  }
  return id + '?rel=0';
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
          src={`${extractCuratedUrl(data?.url)}&autoplay=1&mute=1&loop=1&playlist=${videoId}`}
          title={data?.title || 'video-demo'}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <div className='bgImage'><p>Unsupported media type</p></div>
      )}
    </div>
  )
}
