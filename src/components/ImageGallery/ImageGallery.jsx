import { Component } from "react";
//import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem'
//import { Button } from '../Button/Button';
//import { Loader } from '../Loader/Loader'
//import { Button } from './Button.styled';
//import { getImages } from 'services/getImages';
//import PropTypes from 'prop-types';

//import { Ul } from './ImageGallery.styled';

export class ImageGallery extends Component {
    state = {};
    //страхуємо від повторного запиту
    componentDidUpdate(prevProps, prevState) {
        const text = this.props.searchText.trim()
        if (prevProps.searchText !== text && text) {
        }
        }
        render() {
            return <></>
        }
    }
