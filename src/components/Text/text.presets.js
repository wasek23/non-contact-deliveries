import colors from '../../theme/colors';
import typography from '../../theme/typography';

const BASE = {
	fontFamily: typography.text,
	fontSize: 17,
	color: colors.gray
}
const HEADING = {
	fontFamily: typography.heading,
	fontWeight: '700',
	color: colors.dark
}

const presets = {
	default: BASE,
	h1: {
		...HEADING,
		fontSize: 34
	},
	h2: {
		...HEADING,
		fontSize: 30
	},
	h3: {
		...BASE,
		fontSize: 22,
		fontWeight: '700',
		color: colors.dark
	},
	upper: {
		...BASE,
		fontSize: 15,
		fontWeight: '600',
		textTransform: 'uppercase',
	}
}
export default presets;