import {useRouter} from 'next/router';

let submitReview = () => (

    <form method="post" action="/api/reviews/add">
        <label>Film:</label>
        <input type="text" name="filmName"></input>
        <label>Review Content:</label>
        <input type="text" name="content"></input>
        <label>Author:</label>
        <input type="text" name="author"></input>
        <input type="hidden" name="filmId" value="123456789"></input>
        <input type="submit"></input>
    </form>
)

    


export default submitReview;