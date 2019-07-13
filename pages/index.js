
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';



let Ranking = (props) => (

    <div>
        <Link href="/reviews/[id]" as={'/reviews/' + props.id}>
            <a>{props.id}</a>
        </Link> 
        
        <span> 
            {props.starRating} 
        </span>

    </div>

);


let main = (props) => (

    <div>
        <ul>
            {props.films.results.map(entry => <Ranking id={entry.title} />)}
        </ul>
    </div>

);

main.getInitialProps = async () => {
    const res = await fetch('http://api.themoviedb.org/3/movie/top_rated?api_key=74a80734c82b55bcc9d45771d750b136');
    const data = await res.json();
    

    return {films: data}

}


export default main;