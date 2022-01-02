export function generateId(len = 20) {
	return [...Array(len)].map(i => (~~(Math.random() * 36)).toString(36)).join('');
}
