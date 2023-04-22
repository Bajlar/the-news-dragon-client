import moment from 'moment';
import React from 'react';
import { Image } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { FaRegBookmark, FaShareAlt, FaRegEye, FaRegStar, FaStar } from "react-icons/fa";
import Rating from 'react-rating';

const NewsCard = ({news}) => {
  // console.log(news);
  const {_id, title, image_url, details, author, total_view, rating} = news;
  return (
    <Card className="mb-4">
      <Card.Header className='d-flex justify-content-between align-items-center'>
        <div className="d-flex gap-3">
          <Image style={{height: '40px'}} src={author?.img} roundedCircle />
          <div>
            <p className='mb-0'>{author.name}</p>
            <p> {moment(author?.published_date).format('YYYY-MM-DD')}</p>
          </div>
        </div>
        <div>
          <FaRegBookmark></FaRegBookmark>
          <FaShareAlt></FaShareAlt>
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img variant="top" src={image_url} />
        <Card.Text>
          {details.length < 250 ? <>{details}</> : 
            <>{details.slice(0, 250)}... <br /> <Link className='text-warning' to={`/news/${_id}`}>Read More</Link> </>
          }
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted d-flex">
        <div className="flex-grow-1">
          <Rating
            placeholderRating={rating.number}
            readonly
            emptySymbol={<FaRegStar></FaRegStar>}
            placeholderSymbol={<FaStar className='text-warning' />}
            fullSymbol={<FaStar />}
          ></Rating>
          <span>{rating?.number}</span>
        </div>
        <div>
          <FaRegEye></FaRegEye> {total_view}
        </div>
      </Card.Footer>
    </Card>
  );
};

export default NewsCard;