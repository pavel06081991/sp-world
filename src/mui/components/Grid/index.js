import React from 'react';
import styled from 'styled-components';
import MuiGrid from 'material-ui/Grid';

const Grid = styled(({ ...params }) => (
  <MuiGrid { ...params } />
))``;

export default Grid;
