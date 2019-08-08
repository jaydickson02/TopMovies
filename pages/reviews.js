

let filmReviews = (props) => {
    let reviews;

    if(props.length > 1){
        reviews = props.reviews.map(entry => <li>Film: {entry.film} Author: {entry.author}</li>)
    } else {
        reviews = props.reviews;
    }
    
    console.log(props.reviews);
    

return (

    <ul>
        {reviews}
    </ul>

)

}

filmReviews.getInitalProps = async () => {
    const res = await fetch('http://localhost:3000/api/reviews/findall');
    const data = await res.json();

    console.log(data)
    return {reviews: data}
}

export default filmReviews;