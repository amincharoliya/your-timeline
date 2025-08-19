import { __ } from "@wordpress/i18n";

import { InspectorControls } from "@wordpress/block-editor";

import {
	PanelBody,
	TextControl,
	SelectControl,
	ColorPalette,
	ToggleControl,
	TabPanel,
	__experimentalToggleGroupControl as ToggleGroupControl,
	__experimentalToggleGroupControlOption as ToggleGroupControlOption,
} from "@wordpress/components";

export const InspectorBlock = ({ attributes, setAttributes }) => (
	<InspectorControls>
		<TabPanel
			className="my-block-tabs"
			activeClass="active-tab"
			tabs={[
				{
					name: "timeline-settings",
					title: __("General", "my-block"),
					className: "tab-timeline-settings",
				},
				{
					name: "style",
					title: __("Style", "my-block"),
					className: "tab-style",
				},
				{
					name: "advanced",
					title: __("Advanced", "my-block"),
					className: "tab-advanced",
				},
			]}
		>
			{(tab) => {
				if (tab.name === "timeline-settings") {
					return (
						<PanelBody>
							<SelectControl
								label="Orientation"
								value={attributes.orientation}
								onChange={(newOrientation) =>
									setAttributes({ orientation: newOrientation })
								}
								options={[
									{ label: __("Vertical", "my-block"), value: "vertical" },
									{ label: __("Horizontal", "my-block"), value: "horizontal" },
								]}
							/>

							{attributes.orientation === "vertical" && (
								<ToggleGroupControl
									label={__("Timeline Layout", "my-block")}
									value={attributes.layout}
									isBlock
									onChange={(value) => setAttributes({ layout: value })}
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
									onChange={(value) => setAttributes({ layoutSide: value })}
								>
									<ToggleGroupControlOption
										value="left"
										label={__("Left Side", "my-block")}
									/>
									<ToggleGroupControlOption
										value="right"
										label={__("Right Side", "my-block")}
									/>
								</ToggleGroupControl>
							)}
						</PanelBody>
					);
				}

				if (tab.name === "style") {
					return (
						<PanelBody>
							<h2 className="yourtimeline-block-settings-heading">
								{__("Timeline Label", "my-block")}
							</h2>
							<div className="your-block-color-palette-wrap">
								<p>Color</p>
								<ColorPalette
									className="your-block-color-palette"
									value={attributes.TimelineLabelColor}
									onChange={(newColor) =>
										setAttributes({ TimelineLabelColor: newColor })
									}
								/>
							</div>

							<h2 className="yourtimeline-block-settings-heading">
								{__("Heading", "my-block")}
							</h2>
							<div className="your-block-color-palette-wrap">
								<p>Color</p>
								<ColorPalette
									className="your-block-color-palette"
									value={attributes.headingColor}
									onChange={(newColor) =>
										setAttributes({ headingColor: newColor })
									}
								/>
							</div>

							<h2 className="yourtimeline-block-settings-heading">
								{__("Description", "my-block")}
							</h2>
							<div className="your-block-color-palette-wrap">
								<p>Color</p>
								<ColorPalette
									className="your-block-color-palette"
									value={attributes.DescriptionColor}
									onChange={(newColor) =>
										setAttributes({ DescriptionColor: newColor })
									}
								/>
							</div>
						</PanelBody>
					);
				}
			}}
		</TabPanel>
	</InspectorControls>
);
