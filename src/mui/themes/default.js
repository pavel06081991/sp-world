import { createMuiTheme } from 'material-ui/styles';

import styledComponentsTheme from 'st-components/themes/default';
import { orderedSize } from 'st-components/settings';

export default createMuiTheme({
  breakpoints: {
    keys: orderedSize,
    values: styledComponentsTheme.breakpoints,
  }
});
