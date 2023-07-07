import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { usersReducer } from "./slices/usersSlice";
import { albumsApi} from './apis/albumsApi';
//import { useFetchAlbumsQuery } from "./apis/albumsApi";
import { photosApi } from "./apis/photosApi";

export const store = configureStore({
  reducer: {
    users: usersReducer,
    [albumsApi.reducerPath]: albumsApi.reducer,
    [photosApi.reducerPath]: photosApi.reducer
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(albumsApi.middleware).concat(photosApi.middleware);
  },
});

window.store= store
setupListeners(store.dispatch);

export * from "./thunks/fetchUsers";
export * from "./thunks/addUser";
export * from "./thunks/removeUser";

export { 
  useFetchAlbumsQuery, 
  useAddAlbumMutation, 
  useDeleteAlbumMutation
} from './apis/albumsApi';

export { 
  useFetchPhotosQuery,
  useAddPhotoMutation,
  useRemovePhotoMutation
} from './apis/photosApi'


//export const {useFetchAlbumsQuery} = albumsApi


//when we create api, a slice is going to cretae automatically and some thunks, actioncreator and a set of automatically generated hooks
