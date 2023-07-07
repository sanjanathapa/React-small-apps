import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";



export function useThunk(thunk){
    //console.log(thunk, "usethunk>>>>>>>>>>>>>")
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const dispatch = useDispatch();

    const runThunk = useCallback((arg) =>{
      setIsLoading(true);
      dispatch(thunk(arg)).unwrap().then(() =>{}).catch((err) =>{setError(err)}).finally(() =>{setIsLoading(false)})
    }, [dispatch, thunk])

    return [runThunk, isLoading, error]
  }

  //here run thunk is just a process that what will going to be happen