import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    position: 'relative',
    width: '100%',
    height: '30px',
    backgroundColor: '#D8C7A2',
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer', 
    justifyContent: 'center',
    overflow: 'hidden',
    "@media (max-width:600px)": {
      height: '18px',
    },
  },
  title: {
    position: 'absolute',
    color: '#A66C36',
    opacity: 0,
    transition: 'opacity 0.5s ease-in-out',
    whiteSpace: 'nowrap',
    fontSize: '24px',
    fontWeight: 'bold',
    "@media (max-width:600px)": {
      fontSize: "16px",
    },
    '&.visible': {
      opacity: 1,
    },
  },
}));

const ScrollingTitle = () => {
  const classes = useStyles();
  const titles = [
    "Lifetime exchange - Exchange your old one with the new one",
    "Flash sale Notice -50% off",
    "Get Freebies on every purchase",
    "Pan India free shipping",
  ];

  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      setCurrentTitleIndex(prevIndex => (prevIndex + 1) % titles.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [paused, titles.length]);

  return (
    <div
      className={classes.mainContainer}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {titles.map((title, index) => (
        <div
          key={index}
          className={`${classes.title} ${index === currentTitleIndex ? 'visible' : ''}`}
        >
          {title}
        </div>
      ))}
    </div>
  );
};

export default ScrollingTitle;
