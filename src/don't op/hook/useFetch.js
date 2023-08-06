import axios from "axios"
import { useCallback, useEffect, useState } from "react"

export const useFetch = (apiPath, qureyTerm="") => {
  const [movies, setMovies] = useState([])
  const fetchMovies = useCallback(async () => {
    const result = await axios.get(`https://api.themoviedb.org/3/${apiPath}?query=${qureyTerm}&api_key=${process.env.REACT_APP_API_KEY}`)
    setMovies(result.data.results)
  }, [apiPath, qureyTerm])
  useEffect(() => {
    fetchMovies()
  }, [fetchMovies])
  return { movies }
}
