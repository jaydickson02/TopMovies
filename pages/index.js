
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

let linkStyles = {
    textDecoration: "none"
}

let ListItems = (props) => (

    props.items.map(item =>  
        (
        <li key={item.title}>
            <Link href={'reviews/[id]'} as={'reviews/' + item.title}>
                <a style={linkStyles}>
                    {item.title}
                </a>
            </Link>
        </li>
        )
    )
);


let main = (props) => {

    return(
    <div>
        <ul>
        {<ListItems items = {props.films.results}/>}
        </ul>
    </div>
    );

        };

main.getInitialProps = async () => {
    const res = await fetch('http://api.themoviedb.org/3/movie/top_rated?api_key=74a80734c82b55bcc9d45771d750b136');
    const data = await res.json();
    

    return {films: data}

}


export default main;