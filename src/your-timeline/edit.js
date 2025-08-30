import { useBlockProps } from "@wordpress/block-editor";
import { useCallback } from "@wordpress/element";

import "./editor.scss";
import { InspectorBlock } from "./InspectorBlock";
import VerticalTimeline from "./components/VerticalTimeline";
import HorizontalTimeline from "./components/HorizontalTimeline";

export default function Edit({ attributes, setAttributes }) {
	const { TimelineLabelColor, headingColor, DescriptionColor, orientation } =
		attributes;

	const blockProps = useBlockProps({
		style: {
			"--your-timeline-primary-color": TimelineLabelColor,
			"--your-timeline-heading-color": headingColor,
			"--your-timeline-description-color": DescriptionColor,
		},
	});

	const addPoint = () => {
		setAttributes({
			points: [...attributes.points, { date: "", title: "", description: "" }],
		});
	};

	const updatePoint = (index, newPoint) => {
		const points = [...attributes.points];
		points[index] = newPoint;
		setAttributes({ points });
	};

	const removePoint = (index) => {
		const newPoints = [...attributes.points];
		newPoints.splice(index, 1);
		setAttributes({ points: newPoints });
	};

	return (
		<div {...blockProps}>
			<InspectorBlock attributes={attributes} setAttributes={setAttributes} />
			{orientation === "horizontal" ? (
				<HorizontalTimeline
					attributes={attributes}
					updatePoint={updatePoint}
					removePoint={removePoint}
					addPoint={addPoint}
				/>
			) : (
				<VerticalTimeline
					attributes={attributes}
					updatePoint={updatePoint}
					removePoint={removePoint}
					addPoint={addPoint}
				/>
			)}
		</div>
	);
}
