import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <main>
    <footer className="p-4 bg-white shadow md:flex md:items-center md:justify-between static">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400 md:w-1/2 md:mb-0 md:order-2 md:text-right md:mt-0">© 2030 <Link to="/" className="hover:underline">Cinemate</Link>. All Rights Reserved.</span>
      <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0 md:w-1/2 md:order-1">
        <li>
          <Link to="#" target="_blank" className="mr-4 hover:underline md:mr-6 ">Instagram</Link>
        </li>
        <li>
          <Link to="https://www.linkedin.com/in/ebrahim-dawood-825478205/" target="_blank" className="mr-4 hover:underline md:mr-6">LinkedIn</Link>
        </li>
        <li>
          <Link to="#" target="_blank" className="mr-4 hover:underline md:mr-6">FaceBook</Link>
        </li>
        <li>
          <Link to="https://github.com/hemaasharf" target="_blank" className="hover:underline">Github</Link>
        </li>
      </ul>
    </footer>
  </main>
  )
}
