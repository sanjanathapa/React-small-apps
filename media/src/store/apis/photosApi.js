import { faker } from "@faker-js/faker";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

const photosApi = createApi({
    reducerPath: 'photos',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3005'
    }),
    endpoints(builder){
        return {
            fetchPhotos: builder.query({
                providesTags: (results, error, album)=>{
                    console.log(results, "photoonoooooooooooooooooooooo", album, "album")
                    const tags = results.map((photo) =>{
                        return {type: "Photo", id: photo.id}
                    });
                    tags.push({ type: 'AlbumPhoto', id: album.id});
                    return tags;
                },
                query: (album)=>{
                    console.log(album,"PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP")
                    return {
                        url: '/photos',
                    params: {
                        albumId: album.id
                    },
                    method: 'GET'
                    }
                    
                }
            }),
            addPhoto: builder.mutation({
                invalidatesTags:((results, error, album) =>{
                    return [{ type: 'AlbumPhoto', id:album.id}];
                }),
                query: (album)=>{
                    return{
                        url: '/photos',
                        method: 'POST',
                        body: {
                            albumId: album.id,
                            photo: faker.image.abstract(150, 150, true)
                        }
                    }
                }
            }),
            removePhoto: builder.mutation({
                invalidatesTags: ((results, error, photo) =>{
                    return [{type: 'Photo', id: photo.id}];
                }),
                query: (photo)=>{
                    return{
                        url: `/photos/${photo.id}`,
                        method: "DELETE"
                    }
                }
            })
        }
    }})
        
//photosApi.useFetchPhotosQuery();

export const { useFetchPhotosQuery, useAddPhotoMutation, useRemovePhotoMutation } = photosApi;
export {photosApi}

//going to give us back a path or afull url to some random image hosted online. and 'true' argument on there make sure that we always get back a random photo