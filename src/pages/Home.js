import { Fragment, useState ,useEffect,useCallback} from "react";
import Footer from "../components/CommonComponent/Footer";
import Header from "../components/CommonComponent/Header";
import Form from "../components/HomeComponent/Form";
import TourSection from "../components/HomeComponent/TourSection";
import styles from './Home.module.css';

const Home=props=>{
  const [movieList,setMovieList] = useState([]);
  const [isLoading,setIsLoading] = useState(false);
  const [error,setError] = useState(null);
  
 const MovieListHandler=useCallback(async()=>{
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
       text:movie.opening_crawl,
      }
});
setMovieList(MovieList);

}
  catch(error){
   setError(error.message);
  }
  setIsLoading(false);
},[]);

useEffect(()=>{
MovieListHandler();
},[MovieListHandler]);
  
const Movies=movieList.map(movie=>
<TourSection 
  date={movie.date} 
  name={movie.name} 
  text={movie.text} 
  key={Math.random().toString()}
/>
);
let retry;


let contents=<p className={styles.loading}>Found No Movie</p>
if(movieList.length > 0 ){
 contents=Movies
}
if(error){
  contents=<p className={styles.loading}>{error} <strong>Retrying...</strong> </p>
  retry=setTimeout(MovieListHandler, 5000);
}
if(isLoading){
  contents=<p className={styles.loading}>Loading...</p>
}
const onCancelHandler=(event)=>{
  event.preventDefault();
  clearTimeout(retry);
  setError(null);
}


    return (
        <Fragment>
          <Header cart={false} generics={styles.generics}>
            <button className={styles.getalbum}>Get Our Latest Album</button>
            <button className={styles.play}>►</button>
          </Header>
           <section className={styles.section}>
            <h2>MOVIES TOURS</h2>
            <Form/>
            <button className={styles.movielist} onClick={MovieListHandler}>Fetch Movie</button>
            <button className={styles.movielist} onClick={onCancelHandler}>Cancel</button>
            {contents}
           </section>
          <Footer className={styles.footer} />
        </Fragment>
    );
};

export default Home;