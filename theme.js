import { createMuiTheme } from '@material-ui/core/styles';
import createBreakpoints from '@material-ui/core/styles/createBreakpoints';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const breakpoints = createBreakpoints({});
let theme = createMuiTheme({
	overrides: {
		MuiTypography: {
			h1: {
				fontSize: 'clamp(2.5rem, 5vw, 6rem)',
			},
			h2: {
				fontSize: 'clamp(1.9rem, 3.25vw, 3.75rem)',
			},
			h3: {
				fontSize: 'clamp(1.7rem, 2.9vw, 3rem)',
			},
			h4: {
				fontSize: 'clamp(1.55rem, 2.6vw, 2.125rem)',
			},
			h5: {
				fontSize: 'clamp(1.35rem, 2.4vw, 1.5rem)',
			},
			h6: {
				fontSize: 'clamp(1.1rem, 2.2vw, 1.25rem)',
			},
			body1: {
				fontSize: 'clamp(0.9rem, 2vw, 1rem)',
			},
			body2: {
				fontSize: 'clamp(0.8rem, 5vw, 0.875rem)',
			},
			subtitle1: {
				fontSize: 'clamp(0.9rem, 2vw, 1rem)',
			},
			subtitle2: {
				fontSize: 'clamp(0.8rem, 5vw, 0.875rem)',
			},
			button: {
				fontSize: 'clamp(0.71rem, 1vw, 0.875rem)',
			},
			caption: {
				fontSize: 'clamp(0.71rem, 1vw, 0.75rem)',
			},
			overline: {
				fontSize: 'clamp(0.71rem, 1vw, 0.75rem)',
			},
		},
	},
});

export default theme;
