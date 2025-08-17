import { __ } from "@wordpress/i18n";

import { InspectorControls } from "@wordpress/block-editor";

import {
	PanelBody,
	TextControl,
	ColorPalette,
	ToggleControl,
	TabPanel,
} from "@wordpress/components";

export const InspectorBlock = ({ attributes }) => (
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
							<TextControl
								label="Font"
								value={attributes.font}
								onChange={(font) => setAttributes({ font })}
							/>
							<ToggleControl
								label="Animations"
								checked={attributes.animations}
								onChange={(animations) => setAttributes({ animations })}
							/>
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
