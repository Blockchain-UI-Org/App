import React from 'react'
// import { blogData } from '../BlogSection/blogData';
import './BlogCard.scss'

const BlogCard = ({blogData,col}) => {
    console.log("hey data",blogData);
    
  return (

        <>
        {
            blogData.map((item) => {
                return (

                 <div className={`col-md-${col}`}>
                   <img src={item.image} alt="hey" className='img-fluid'/>
                   <div className="contentWrapper">
                    <h4 className='upperTitle'>{item.upperTitle}</h4>
                    <h3 className='title'>{item.title}</h3>
                    <p className='content'>{item.description}</p>
                    <div className='d-flex align-items-center'>
                        <div>
                        <img src={item.authorImg} alt="author img"/>
                        </div>
                    <div className='d-flex flex-column authorWrapper'>
                    <span className='name'>{item.authorName}</span>
                        <span className='date'>{item.date}</span>
                    </div>
                    </div>
                   </div>
                 </div>
                )
            })
        }
      
    </>
  )
}

export default BlogCard