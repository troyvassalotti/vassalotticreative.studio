export const css = `
	.button {
		appearance: none;
		background-color: rebeccapurple;
		border: 0;
		color: white;
	}`;

export default function ({ content }) {
	return `
	<button class="button">${content}</button>
	`
}
