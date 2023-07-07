import './ImageList.css'
import ImageShow from './ImageShow';

const ImageList = ({ images }) => {

  const renderedImages = images.map((imageElement) => {
   return <ImageShow key={imageElement.id} image= {imageElement}/>
  });
  return <div className='image-list'>{renderedImages}</div>;
};

export default ImageList;


//Note: -> key prop is very important to add inside any map function where we are listing the elements
//(in case if we dont have any id in the array)
//if you do use the index as your key. need to care what kind of bugs we can get(as it can lead to bug as we update the list)
//in for loop or map ..like
//map(element, index)  or for(let i=0, i<5, i++){values.push(<div key={i}/>)}


//Generate a unique is yourself(in case if we dont have any id in the array)