import React from "react";

export default ({thumbs, originals, activeId, createOnThumbClick}) => (
  <div>
    <img alt={activeId} className='original' src={originals[activeId]} />
    <div className='thumbs'>
      { thumbs.map(
        (thumbUrl, id) =>
          <img
            className={ activeId === id ? 'active' : 'inactive'}
            alt={activeId}
            key={id}
            onClick={createOnThumbClick(id)}
            src={thumbUrl}
          />
      )}
    </div>
  </div>
)