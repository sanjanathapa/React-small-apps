import { useFetchAlbumsQuery, useAddAlbumMutation } from "../store";
import SkeletonLoader from './SkeletonLoader';
import Button from "./Button";
import AlbumsListItem from "./AlbumsListItem";


const AlbumsList = ({user}) => {
const {data, isFetching, error } = useFetchAlbumsQuery(user);
const [ addAlbum, result ] = useAddAlbumMutation(); 

const handleAlbum = () =>{
  addAlbum(user).unwrap().then((res) =>{console.log(res, "RESPONSE>>>>>>")}).catch()
}

let content;
if(isFetching){
  content = <SkeletonLoader className='h-10 w-full' times={3}></SkeletonLoader>
}else if(error){
  content = <div>Error loading Error...</div>
}else {
  content = data.map((album) => { 
    return <AlbumsListItem key={album.id} album={album}></AlbumsListItem>
  })
}
  
return (
    <div>
      <div className="m-2 flex flex-row items-center justify-between">
      <h3 className="text-lg font-bold">Albums for {user.name}</h3>
      <Button loading={result.isLoading} onClick={handleAlbum}>+ Add Album</Button></div>
      <div>{content}</div>
      </div>
  )
}

export default AlbumsList



//options for handling updated data
//1. take the newly created data from the response and add it into our list of albums.(doing this approach, code becomes more complicated)
//2. after creating a new album, make a second request to get all albums.(we will follow the 2nd approach)

//in rtk we are going to use the library to set up some automatic data fetching. we will set a little rule that says ytime when we call this mutation, automatically go off and refetch the list of albums