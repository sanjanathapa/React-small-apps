
//when we create this api, its going to automatically creates a slice for us behind the scenes and we dont really have to interact 
//with that slice in any way but is created. the slice is used to store a ton of states related to all the different requsts that 
//are beung issued, the data they fetch, the status of those requests, errors and so on.
//reducerPAth:- property on the big state objects where all of the api state should be maintained.
//goal of reducerPath is just specify where's all the state going to be stored inside of the big state object.


//fetchBaseQuery is going to give you a preconfigured version of fetch. it will automatically handle all the rough edges of fetch method

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { faker } from '@faker-js/faker';

const albumsApi = createApi({
    reducerPath : 'albums',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3005',
    }),
    endpoints(builder){
        return {
            deleteAlbum: builder.mutation({
                invalidatesTags: (resluts, error, album)=>{
                    return [{type: 'Album', id: album.id}]  
                },
                query: (album)=>{
                    console.log(album, "this is the album")
                    return {
                        url:`/albums/${album.id}`,
                        method: 'DELETE'
                    }
                }  
            }),
            addAlbum: builder.mutation({
                invalidatesTags: (results, error, user)=>{
                    console.log(user, "addalbum")
                    return [{type: 'UsersAlbums', id: user.id}]
                },
                query: (user) =>{
                    console.log(user, "this is the user>>>>>>>>>>>>>>>>")
                    return {
                        url: '/albums',
                        method: 'POST',
                        body: {
                            userId: user.id,
                            title: faker.commerce.productName()
                        }
                    }
                }

            }),
            fetchAlbums: builder.query({
                providesTags: (results, error, user)=>{
                    console.log(user, "fetchalbum", results, "fetchalbum>>>>>>");
                    const tags = results.map((album)=>{
                        return {type:'Album', id: album.id}
                    });
                    tags.push({type: 'UsersAlbums', id: user.id})
                    return tags
                },
                query: (user) =>{
                    return {
                        url: '/albums',
                        params: {
                            userId: user.id
                        },
                        method: 'GET'
                    }
                }
            })
        }
    }
})

//albumsApi.useFetchAlbumQuery();

//export const {useFetchAlbums} = albumsApi;
export const { useFetchAlbumsQuery, useAddAlbumMutation, useDeleteAlbumMutation} = albumsApi
export {albumsApi}


//so RTK took the name of our endpoints,which is our fetchAlbums and the arguments we provided in and kind of merge them together into a string and then use that as a key inside the query object (console),
//rtk is not really keeping track of the endpoint and the argumet as seperate fields, its gonna combining them together to serve as one single key. eg fetchAlbums({"id":1, "name":"Myra"})

//if we invalidate any tag, the entire query is going to be invalidated