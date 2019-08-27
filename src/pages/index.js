import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Movie from "../components/movie"

const movie = {
  title: "Superbad",
  genre: "Comedy",
  trailer: "MNpoTxeydiY",
  image: "https://m.media-amazon.com/images/I/71onlDHdUML._AC_UY218_.jpg"
}

const IndexPage = () => (
  <Layout>
   
      <Movie data={movie} />
  
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
