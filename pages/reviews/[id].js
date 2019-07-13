
import {useRouter} from 'next/router';


let reviewPage = (props) => {

    let router = useRouter();
    let pageData = [];

    for(let i = 0; i < props.films.results.length; i++){
        if(router.query.id == props.films.results[i].title){
            pageData = props.films.results[i]
        } else {
            //window.location.replace("/")
        }
    }

    return(
        <div>
            <h1>
                {pageData.title}
            </h1>
            <p>
                Vote: {pageData.vote_average}
            </p>
            <p>
            {pageData.overview}
            </p>
        </div>
    );
};


//TODO: Calling the api twice is stupid and wastefull fix this
reviewPage.getInitialProps = async () => {
    const res = await fetch('http://api.themoviedb.org/3/movie/top_rated?api_key=74a80734c82b55bcc9d45771d750b136');
    const data = await res.json();

    return {films: data}
}

export default reviewPage