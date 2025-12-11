/**
 * WordPress dependencies
 */
import { Button } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import './style.scss';

const ThemePanel: React.FC = () => {
	return (
		<div className="quillforms-theme-editor-panel">
			<div className="quillforms-theme-editor-panel-header">
				<Button isPrimary>{__( 'Select a Theme', 'quillforms' )}</Button>
			</div>
		</div>
	);
};

export default ThemePanel;
