import { __ } from "@wordpress/i18n";
import { InspectorControls } from "@wordpress/block-editor";
import {
	PanelBody,
	SelectControl,
	ColorPalette,
	TabPanel,
	__experimentalToggleGroupControl as ToggleGroupControl,
	__experimentalToggleGroupControlOption as ToggleGroupControlOption,
} from "@wordpress/components";
import { useCallback, useMemo } from "@wordpress/element";

import metadata from "./block.json";
import ResetButton from "./components/ResetButton";

// Default attributes
const defaultAttributes = metadata.attributes;

const ColorSetting = ({ label, attribute, attributes, setAttributes }) => {
	const value = attributes[attribute];
	const defaultValue = defaultAttributes?.[attribute]?.default;

	const handleChange = useCallback(
		(newColor) => setAttributes({ [attribute]: newColor }),
		[setAttributes, attribute],
	);

	return (
		<div className="your-block-color-palette-wrap">
			<label>{label}</label>
			{defaultValue !== value && (
				<ResetButton
					attribute={attribute}
					setAttributes={setAttributes}
					defaultAttributes={defaultAttributes}
				/>
			)}
			<ColorPalette
				className="your-block-color-palette"
				value={value ?? defaultValue}
				onChange={handleChange}
			/>
		</div>
	);
};

export const InspectorBlock = ({ attributes, setAttributes }) => {
	const handleOrientationChange = useCallback(
		(newOrientation) => setAttributes({ orientation: newOrientation }),
		[setAttributes],
	);

	const handleLayoutChange = useCallback(
		(value) => setAttributes({ layout: value }),
		[setAttributes],
	);

	const handleLayoutSideChange = useCallback(
		(value) => setAttributes({ layoutSide: value }),
		[setAttributes],
	);

	return (
		<InspectorControls>
			<TabPanel
				className="my-block-tabs"
				activeClass="active-tab"
				tabs={[
					{ name: "timeline-settings", title: __("General", "my-block") },
					{ name: "style", title: __("Style", "my-block") },
					{ name: "advanced", title: __("Advanced", "my-block") },
				]}
			>
				{(tab) => {
					if (tab.name === "timeline-settings") {
						return (
							<PanelBody
								title={__("Timeline Settings", "my-block")}
								initialOpen
							>
								<SelectControl
									label={__("Orientation", "my-block")}
									value={attributes.orientation}
									onChange={handleOrientationChange}
									options={[
										{ label: __("Vertical", "my-block"), value: "vertical" },
										{
											label: __("Horizontal", "my-block"),
											value: "horizontal",
										},
									]}
								/>

								{attributes.orientation === "vertical" && (
									<ToggleGroupControl
										label={__("Timeline Layout", "my-block")}
										value={attributes.layout}
										isBlock
										onChange={handleLayoutChange}
									>
										<ToggleGroupControlOption
											value="single"
											label={__("Single Side", "my-block")}
										/>
										<ToggleGroupControlOption
											value="alternate"
											label={__("Alternating", "my-block")}
										/>
									</ToggleGroupControl>
								)}

								{attributes.layout === "single" && (
									<ToggleGroupControl
										label={__("Timeline Layout Side", "my-block")}
										value={attributes.layoutSide}
										isBlock
										onChange={handleLayoutSideChange}
									>
										<ToggleGroupControlOption
											value="left"
											label={__("Left", "my-block")}
										/>
										<ToggleGroupControlOption
											value="right"
											label={__("Right", "my-block")}
										/>
									</ToggleGroupControl>
								)}
							</PanelBody>
						);
					}

					if (tab.name === "style") {
						return (
							<PanelBody title={__("Style Settings", "my-block")} initialOpen>
								<h2 className="yourtimeline-block-settings-heading">
									{__("Timeline Label", "my-block")}
								</h2>
								<ColorSetting
									label={__("Color", "my-block")}
									attribute="TimelineLabelColor"
									attributes={attributes}
									setAttributes={setAttributes}
								/>
								<h2 className="yourtimeline-block-settings-heading">
									{__("Heading", "my-block")}
								</h2>
								<ColorSetting
									label={__("Color", "my-block")}
									attribute="headingColor"
									attributes={attributes}
									setAttributes={setAttributes}
								/>
								<h2 className="yourtimeline-block-settings-heading">
									{__("Description", "my-block")}
								</h2>
								<ColorSetting
									label={__("Color", "my-block")}
									attribute="DescriptionColor"
									attributes={attributes}
									setAttributes={setAttributes}
								/>
							</PanelBody>
						);
					}

					if (tab.name === "advanced") {
						return (
							<PanelBody>
								{__("Advanced settings coming soon", "my-block")}
							</PanelBody>
						);
					}
				}}
			</TabPanel>
		</InspectorControls>
	);
};
