import React, { Component, Fragment } from 'react';
import {
   Col,
   ListGroup,
   ListGroupItem,
   Media
} from 'reactstrap';
import { IMAGE_URL } from './../../constants';
import { connect } from 'react-redux';
import ListModal from './ListModal';
import './Movies.css';

class ListMovieItems extends Component {
   constructor(props) {
      super(props);
      this.getGenre = this.getGenre.bind(this);
      this.toggle = this.toggle.bind(this);
      this.state = {
         modal: false,
         selected: {}
      };
   }

   toggle(item) {
      this.setState(prevState => ({
         modal: !prevState.modal,
         selected: item
      }));
   }

   getGenre = ids => {
      if (!this.props.genres) {
         return;
      }

      const descriptions = ids.map(item => {
         return Object.keys(this.props.genres)
            .filter(genre => item === this.props.genres[genre].id)
            .map(genre => {
               return this.props.genres[genre].name
            })
      });
      return descriptions.join(', ');
   }

   render() {
      if (!this.props.movies.results) {
         return <h1 className="text-center">Loading...</h1>
      }
      return (
         <Fragment>
            <Col md={4}>
               <ListGroup>
                  {this.props.movies.results.slice(0, 7).map(item => (
                     <ListGroupItem key={item.id} onClick={() => this.toggle(item)}>
                        <Media>
                           <Media left href="#">
                              <img className="img-thumbnail img-responsive" style={{ width: 100 }} src={item.poster_path ? IMAGE_URL + `${item.poster_path}` : IMAGE_URL + `${item.backdrop_path}`} />
                           </Media>
                           <Media body className="pl-3 row-relative">
                              <h5>
                                 {item.title}
                              </h5>
                              {/* <p>{item.overview.substr(0, 150).concat('...')}</p> */}
                              <p>Release date: {item.release_date}</p>
                              <p className="text-muted ts-4">Genre: {this.getGenre(item.genre_ids)}</p>
                           </Media>
                        </Media>
                     </ListGroupItem>
                  ))}
               </ListGroup>
            </Col>
            <Col md={4}>
               <ListGroup>
                  {this.props.movies.results.slice(7, 14).map(item => (
                     <ListGroupItem key={item.id} onClick={() => this.toggle(item)}>
                        <Media>
                           <Media left href="#">
                              <img className="img-thumbnail img-responsive" style={{ width: 100 }} src={item.poster_path ? IMAGE_URL + `${item.poster_path}` : IMAGE_URL + `${item.backdrop_path}`} />
                           </Media>
                           <Media body className="pl-3 row-relative">
                              <h5>
                                 {item.title}
                              </h5>
                              {/* <p>{item.overview.substr(0, 150).concat('...')}</p> */}
                              <p>Release date: {item.release_date}</p>
                              <p className="text-muted ts-4">Genre: {this.getGenre(item.genre_ids)}</p>
                           </Media>
                        </Media>
                     </ListGroupItem>
                  ))}
               </ListGroup>
            </Col>
            <Col md={4}>
               <ListGroup>
                  {this.props.movies.results.slice(14).map(item => (
                     <ListGroupItem key={item.id} onClick={() => this.toggle(item)}>
                        <Media>
                           <Media left href="#">
                              <img className="img-thumbnail img-responsive" style={{ width: 100 }} src={item.poster_path ? IMAGE_URL + `${item.poster_path}` : IMAGE_URL + `${item.backdrop_path}`} />
                           </Media>
                           <Media body className="pl-3">
                              <h5>
                                 {item.title}
                              </h5>
                              {/* <p>{item.overview.substr(0, 150).concat('...')}</p> */}
                              <p>Release date: {item.release_date}</p>
                              <p className="text-muted ts-4">Genre: {this.getGenre(item.genre_ids)}</p>
                           </Media>
                        </Media>
                     </ListGroupItem>
                  ))}
               </ListGroup>
            </Col>

            {this.state.selected && <ListModal modal={this.state.modal} toggle={this.toggle} item={this.state.selected} />}

         </Fragment>
      )
   }
}

const mapStateToProps = state => ({
   movies: state.movieReducer.movies,
   genres: state.genreReducer.genres
});

export default connect(mapStateToProps, {})(ListMovieItems);