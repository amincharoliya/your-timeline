/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, RichText } from "@wordpress/block-editor";

import { TextControl, Button, Icon } from "@wordpress/components";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./editor.scss";
import AddPoint from "./AddPoint";
import { InspectorBlock } from "./InspectorBlock";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
	const AddPoint = () => {
		const newPoint = {
			date: "",
			title: "",
			description: "",
		};
		setAttributes({ points: [...attributes.points, newPoint] });
	};

	const updatePoint = (index, newPoint) => {
		const points = [...attributes.points];
		points[index] = newPoint;
		setAttributes({ points });
	};

	const removePoint = (index) => {
		const points = [...attributes.points];
		points.splice(index, 1);
		setAttributes({ points });
	};

	return (
		<div {...useBlockProps()}>
			<InspectorBlock attributes={attributes} setAttributes={setAttributes} />
			<div className="your-timeline-block">
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
				{attributes.points.length && (
					<Button
						className="your-timeline-block__add-button"
						variant="primary"
						icon="plus"
						iconSize={14}
						onClick={() => AddPoint()}
						text="Add Point"
					/>
				)}
			</div>
		</div>
	);
}
