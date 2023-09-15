import React, { useContext } from 'react';
import { ScrollMenu  } from 'react-horizontal-scrolling-menu';
import { Box, Typography } from '@mui/material';
import { VisibilityContext } from "react-horizontal-scrolling-menu";



import ExerciseCard from './ExerciseCard';
import BodyPart from './BodyPart';
import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';



  const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);


  return (
       <div onClick={() => scrollPrev()} className="right-arrow">
          <img src={LeftArrowIcon} alt="right-arrow" />
       </div>

  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <div onClick={() => scrollNext()} className="left-arrow">
      <img src={RightArrowIcon} alt="right-arrow" />
    </div>
  );
};

const HorizontalScrollbar = ({ data, bodyParts, setBodyPart, bodyPart }) => (
<ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
  <div style={{ display: 'flex', flexDirection: 'row'}}>
    {data.map((item) => (
      <Box
        key={item.id || item}
        itemId={item.id || item}
        title={item.id || item}
        m="0 40px"
      >
        {bodyParts ? <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} /> : <ExerciseCard exercise={item} />}
      </Box>
    ))}
  </div>
</ScrollMenu>

);

export default HorizontalScrollbar;
