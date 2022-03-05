import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

class BlogItemDetails extends Component {
  state = {blogDetails: null, isLoading: true}

  componentDidMount() {
    this.getBlogData()
  }

  getBlogData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const blog = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const blogDetails = await blog.json()

    const formattedBlogDetails = {
      author: blogDetails.author,
      avatarUrl: blogDetails.avatar_url,
      content: blogDetails.content,
      id: blogDetails.id,
      imageUrl: blogDetails.image_url,
      title: blogDetails.title,
      topic: blogDetails.topic,
    }

    this.setState({blogDetails: formattedBlogDetails, isLoading: false})
    console.log(formattedBlogDetails)
  }

  render() {
    const {blogDetails, isLoading} = this.state
    return isLoading ? (
      <div testid="loader">
        <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
      </div>
    ) : (
      <div className="blog-item">
        <h1 className="heading heading1">{blogDetails.title}</h1>
        <div className="author-details">
          <img
            src={blogDetails.avatarUrl}
            alt={blogDetails.author}
            className="image3"
          />
          <p className="para">{blogDetails.author}</p>
        </div>
        <img
          src={blogDetails.imageUrl}
          alt={blogDetails.title}
          className="image4"
        />
        <p className="para">{blogDetails.content}</p>
      </div>
    )
  }
}

export default BlogItemDetails
