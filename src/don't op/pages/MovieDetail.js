import { useCallback, useEffect, useState } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
import backup from '../assets/images/backup.png'
import { Helmet } from 'react-helmet';

export const MovieDetail = () => {
  const [movie, setMovie] = useState([])
  const params = useParams()
  const fetchMovies = useCallback(async () => {
    const result = await axios.get(`https://api.themoviedb.org/3/movie/${params.id}?api_key=${process.env.REACT_APP_API_KEY}`)
    setMovie(result.data)
    console.log(result.data)
  }, [params])
  useEffect(() => {
    fetchMovies()
  }, [fetchMovies])
  const image = movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : { backup };
  return (
    <>
    
      <main>
      <Helmet>
        <title>{`${movie.name}/Cinmate`}</title>
      </Helmet>
        <section className="flex  flex-wrap py-5 justify-around ">{/*items-center */}
          <div>
            <img className="max-w-sm rounded" src={image} alt={movie.title} />
          </div>
          <div className="max-w-2xl text-gray-700 text-lg	 dark:text-white">
            <h1 className="text-4xl font-bold my-3 text-center lg:text-left"> {movie.title}</h1>
            <p className="text-xl py-4"> {movie.overview}</p>
            {movie.genres ? (
              <p className="flex gap-2 my-5 flex-wrap">
                {movie.genres.map((genre) => {
                  return <span className="mr-2 border border-gray-200 rounded p-2 dark:border-gray-600 ">{genre.name}</span>
                })}
              </p>
            ) : ""}
            {/* for rating */}
            <div className="flex items-center ">
              <svg className="w-4 h-4 text-yellow-300 mr-1" ariaHidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <p className="ml-2 text-lg font-bold text-gray-900 dark:text-white">{movie.vote_average}</p>
              <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
              <a href={`https://www.imdb.com/title/${movie.imdb_id}/ratings/?ref_=tt_ov_rt`} rel="noreferrer" target="_blank" className="text-lg font-medium text-gray-900  dark:text-white no-underline hover:underline">{movie.vote_count} reviews</a>
            </div>
            <p className="my-4 ">
              <span className="mr-2 font-bold">RunTime: </span>
              <span>{movie.runtime} min</span>
            </p>
            <p className="my-4 ">
              <span className="mr-2 font-bold">Budget: </span>
              <span>{movie.budget === 0 ? "unKnown" : movie.budget} </span>
            </p>
            <p className="my-4 ">
              <span className="mr-2 font-bold">Release Date: </span>
              <span>{movie.release_date} </span>
            </p>
            <p className="my-4 flex items-center ">
              <span className="mr-2 font-bold">IMBD_Profile: </span>
              <span>
                <a href={`https://www.imdb.com/title/${movie.imdb_id}`} target="_blank" rel="noreferrer" className="text-lg font-medium text-gray-900  dark:text-white">
                  <svg className="w-3.5 h-3.5" ariaHidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"></path>
                  </svg>
                </a>
              </span>
            </p>
            <p className="my-4 ">
              <span className="mr-2 font-bold">Tagline: </span>
              <span>{movie.tagline}  </span>
            </p>
          </div>

        </section>
      </main>
    </>

  )
}
