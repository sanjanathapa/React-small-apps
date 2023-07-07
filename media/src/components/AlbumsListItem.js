//import ExpandablePanel from "./ExpandablePanel"
import Button from "./Button";
import { GoTrashcan } from "react-icons/go";
import ExpandablePanel from "./ExpandablePanel";
import { useDeleteAlbumMutation } from "../store";
import PhotosList from "./PhotosList";




const AlbumsListItem = ({album}) => {
    console.log(album, "--------------------------------------------------------------------")
    const [ deleteAlbum, results] = useDeleteAlbumMutation();

    console.log(results, "RESULTS>>>>>>>>>>>>>>")

const handleDeleteAlbum = () =>{
    deleteAlbum(album)
}
    const header = <>
        <Button onClick={handleDeleteAlbum} className= 'mr-3' loading={results.isLoading}><GoTrashcan></GoTrashcan></Button>
        {album.title}</>

        return (
        <ExpandablePanel header={header} key={album.id}>
            <PhotosList album={album}></PhotosList>
        </ExpandablePanel>
        )
      }


export default AlbumsListItem
