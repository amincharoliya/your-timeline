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

	const addPoint = useCallback(() => {
		setAttributes((prev) => ({
			points: [...prev.points, { date: "", title: "", description: "" }],
		}));
	}, [setAttributes]);

	const updatePoint = useCallback(
		(index, newPoint) => {
			setAttributes((prev) => {
				const points = [...prev.points];
				points[index] = newPoint;
				return { points };
			});
		},
		[setAttributes],
	);

	const removePoint = useCallback(
		(index) => {
			setAttributes((prev) => {
				const points = [...prev.points];
				points.splice(index, 1);
				return { points };
			});
		},
		[setAttributes],
	);

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
