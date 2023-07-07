import { useEffect} from 'react';
import { useSelector } from 'react-redux';
import { fetchUsers, addUser } from '../store';
import  SkeletonLoader  from './SkeletonLoader';
import Button from './Button';
import { useThunk } from '../hooks/use-thunk';
import UsersListItem from './UsersListItem';

const UsersList = () => {

  
  //const [isLoadingUsers, setIsLoadingUsers] = useState(false)
  //const [loadingUsersError, setLoadingUsersError] = useState(null);
  //const [isCreatingUser, setIsCreatingUser] = useState(false);
  //const [creatingUserError, setCreatingUserError] = useState(null);

  const { data } = useSelector((state) =>{
        return state.users
  })

  // useEffect(()=>{
  //   setIsLoadingUsers(true)
  //   dispatch(fetchUsers()).unwrap().then(() => {}).catch((err) =>{setLoadingUsersError(err)}).finally(()=>{setIsLoadingUsers(false)})
  // },[dispatch]);

//console.log(useThunk(fetchUsers), "This is the reuse hook>>>>>")

const [doFetchUsers, isLoadingUsers, loadingUsersError] = useThunk(fetchUsers);
const [creatingUser, isCreatingUser, creatingUserError] = useThunk(addUser);

  // const handleUserAdd = ()=>{
  //   setIsCreatingUser(true)
  //   dispatch(addUser()).unwrap().catch((err) =>{setCreatingUserError(err)}).finally(()=>{setIsCreatingUser(false)})
  // }
  
  //example
  // function sum(a, b){
  //   return c;
  // }
  // const result = sum(2, 5)
const handleUserAdd = () =>{ 
  creatingUser();

  console.log(creatingUser, "this is adduser")
}

  useEffect(() =>{
    doFetchUsers();
  }, [doFetchUsers])


  let content;
  if(isLoadingUsers){
    content =  <SkeletonLoader times={6} className='h-10 w-full'/>
  }

  else if(loadingUsersError){
  content = <div>Error data fetching......</div>
  }
  else (
  content = data.map((user) =>{
      // return <div key={user.id} className='mb-2 border rounded'>
      //   <div className='flex p-2 justify-between items-center cursor-pointer'>
      //     {user.name}
      //   </div>
      // </div>
      return <UsersListItem key={user.id} user={user} />
    })
  )
 

  return (
    <div>
      <div className='flex flex-row justify-between items-center m-3'>
        <h1 className='m-2 text-xl'>Users</h1>
        {/* {isCreatingUser ? 'creating user...' : 
        <button onClick={handleUserAdd}>+ Add User</button>} */}
        <Button loading={isCreatingUser} onClick={handleUserAdd}>+ Add User</Button>
        {creatingUserError && "error creating user.."}
      </div>
      {content}
    </div>
  )
}

export default UsersList

//unwrap is going to give us a brand new promise back, and the promise we get back is going to follow the conventional rule
//
//The calling logic may wish to treat these actions as if they were the original promise contents. The promise returned by the dispatched 
//thunk has an unwrap property which can be called to extract the payload of a fulfilled action or to throw either the error or, if 
//available, payload created by rejectWithValue from a rejected action:

