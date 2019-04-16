import React, { Component, Fragment } from 'react';
import {
   Modal,
   ModalHeader,
   ModalBody,
   Media
} from 'reactstrap';
import { IMAGE_URL } from './../../constants';
import { connect } from 'react-redux';

class ListModal extends Component {
   constructor(props) {
      super(props);
      this.setGenreDescription = this.setGenreDescription.bind(this);
      this.toggle = this.toggle.bind(this);
   }

   toggle(item) {
      this.props.toggle(item);
   }

   setGenreDescription = ids => {
      if (!this.props.modal) {
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
      const { item } = this.props;

      return (
         <Fragment>
            <Modal isOpen={this.props.modal} toggle={() => this.toggle(item)} size="lg">
               <ModalHeader toggle={() => this.toggle(item)}>Movie Details</ModalHeader>
               <ModalBody>
                  {item && <Media>
                     <Media left href="#">
                        <img src={IMAGE_URL + `${item.poster_path}`} />
                     </Media>
                     <Media body className="pl-3">
                        <h4>
                           {item.title}
                        </h4>
                        <p>{item.overview}</p>
                        <p>Release date: {item.release_date}</p>
                        {item && <p>Genre: {this.setGenreDescription(item.genre_ids)}</p>}
                     </Media>
                  </Media>}
               </ModalBody>
            </Modal>
         </Fragment>
      )
   };
}

const mapStateToProps = state => ({
   genres: state.genreReducer.genres
});

export default connect(mapStateToProps, {})(ListModal);