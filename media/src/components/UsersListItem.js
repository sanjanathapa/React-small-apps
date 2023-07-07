import { GoTrashcan } from "react-icons/go";
import Button from "./Button";
import { removeUser } from "../store";
import { useThunk } from "../hooks/use-thunk";
import ExpandablePanel from "./ExpandablePanel";
import AlbumsList from "./AlbumsList";

const UsersListItem = ({user}) => {
    const [doRemoveUser, isLoading, error] = useThunk(removeUser)

    const handleClick = ()=>{
        console.log(user, "USER>>>>>>>>>>")
        doRemoveUser(user);
    }

    const header = <>
    <Button className= 'mr-3' loading={isLoading} onClick = {handleClick}>
        <GoTrashcan></GoTrashcan>
    </Button>
    {error && <div>Error deleting user..</div>}
  {user.name}
</>;
  return (
       <ExpandablePanel header={header}>
        <AlbumsList user= {user}></AlbumsList>
       </ExpandablePanel>
  )
}

export default UsersListItem

// In the context of the UsersListItem component, the children prop is passed to the ExpandablePanel component as the content of the
// panel. This means that the string "children Sanjana" will be rendered as the content within the expanded panel when the 
//ExpandablePanel is toggled open.

//a fragment allows us to write out a little bit of jsx or kind of groupng of jsx. we can imagine
//that this is going to allow us to just take this little markup and directly kind of copy paste it in here with no additional elements inbetween otherwise
//we r gonna loose to all the benefits all that classnames in the expandable comp