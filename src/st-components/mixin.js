import { css } from 'styled-components';

import { orderedSize } from './settings';

export const pageCenter = css`
  ${({ theme }) => `
    max-width: ${theme.maxPageWidth};
    margin: 0 auto;
  `}
`;

export const breakpoints = orderedSize.reduce((acc, label) => {
  acc[label] = (...args) => css`
    ${({ theme }) => `
        @media (min-width: ${theme.breakpoints[label]}px) {
          ${css(...args)}
        }
      `}
  `;

  return acc;
}, {});

export const exactBreakpoints = orderedSize.reduce((acc, label, index) => {
  acc[label] = (...args) => css`
    ${({ theme }) => `
        @media (min-width: ${theme.breakpoints[label]}px) and (max-width: ${theme.breakpoints[orderedSize[index + 1]]}px) {
          ${css(...args)}
        }
      `}
  `;

  return acc;
}, {});


export default {
  pageCenter,
  breakpoints,
  exactBreakpoints,
};
