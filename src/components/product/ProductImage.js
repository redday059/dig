import React from "react";

const ThumbImg = ({isActive, id, src, handleClick}) => {
  const onClick = () => handleClick(id)

  return (<img
    className={ isActive ? 'active' : 'inactive'}
    alt={id}
    onClick={onClick}
    src={src}
  />)
}

export default ({thumbs, originals, activeId, handleThumbClick}) => {
  return (
    <div>
      <img alt={activeId} className='original' src={originals[activeId]} />
      <div className='thumbs'>
        { thumbs.map(
          (thumbUrl, id) =>
            <ThumbImg isActive={activeId === id} id={id} key={id} src={thumbUrl} handleClick={handleThumbClick}/>
        )}
      </div>
    </div>
)}