// components/ResetButton.js
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
