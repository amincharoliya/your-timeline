/**
 * Reset Button Component
 *
 * Provides a reset button to restore a specific block attribute
 * back to its default value as defined in the block settings.
 *
 * @component
 *
 * @param {Object}   props                        - Component props.
 * @param {string}   props.attribute              - Attribute key to be reset.
 * @param {Function} props.setAttributes          - Callback to update block attributes.
 * @param {Object}   props.defaultAttributes      - Object containing default values for attributes.
 * @param {*}        props.defaultAttributes[attribute].default - Default value of the attribute.
 *
 * @returns {JSX.Element} A button that resets the given attribute to its default value.
 */

import { __ } from "@wordpress/i18n";
import { Button } from "@wordpress/components";
import { useCallback } from "@wordpress/element";

const ResetButton = ({ attribute, setAttributes, defaultAttributes }) => {
	const handleReset = useCallback(() => {
		const defaultValue = defaultAttributes?.[attribute]?.default ?? "";
		setAttributes({ [attribute]: defaultValue });
	}, [attribute, setAttributes, defaultAttributes]);

	return (
		<Button
			label={__("Reset", "my-block")}
			showTooltip
			className="your-block-reset"
			variant="link"
			onClick={handleReset}
			icon="image-rotate"
			iconSize={14}
		/>
	);
};

export default ResetButton;
