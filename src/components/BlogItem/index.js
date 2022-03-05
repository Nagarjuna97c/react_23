import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {itemDetails} = props
  const {author, avatarUrl, id, imageUrl, title, topic} = itemDetails

  return (
    <Link to={`blogs/${id}`} className="link-container">
      <li className="post-container">
        <img src={imageUrl} alt={title} className="image2" />
        <div className="data-container">
          <p className="para">{topic}</p>
          <h1 className="heading">{title}</h1>
          <div className="author-details">
            <img src={avatarUrl} alt={author} className="image3" />
            <p className="para">{author}</p>
          </div>
        </div>
      </li>
    </Link>
  )
}

export default BlogItem
