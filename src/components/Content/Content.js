import React from 'react';
import {classNames} from '../../utilities';
import './Content.css';

export default function Content({intro, currentPage, pages}) {
  return (
    <div className="Content">
      {pages.map((page, index) => {
        const {title, image, description, background} = page;
        const pageIndex = index + 1;

        const className = classNames({
          'Page': true,
          'Page-Lesser': pageIndex < currentPage,
          'Page-Greater': pageIndex > currentPage,
        });

        const descriptionMarkup = image
          ? (
            <img
              src={image}
              className="Intro"
              alt={title}
            />
          )
          : (
            <div className="TextContainer">
              <h2 className="Title">{title}</h2>
              <p className="Description">{description}</p>
            </div>
          );

        return (
          <div
            key={title}
            className={className}
            style={{backgroundImage: `url(${background})`}}
          >
            {descriptionMarkup}
          </div>
        );
      })}
    </div>
  );
}
