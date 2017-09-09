import React from 'react';
import classNames from 'classnames';
import * as styles from './Content.scss';

export default function Content({intro, currentPage, pages}) {
  return (
    <div className={styles.Content}>
      {pages.map((page, index) => {
        const {title, image, description, background} = page;
        const pageIndex = index + 1;

        const className = classNames(
          styles.Page,
          pageIndex < currentPage && styles['Page-Lesser'],
          pageIndex > currentPage && styles['Page-Greater'],
        );

        const descriptionMarkup = image
          ? (
            <img
              src={image}
              className={styles.Intro}
              alt={title}
            />
          )
          : (
            <div className={styles.TextContainer}>
              <h2 className={styles.Title}>{title}</h2>
              <p className={styles.Description}>{description}</p>
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
