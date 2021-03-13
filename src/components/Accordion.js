import React, { useState } from 'react';

const Accordion = ({ items, heading }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const onTitleClick = (index) => {
    setActiveIndex(index);
  };

  const renderedItems = items.map((item, index) => {
    const active = index === activeIndex ? 'active' : '';

    return (
      <React.Fragment key={item.title}>
        <div className={`title ${active}`} onClick={() => onTitleClick(index)}>
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className={`content ${active}`}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
   
    );
  });

  return (
    <div className="ui segment one column grid center aligned"> 
      <div className="ui  accordion column centered">
        <h1>{heading}</h1>
        {renderedItems}
      </div>
    </div>
  );
  
};

export default Accordion;
