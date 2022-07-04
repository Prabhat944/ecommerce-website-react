import { Fragment, useState } from "react";
import Footer from "../components/Body/Footer/Footer";
import Header from "../components/Header/Header";
import Tours from "../components/home/Tour";
import styles from './Home.module.css';

const Home=props=>{
  const [movieList,setMovieList] = useState([]);
  const [isLoading,setIsLoading] = useState(false);

  
  const MovieListHandler=()=>{
  setIsLoading(true);
  fetch('https://swapi.dev/api/films/')
   .then(response=>response.json())
   .then(data=>{
    const MovieList=data.results.map(movie=>{
      return {
       date:movie.release_date,
       name:movie.title,
       producer:movie.producer,
      }
});
setMovieList(MovieList);
setIsLoading(false);
});
  };

const Movies=movieList.map(movie=>
<Tours 
  date={movie.date} 
  name={movie.name} 
  producer={movie.producer} 
  key={Math.random().toString()}
/>
);

    return (
        <Fragment>
          <Header cart={false} generics={styles.generics}>
            <button className={styles.getalbum}>Get Our Latest Album</button>
            <button className={styles.play}>►</button>
          </Header>
           <section className={styles.section}>
            <h2>TOURS</h2>
            <button className={styles.movielist} onClick={MovieListHandler}>Movie List</button>
            {!isLoading && movieList.length > 0 && Movies}
            {!isLoading && movieList.length === 0 && <p className={styles.loading}>Found No Movie</p>}
            {isLoading && <p className={styles.loading}>Loading...</p>}
           </section>
          <Footer />
        </Fragment>
    );
};

export default Home;