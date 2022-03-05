import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import BlogItem from '../BlogItem'
import './index.css'

class BlogList extends Component {
  state = {blogsList: [], isLoading: true}

  componentDidMount() {
    this.getBlogsList()
  }

  getBlogsList = async () => {
    const blogs = await fetch('https://apis.ccbp.in/blogs')
    const blogsList = await blogs.json()
    const newBlogsList = blogsList.map(eachItem => ({
      author: eachItem.author,
      avatarUrl: eachItem.avatar_url,
      id: eachItem.id,
      imageUrl: eachItem.image_url,
      title: eachItem.title,
      topic: eachItem.topic,
    }))
    this.setState({blogsList: newBlogsList, isLoading: false})
    console.log(newBlogsList)
  }

  render() {
    const {blogsList, isLoading} = this.state
    return (
      <>
        <div className="profile-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/profile-img.png"
            alt="profile"
            className="image"
          />
          <h1 className="heading">Wade Warren</h1>
          <p className="para">Software developer at UK</p>
        </div>
        {isLoading ? (
          <div testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          <ul className="blogs-list">
            {blogsList.map(eachItem => (
              <BlogItem key={eachItem.id} itemDetails={eachItem} />
            ))}
          </ul>
        )}
      </>
    )
  }
}

export default BlogList
