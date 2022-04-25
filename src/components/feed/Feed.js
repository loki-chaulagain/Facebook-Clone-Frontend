import React, { useEffect } from 'react'
import Share from '../share/Share'
import "./feed.scss"
import Post from '../post/Post'
import { useState } from 'react'
import axios from 'axios'



function Feed({ username }) {

  //When we render this Feed component  we want to get the posts from the database
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchPosts = async () => {
      const res = username ? await axios.get("/posts/profile/" + username) : await axios.get("/posts/timeline/624da824013d67d405ab116e")
      setPosts(res.data)
    }
    fetchPosts()

    return () => {
    };
  }, [username]);//run this useEffect only once when you render the Feed component



  return (
    <div className='feed'>
      <div className="feedWrapper">
        <Share />
        {posts.map((p, key) => (
          <Post key={key} post={p} />
        ))}
      </div>
    </div>
  )
}


export default Feed












//CLIENT SIDE ONLY==========================>
// import React from 'react'
// import Share from '../share/Share'
// import "./feed.scss"
// import Post from '../post/Post'
// import { Posts } from "../../dummyData"


// function Feed() {
//   return (
//     <div className='feed'>
//       <div className="feedWrapper">
//         <Share />
//         {Posts.map((p) => (
//           <Post key={p.id} post={p} />
//         ))}
//       </div>
//     </div>
//   )
// }

// export default Feed