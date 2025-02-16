import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const MovieTicket = styled.div`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  font-weight: 300;
  color: #444;
  
  .movie {
    margin: 10px auto;
    max-width: 800px;
    border-radius: 5px;
    display: flex;
    box-shadow: 0 5px 20px 10px rgba(0, 0, 0, .2);
    overflow: hidden;
  }

  .movie__hero {
    flex: 0 0 45%;
  }

  .movie__img {
    width: 100%;
    display: block;
  }

  .movie__content {
    background-color: #fff;
    flex: 1;
    padding: 35px 30px;
    display: flex;
    flex-direction: column;
  }

  .movie__price {
    background: linear-gradient(to bottom, #A9C9FF 0%, #FFBBEC 100%);
    flex: 0 0 50px;
    font-size: 18px;
    font-weight: bold;
    letter-spacing: 2px;
    color: rgb(255, 255, 255);
    writing-mode: vertical-lr;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .movie__title {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }

  .heading__primary {
    font-size: 16px;
    margin-right: auto;
    color: royalblue;
  }

  .fa-fire {
    color: salmon;
  }

  .movie__tag {
    font-size: 10px;
    color: #fff;
    padding: 2px 7px;
    border-radius: 100px;
    margin-right: 8px;
    display: block;
    text-transform: uppercase;
  }

  .movie__tag--1 {
    background-color: #A9C9FF;
  }

  .movie__tag--2 {
    background-color: #FFBBEC;
  }

  .movie__description {
    font-size: 14px;
  }

  .movie__details {
    display: flex;
    margin: auto;
  }

  .movie__detail {
    font-size: 13px;
    margin-right: 20px;
    display: flex;
    align-items: center;
  }

  .icons i {
    margin-right: 3px;
    font-size: 18px;
  }

  .icons-red {
    color: salmon;
  }
  .icons-grey {
    color: grey;
  }

  .icons-yellow {
    color: rgb(190, 190, 71);
  }
`;

export default class MovieList extends Component {
  render() {
    return (
     <div>abc</div>
    );
  }
}