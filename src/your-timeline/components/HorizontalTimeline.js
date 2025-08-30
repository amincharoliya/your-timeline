/**
 * Horizontal Timeline Component with Slider
 *
 * @component
 *
 * @param {Object} props - Component props
 * @param {Object} props.attributes - Block attributes
 * @param {Function} props.updatePoint - Function to update a timeline point
 * @param {Function} props.removePoint - Function to remove a timeline point
 * @param {Function} props.addPoint - Function to add a new timeline point
 *
 * @returns {JSX.Element} Horizontal timeline component with slider
 */

import { __ } from "@wordpress/i18n";
import { RichText } from "@wordpress/block-editor";
import { Button } from "@wordpress/components";
import { useState, useEffect, useRef } from "@wordpress/element";

const HorizontalTimeline = ({
	attributes,
	updatePoint,
	removePoint,
	addPoint,
}) => {
	const [currentSlide, setCurrentSlide] = useState(0);
	const sliderRef = useRef(null);

	const pointsPerSlide = 2;
	const points = attributes.points || [];
	const totalSlides = Math.max(1, Math.ceil(points.length / pointsPerSlide));

	// Adjust slider height when currentSlide changes
	useEffect(() => {
		if (sliderRef.current) {
			const activeSlide = sliderRef.current.querySelector(
				".your-timeline-block__slide.is-active",
			);
			if (activeSlide) {
				sliderRef.current.style.height = `${activeSlide.offsetHeight}px`;
			}
		}
	}, [currentSlide, points]);

	const nextSlide = () => {
		if (totalSlides > 1) {
			setCurrentSlide((prev) => (prev + 1) % totalSlides);
		}
	};

	const prevSlide = () => {
		if (totalSlides > 1) {
			setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
		}
	};

	// Reset slide if it's out of bounds after point removal
	useEffect(() => {
		if (currentSlide >= totalSlides && totalSlides > 0) {
			setCurrentSlide(Math.max(0, totalSlides - 1));
		}
	}, [totalSlides, currentSlide]);

	// If no points, show add button
	if (points.length === 0) {
		return (
			<div className="your-timeline-block horizontal-layout">
				<div className="your-timeline-block__empty">
					<p>
						{__("No timeline points yet. Add your first point!", "my-block")}
					</p>
					<Button
						className="your-timeline-block__add-button"
						variant="primary"
						icon="plus"
						iconSize={14}
						onClick={() => addPoint()}
						text="Add Point"
					/>
				</div>
			</div>
		);
	}

	return (
		<div className="your-timeline-block horizontal-layout">
			<div className="your-timeline-block__slider-container">
				{totalSlides > 1 && (
					<Button
						aria-label={__("Previous timeline", "my-block")}
						className="your-timeline-block__nav-button your-timeline-block__nav-button--prev"
						icon="arrow-left-alt2"
						onClick={prevSlide}
						disabled={currentSlide === 0}
					/>
				)}

				<div className="your-timeline-block__slider" ref={sliderRef}>
					{Array.from({ length: totalSlides }).map((_, slideIndex) => {
						const slidePoints = points.slice(
							slideIndex * pointsPerSlide,
							(slideIndex + 1) * pointsPerSlide,
						);

						const isActive = slideIndex === currentSlide;

						return (
							<div
								key={slideIndex}
								className={`your-timeline-block__slide ${
									isActive ? "is-active" : ""
								}`}
								style={{
									opacity: isActive ? 1 : 0,
									transform: isActive
										? "translateX(0)"
										: slideIndex > currentSlide
										? "translateX(100%)"
										: "translateX(-100%)",
								}}
							>
								<div className="your-timeline-block__list horizontal-list">
									{slidePoints.map((point, pointIndex) => {
										const actualIndex =
											slideIndex * pointsPerSlide + pointIndex;
										return (
											<div
												className="your-timeline-block__item"
												key={actualIndex}
											>
												<div className="your-timeline-block__date">
													<RichText
														tagName="p"
														placeholder={__("Enter Date", "my-block")}
														value={point.date}
														onChange={(value) =>
															updatePoint(actualIndex, {
																...point,
																date: value,
															})
														}
														allowedFormats={[]}
													/>
												</div>
												<div className="your-timeline-block__icon-wrap">
													<div className="your-timeline-block__icon"></div>
												</div>
												<div className="your-timeline-block__content">
													<div className="your-timeline-block__title">
														<RichText
															tagName="h2"
															value={point.title}
															placeholder={__("Enter Title", "my-block")}
															onChange={(value) =>
																updatePoint(actualIndex, {
																	...point,
																	title: value,
																})
															}
														/>
													</div>
													<div className="your-timeline-block__description">
														<RichText
															tagName="div"
															value={point.description}
															placeholder={__("Enter Description", "my-block")}
															onChange={(value) =>
																updatePoint(actualIndex, {
																	...point,
																	description: value,
																})
															}
														/>
													</div>
												</div>
												<Button
													aria-label={__("Remove timeline point", "my-block")}
													className="your-timeline-block__remove-button"
													icon="trash"
													onClick={() => removePoint(actualIndex)}
													size="small"
												/>
											</div>
										);
									})}
								</div>
							</div>
						);
					})}
				</div>

				{totalSlides > 1 && (
					<Button
						aria-label={__("Next Timeline", "my-block")}
						className="your-timeline-block__nav-button your-timeline-block__nav-button--next"
						icon="arrow-right-alt2"
						onClick={nextSlide}
						disabled={currentSlide === totalSlides - 1}
					/>
				)}
			</div>

			<div className="your-timeline-block__controls">
				{totalSlides > 1 && (
					<div className="your-timeline-block__pagination">
						<span style={{ fontSize: "14px", color: "#666" }}>
							{currentSlide + 1} / {totalSlides}
						</span>
					</div>
				)}

				<Button
					className="your-timeline-block__add-button"
					variant="primary"
					icon="plus"
					iconSize={14}
					onClick={() => addPoint()}
					text="Add Point"
				/>
			</div>
		</div>
	);
};

export default HorizontalTimeline;
