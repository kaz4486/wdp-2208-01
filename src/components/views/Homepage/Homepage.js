import React from 'react';
// import PropTypes from 'prop-types';

import styles from './Homepage.module.scss';

import Promoted from '../../features/Promoted/Promoted';
import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
import Feedback from '../../features/Feedback/Feedback';
import Deals from '../../features/Deals/Deals';
import ChatBot from '../../features/ChatBot/ChatBot';

const Homepage = () => (
  <div className={styles.root}>
    <Promoted />
    <FeatureBoxes />
    <Deals />
    <NewFurniture />
    <Feedback />
    <ChatBot />
  </div>
);

// Homepage.propTypes = {};

export default Homepage;
