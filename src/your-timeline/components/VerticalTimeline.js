/**
 * Vertical Timeline Component
 *
 * Displays timeline items in a vertical layout with left/right alternating positions
 *
 * @param {Object} props - Component props
 * @param {Object} props.attributes - Block attributes
 * @param {Function} props.updatePoint - Function to update a timeline point
 * @param {Function} props.removePoint - Function to remove a timeline point
 * @param {Function} props.addPoint - Function to add a new timeline point
 *
 * @returns {JSX.Element} Vertical timeline component
 */

import { __ } from "@wordpress/i18n";
import { RichText } from "@wordpress/block-editor";
import { Button } from "@wordpress/components";

const VerticalTimeline = ({
	attributes,
	updatePoint,
	removePoint,
	addPoint,
}) => {
	const LayoutSideOption =
		attributes.layoutSide === "left" ? "layout-side-left" : "layout-side-right";
	return (
		<div
			className={`your-timeline-block ${
				attributes.orientation === "vertical"
					? attributes.layout + "-layout"
					: ""
			} ${LayoutSideOption}`}
		>
			<div
				className={`your-timeline-block__list ${
					attributes.points.length ? "has-points" : ""
				}`}
			>
				{attributes.points.map((point, index) => (
					<div className="your-timeline-block__item" key={index}>
						<div className="your-timeline-block__date">
							<RichText
								tagName="p"
								placeholder={__("Enter Date", "my-block")}
								value={point.date}
								onChange={(value) =>
									updatePoint(index, { ...point, date: value })
								}
								allowedFormats={[]}
							/>
						</div>
						<div className="your-timeline-block__icon"></div>
						<div className="your-timeline-block__content">
							<div className="your-timeline-block__title">
								<RichText
									tagName="h2"
									value={point.title}
									placeholder={__("Enter Title", "my-block")}
									onChange={(value) =>
										updatePoint(index, { ...point, title: value })
									}
								/>
							</div>
							<div className="your-timeline-block__description">
								<RichText
									tagName="div"
									value={point.description}
									placeholder={__("Enter Description", "my-block")}
									onChange={(value) =>
										updatePoint(index, { ...point, description: value })
									}
								/>
							</div>
						</div>
						{/* Add MediaUpload or icon picker here */}
						<Button
							className="your-timeline-block__remove-button"
							icon="trash"
							onClick={() => removePoint(index)}
						>
							<span>{__("Remove Timeline", "my-block")}</span>
						</Button>
						{/* Add move up/down buttons if desired */}
					</div>
				))}
			</div>
			{attributes.points.length > 0 && (
				<Button
					className="your-timeline-block__add-button"
					variant="primary"
					icon="plus"
					iconSize={14}
					onClick={() => addPoint()}
					text="Add Point"
				/>
			)}
		</div>
	);
};

export default VerticalTimeline;
