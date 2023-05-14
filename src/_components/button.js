export const css = `
	.button {
		appearance: none;
		background-color: var(--color-600);
		border: 0;
		color: var(--color-50);
	}`;

export default function ({ content }) {
	return `
	<button class="button">${content}</button>
	`
}
