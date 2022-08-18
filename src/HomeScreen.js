import React from 'react'
import { Banner } from './Banner'
import './homeScreen.css'
import { Nav } from './Nav'
import { Row } from './Row'
import { request } from './helpers/Request'

export const HomeScreen = () => {
  return (
    <div>
        {/* Navbar */}
       <Nav/>

        <Banner/>


        {/* Row */}

        <Row title='NETFLIX ORIGINALS' fetchUrl={request.fetchNetflixOriginals} isLargeRow />
        <Row title='Trending Now' fetchUrl={request.fetchTrending} />

        <Row title='Top Rated' fetchUrl={request.fetchTopRated}  />
        <Row title='Action Movies' fetchUrl={request.fetchActionMovies}  />
        <Row title='Comedy Movies' fetchUrl={request.fetchComedyMovies}  />
        <Row title='Horror Movies' fetchUrl={request.fetchHorrorMovies}  />
        <Row title='Romantic Movies' fetchUrl={request.fetchRomanceMovies}  />
        <Row title='Documentaries' fetchUrl={request.fetchDocumentariesMovies}  />

        

    </div>
  )
}
