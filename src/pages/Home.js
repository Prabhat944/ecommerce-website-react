import { Fragment, useState } from "react";
import Footer from "../components/CommonComponent/Footer";
import Header from "../components/CommonComponent/Header";
import TourSection from "../components/HomeComponent/TourSection";
import styles from './Home.module.css';

const Home=props=>{
  const [movieList,setMovieList] = useState([]);
  const [isLoading,setIsLoading] = useState(false);
  const [error,setError] = useState(null);
  
 async function MovieListHandler(){
  setIsLoading(true);
  setError(null);
  try{
    const response=await fetch('https://swapi.dev/api/films/');

    if(!response.ok){
      throw new Error("Something went wrong!!");
    }
  const data=await response.json();
  
  const MovieList=data.results.map(movie=>{
      return {
       date:movie.release_date,
       name:movie.title,
       producer:movie.producer,
      }
});
setMovieList(MovieList);

}
  catch(error){
   setError(error.message);
  }
  setIsLoading(false);
};
  
const Movies=movieList.map(movie=>
<TourSection 
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
            {!isLoading && movieList.length === 0 && !error && <p className={styles.loading}>Found No Movie</p>}
            {!isLoading && error && <p className={styles.loading}>{error}</p>}
            {isLoading && <p className={styles.loading}>Loading...</p>}
           </section>
          <Footer className={styles.footer} />
        </Fragment>
    );
};

export default Home;