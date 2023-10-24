import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import useCallingTrending from "../../hooks/useCallingTrending";
import { useEffect } from "react";

const TrendingMovies = () => {
const [dataList,loading,error]= useCallingTrending(
    "https://api.themoviedb.org/3/trending/all/day?api_key=14bdd69ce887376edfafb09f23f78fe9"
  );

return(
  <>
  {dataList.map((movie)=>{
return (
  <>  
  <Card>
      <Card.Img variant="top" src={movie.poster_path} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>
          {movie.overview}
        </Card.Text>
        <Button variant="primary">Show Details</Button>
      </Card.Body>
    </Card>
  </>
)
}
  )
};
  </>
)

}
export default TrendingMovies;
