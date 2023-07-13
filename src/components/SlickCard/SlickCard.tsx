import React from 'react';
import './SlickCard.scss';

interface SlickCardProps {
  header: string;
  body: string;
}

const SlickCard: React.FC<SlickCardProps> = ({ header, body }) => {
  return (
    <div className="slickcard__container">
      <div className="slickcard__header">{header}</div>
      <div className="slickcard__body">{body}</div>
    </div>
  );
};

export default SlickCard;
