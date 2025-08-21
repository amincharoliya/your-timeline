/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from "@wordpress/block-editor";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./editor.scss";
import { InspectorBlock } from "./InspectorBlock";
import VerticalTimeline from "./VerticalTimeline";
import HorizontalTimeline from "./HorizontalTimeline";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
	const { TimelineLabelColor, headingColor, DescriptionColor } = attributes;

	const blockProps = useBlockProps({
		style: {
			"--your-timeline-primary-color": TimelineLabelColor,
			"--your-timeline-heading-color": headingColor,
			"--your-timeline-description-color": DescriptionColor,
		},
	});
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
		<div {...blockProps}>
			<InspectorBlock attributes={attributes} setAttributes={setAttributes} />
			{attributes.orientation === "horizontal" ? (
				<HorizontalTimeline
					attributes={attributes}
					updatePoint={updatePoint}
					removePoint={removePoint}
					AddPoint={AddPoint}
				/>
			) : (
				<VerticalTimeline
					attributes={attributes}
					updatePoint={updatePoint}
					removePoint={removePoint}
					AddPoint={AddPoint}
				/>
			)}
		</div>
	);
}
