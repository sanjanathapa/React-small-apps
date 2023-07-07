import { useAddPhotoMutation, useFetchPhotosQuery } from "../store"

import Button from "./Button";
import SkeletonLoader from "./SkeletonLoader";
import PhotosListItem from "./PhotosListItem";

const PhotosList = ({album}) => {
    console.log(album, "<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<")
  const { data, error, isFetching} = useFetchPhotosQuery(album);
  console.log(data, ">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
    const [addPhoto, addPhotoResults] = useAddPhotoMutation();

    const handleAddPhoto = ()=>{
        addPhoto(album)
    }

    let content;
    if(isFetching){
        content = <SkeletonLoader className= 'h-8, w-8' times = {4}></SkeletonLoader>
    }
    else if(error){
        content = <div>Error fetching Photos....</div>
    }
    else{
        content = data.map((photo) =>{
            console.log(photo, "PHOTO")
            return <PhotosListItem key={photo.id} photo={photo}></PhotosListItem>
        })
    }
  return (
    <div>
        <div className="m-2 flex flex-row items-center justify-between">
        <h3 className="text-lg font-bold">Photos for {album.title}</h3>
        <Button loading={addPhotoResults.isLoading} onClick = {handleAddPhoto}>+ Add Photo</Button>
        </div>
        <div className="mx-8 flex flex-row flex-wrap justify-center">{content}</div>
    </div>
  )
}

export default PhotosList
