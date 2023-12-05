export default function cleanSet(set, startString) {
	if (!startString || startString.length === 0) {
		return '';
	}

	const cleanedValues = [...set]
		.filter(parametro => parametro !== undefined && parametro.startsWith(startString))
		.map(parametro => parametro !== undefined ? parametro.slice(startString.length) : '');

	return cleanedValues.join('-');
}
