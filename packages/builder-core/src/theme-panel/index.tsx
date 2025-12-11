/**
 * WordPress dependencies
 */
import { dispatch } from '@wordpress/data';
import { Icon } from '@wordpress/components';

/**
 * Internal dependencies
 */
import ThemePanel from '../components/theme-panel';

const { registerBuilderPanel } = dispatch( 'quillForms/builder-panels' );

const icon = () => (
	<svg
		width="21"
		height="21"
		viewBox="0 0 21 21"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M10.5 19.25C15.3325 19.25 19.25 15.3325 19.25 10.5C19.25 5.66751 15.3325 1.75 10.5 1.75C5.66751 1.75 1.75 5.66751 1.75 10.5C1.75 15.3325 5.66751 19.25 10.5 19.25Z"
			stroke="currentColor"
			strokeWidth="1.5"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<path
			d="M1.75 10.5H19.25"
			stroke="currentColor"
			strokeWidth="1.5"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<path
			d="M10.5 1.75C13.0877 4.09333 14.455 7.21556 14.5 10.5C14.455 13.7844 13.0877 16.9067 10.5 19.25C7.91228 16.9067 6.545 13.7844 6.5 10.5C6.545 7.21556 7.91228 4.09333 10.5 1.75V1.75Z"
			stroke="currentColor"
			strokeWidth="1.5"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
);

registerBuilderPanel( 'theme', {
	title: 'Theme',
	icon: <Icon icon={ icon } />,
	render: ThemePanel,
	position: 2,
} );
