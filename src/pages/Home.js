import { Fragment, useState ,useEffect,useCallback} from "react";
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
    const response=await fetch('https://react-https-e99ad-default-rtdb.firebaseio.com/Movies.json');

    if(!response.ok){
      throw new Error("Something went wrong!!");
    }
  const data=await response.json();
  
  const MovieList=[];
  for(const key in data){
     MovieList.push({
      id:key,
      name:data[key].title,
      date:data[key].release_date,
      text:data[key].opening_crawl
     })
  }
  
  
setMovieList(MovieList);

}
  catch(error){
   setError(error.message);
  }
  setIsLoading(false);
},[]);

 const AddedMovieHandler=async(movies)=>{
  await fetch('https://react-https-e99ad-default-rtdb.firebaseio.com/Movies.json',{
    method:'POST',
    body:JSON.stringify(movies),
    headers:{
      'Content-Type':"application/json"
    }
  });
  MovieListHandler();
}
useEffect(()=>{
MovieListHandler();
},[MovieListHandler]);
  
const Movies=movieList.map(movie=>
<TourSection 
  fetchTheMovie={MovieListHandler}
  date={movie.date} 
  name={movie.name} 
  text={movie.text} 
  key={movie.id}
  id={movie.id}
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
          <div className={styles.genericsitem}>
            <button className={styles.getalbum}>Get Our Latest Album</button>
            <button className={styles.play}>►</button>
          </div>
           <section className={styles.section}>
            <h2>MOVIES TOURS</h2>
            <Form AddedMovie={AddedMovieHandler}/>
            <button className={styles.movielist} onClick={MovieListHandler}>Fetch Movie</button>
            <button className={styles.movielist} onClick={onCancelHandler}>Cancel</button>
            {contents}
           </section>
        </Fragment>
    );
};

export default Home;