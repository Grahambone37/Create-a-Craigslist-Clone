import Posting from "./posting"

export default function Gallery() {
    const craigPost = require('../../postings')
    let postList = craigPost.postings.map((data, i) => {
        return <Posting data={data} key={i} />
    })
    return (
        <div>
            <h2>Gallery</h2>
            {postList}
        </div>
    )
}