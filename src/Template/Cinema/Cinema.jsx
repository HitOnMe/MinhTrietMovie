import React, {useState} from 'react';
import { createBrowserHistory } from 'history';
import FilmDetail from '../../components/Detail';
import FilmTheatre from '../../components/Theatre';
import MovieList from '../../components/MovieList';
import Calendar from '../../components/Calendar'
export const history = createBrowserHistory();

const TicketRoom = () => {
  const [movie, setMovie] = useState(null);
  const handleRender = (data) => {
    setMovie(data);}
    return (
      <div>
       <Calendar/>
       
       <div className='grid grid-cols-12 pt-6'>
         <FilmDetail sendData = {movie}/>
         <FilmTheatre getData = {handleRender}/>
       </div>
     </div>
       );
  }
export default TicketRoom
/* export default function TicketRoom() {
 
} */

