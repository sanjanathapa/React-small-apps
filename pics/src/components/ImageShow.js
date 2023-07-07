import React from 'react'

const imageShow = ({image, key}) => {
  console.log("---image show prop image ---------", image)
  return (
    <div>
      <img src={image.urls.small} alt={image.alt_description}/>
    </div>
  )
}

export default imageShow
