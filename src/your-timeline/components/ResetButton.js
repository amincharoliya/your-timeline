// components/ResetButton.js
import { __ } from "@wordpress/i18n";
import { Button } from "@wordpress/components";
import metadata from "../block.json";

const ResetButton = ({ attribute, setAttributes, label = "Reset" }) => {
	const defaults = metadata.attributes;

	const handleReset = () => {
		if (!defaults[attribute]) return;

		// Reset by falling back to default value
		setAttributes({
			[attribute]: defaults[attribute].default ?? undefined,
		});
	};

	return (
		<Button
			label={__("Reset", "my-block")}
			showTooltip={true}
			className="your-block-reset"
			variant="link"
			onClick={handleReset}
			icon="image-rotate"
			iconSize={16}
		/>
	);
};

export default ResetButton;
