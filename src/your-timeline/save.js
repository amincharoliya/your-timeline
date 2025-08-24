/**
 * Save function for Timeline Block
 *
 * Renders the timeline on the frontend based on user-selected orientation
 * and layout. Supports vertical and horizontal slider layouts.
 */

import { useBlockProps, RichText } from "@wordpress/block-editor";

export default function save({ attributes }) {
	const {
		TimelineLabelColor,
		headingColor,
		DescriptionColor,
		points,
		orientation,
		layout,
		layoutSide,
	} = attributes;

	const blockProps = useBlockProps.save({
		style: {
			"--your-timeline-primary-color": TimelineLabelColor,
			"--your-timeline-heading-color": headingColor,
			"--your-timeline-description-color": DescriptionColor,
		},
		className: `your-timeline-block ${orientation}-layout ${
			orientation === "vertical" ? `layout-side-${layoutSide}` : ""
		} ${
			orientation === "horizontal" && layout === "slider" ? "slider-layout" : ""
		}`,
	});

	return (
		<div {...blockProps}>
			<div
				className={`your-timeline-block__list ${
					points.length ? "has-points" : ""
				}`}
			>
				{points.map((point, index) => (
					<div className="your-timeline-block__item" key={index}>
						<div className="your-timeline-block__date">
							<RichText.Content tagName="p" value={point.date} />
						</div>
						<div className="your-timeline-block__icon"></div>
						<div className="your-timeline-block__content">
							<div className="your-timeline-block__title">
								<RichText.Content tagName="h2" value={point.title} />
							</div>
							<div className="your-timeline-block__description">
								<RichText.Content tagName="div" value={point.description} />
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
