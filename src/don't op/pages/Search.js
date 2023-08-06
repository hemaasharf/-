import { useSearchParams } from "react-router-dom"
import { Card } from "../components/Card"
import { useFetch } from "../hook/useFetch"
import useHelmet from "../hook/useHelmet"


export const Search = ({ apiPath }) => {
  const [searchTerm] = useSearchParams()
  const qureyTerm = searchTerm.get("q");
  const { movies } = useFetch(apiPath, qureyTerm)


  const renderedMovies = movies.map((movie) => {
    return <Card key={movie.id} movie={movie} />
  })
  return (
    <main>
      {useHelmet(`Search results for ${qureyTerm} / Cinmate`)}
      <section className="m-auto" >
        <p className="text-4xl text-gray-700 py-7 m-auto dark:text-white ">{movies.length === 0 ? "There is no Results  for " : "Results  for : "}{qureyTerm}</p>
      </section>
      <section className=" max-w-7xl py-7 mx-auto">
        <div className="flex flex-wrap justify-center gap-5   ">
          {renderedMovies}
        </div>
      </section>
    </main>
  )
}
