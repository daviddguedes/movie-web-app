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
      return (
         <Fragment>
            <Col>
               <ListGroup>
                  {this.props.movies.results.slice(0, 10).map(item => (
                     <ListGroupItem key={item.id} onClick={() => this.toggle(item)}>
                        <Media>
                           <Media left href="#">
                              <img src={IMAGE_URL + `${item.poster_path}`} />
                           </Media>
                           <Media body className="pl-3">
                              <h4>
                                 {item.title}
                              </h4>
                              <p>{item.overview.substr(0, 150).concat('...')}</p>
                              <p>Release date: {item.release_date}</p>
                              <p>Genre: {this.getGenre(item.genre_ids)}</p>
                           </Media>
                        </Media>
                     </ListGroupItem>
                  ))}
               </ListGroup>
            </Col>
            <Col>
               <ListGroup>
                  {this.props.movies.results.slice(10).map(item => (
                     <ListGroupItem key={item.id} onClick={() => this.toggle(item)}>
                        <Media>
                           <Media left href="#">
                              <img src={IMAGE_URL + `${item.poster_path}`} />
                           </Media>
                           <Media body className="pl-3">
                              <h4>
                                 {item.title}
                              </h4>
                              <p>{item.overview.substr(0, 150).concat('...')}</p>
                              <p>Release date: {item.release_date}</p>
                              <p>Genre: {this.getGenre(item.genre_ids)}</p>
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