/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/your-timeline/InspectorBlock.js":
/*!*********************************************!*\
  !*** ./src/your-timeline/InspectorBlock.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InspectorBlock: () => (/* binding */ InspectorBlock)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./src/your-timeline/block.json");
/* harmony import */ var _components_ResetButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/ResetButton */ "./src/your-timeline/components/ResetButton.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);







// Default attributes

const defaultAttributes = _block_json__WEBPACK_IMPORTED_MODULE_4__.attributes;
const ColorSetting = ({
  label,
  attribute,
  attributes,
  setAttributes
}) => {
  const value = attributes[attribute];
  const defaultValue = defaultAttributes?.[attribute]?.default;
  const handleChange = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useCallback)(newColor => setAttributes({
    [attribute]: newColor
  }), [setAttributes, attribute]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
    className: "your-block-color-palette-wrap",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("label", {
      children: label
    }), defaultValue !== value && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_ResetButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
      attribute: attribute,
      setAttributes: setAttributes,
      defaultAttributes: defaultAttributes
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ColorPalette, {
      className: "your-block-color-palette",
      value: value !== null && value !== void 0 ? value : defaultValue,
      onChange: handleChange
    })]
  });
};
const InspectorBlock = ({
  attributes,
  setAttributes
}) => {
  const handleOrientationChange = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useCallback)(newOrientation => setAttributes({
    orientation: newOrientation
  }), [setAttributes]);
  const handleLayoutChange = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useCallback)(value => setAttributes({
    layout: value
  }), [setAttributes]);
  const handleLayoutSideChange = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useCallback)(value => setAttributes({
    layoutSide: value
  }), [setAttributes]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TabPanel, {
      className: "my-block-tabs",
      activeClass: "active-tab",
      tabs: [{
        name: "timeline-settings",
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("General", "my-block")
      }, {
        name: "style",
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Style", "my-block")
      }, {
        name: "advanced",
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Advanced", "my-block")
      }],
      children: tab => {
        if (tab.name === "timeline-settings") {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
            title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Timeline Settings", "my-block"),
            initialOpen: true,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Orientation", "my-block"),
              value: attributes.orientation,
              onChange: handleOrientationChange,
              options: [{
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Vertical", "my-block"),
                value: "vertical"
              }, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Horizontal", "my-block"),
                value: "horizontal"
              }]
            }), attributes.orientation === "vertical" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalToggleGroupControl, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Timeline Layout", "my-block"),
              value: attributes.layout,
              isBlock: true,
              onChange: handleLayoutChange,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalToggleGroupControlOption, {
                value: "single",
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Single Side", "my-block")
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalToggleGroupControlOption, {
                value: "alternate",
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Alternating", "my-block")
              })]
            }), attributes.layout === "single" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalToggleGroupControl, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Timeline Layout Side", "my-block"),
              value: attributes.layoutSide,
              isBlock: true,
              onChange: handleLayoutSideChange,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalToggleGroupControlOption, {
                value: "left",
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Left", "my-block")
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalToggleGroupControlOption, {
                value: "right",
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Right", "my-block")
              })]
            })]
          });
        }
        if (tab.name === "style") {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
            title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Style Settings", "my-block"),
            initialOpen: true,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h2", {
              className: "yourtimeline-block-settings-heading",
              children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Timeline Label", "my-block")
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(ColorSetting, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Color", "my-block"),
              attribute: "TimelineLabelColor",
              attributes: attributes,
              setAttributes: setAttributes
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h2", {
              className: "yourtimeline-block-settings-heading",
              children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Heading", "my-block")
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(ColorSetting, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Color", "my-block"),
              attribute: "headingColor",
              attributes: attributes,
              setAttributes: setAttributes
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h2", {
              className: "yourtimeline-block-settings-heading",
              children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Description", "my-block")
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(ColorSetting, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Color", "my-block"),
              attribute: "DescriptionColor",
              attributes: attributes,
              setAttributes: setAttributes
            })]
          });
        }
        if (tab.name === "advanced") {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Advanced settings coming soon", "my-block")
          });
        }
      }
    })
  });
};

/***/ }),

/***/ "./src/your-timeline/block.json":
/*!**************************************!*\
  !*** ./src/your-timeline/block.json ***!
  \**************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"your-blocks/your-timeline","version":"0.1.0","title":"Your Timeline","category":"widgets","icon":"smiley","description":"Create Beautiful and interactive timelines.","example":{},"attributes":{"orientation":{"type":"string","default":"vertical"},"layout":{"type":"string","default":"alternate"},"layoutSide":{"type":"string","default":"right"},"points":{"type":"array","default":[{"id":1,"title":"Early 20th Century– ~50 years","description":"Widespread use of vaccines, better medicine, and reduced infant mortality raised life expectancy significantly.","date":"1900"},{"id":2,"title":"Post-WWII Modernization – ~60 years","description":"Antibiotics, public health systems, clean water, and better nutrition accelerated gains.","date":"1950"},{"id":3,"title":"Early 21st Century – ~67 years","description":"Most countries benefited from modern medicine. Some developed nations saw averages >75 years.","date":"2000"},{"id":4,"title":"Today – ~73 years","description":"High-income countries: 80–85 years. Low-income countries: 60–65 years. Major threats include chronic diseases, lifestyle illnesses, and pandemics like COVID-19.","date":"2020"}]},"TimelineLabelColor":{"type":"string","default":"inherit"},"headingColor":{"type":"string","default":"inherit"},"DescriptionColor":{"type":"string","default":"inherit"}},"supports":{"html":false},"textdomain":"your-timeline","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","viewScript":"file:./view.js"}');

/***/ }),

/***/ "./src/your-timeline/blockIcon.js":
/*!****************************************!*\
  !*** ./src/your-timeline/blockIcon.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BlockIcon: () => (/* binding */ BlockIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const BlockIcon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 640 640",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    d: "M192 233.3C220.3 221 240 192.8 240 160C240 115.8 204.2 80 160 80C115.8 80 80 115.8 80 160C80 192.8 99.7 221 128 233.3L128 288L64 288C46.3 288 32 302.3 32 320C32 337.7 46.3 352 64 352L288 352L288 406.7C259.7 419 240 447.2 240 480C240 524.2 275.8 560 320 560C364.2 560 400 524.2 400 480C400 447.2 380.3 419 352 406.7L352 352L576 352C593.7 352 608 337.7 608 320C608 302.3 593.7 288 576 288L512 288L512 233.3C540.3 221 560 192.8 560 160C560 115.8 524.2 80 480 80C435.8 80 400 115.8 400 160C400 192.8 419.7 221 448 233.3L448 288L192 288L192 233.3z"
  })
});

/***/ }),

/***/ "./src/your-timeline/blockStyles.scss":
/*!********************************************!*\
  !*** ./src/your-timeline/blockStyles.scss ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/your-timeline/components/HorizontalTimeline.js":
/*!************************************************************!*\
  !*** ./src/your-timeline/components/HorizontalTimeline.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
/**
 * Horizontal Timeline Component with Slider
 *
 * @component
 *
 * @param {Object} props - Component props
 * @param {Object} props.attributes - Block attributes
 * @param {Function} props.updatePoint - Function to update a timeline point
 * @param {Function} props.removePoint - Function to remove a timeline point
 * @param {Function} props.AddPoint - Function to add a new timeline point
 *
 * @returns {JSX.Element} Horizontal timeline component with slider
 */






const HorizontalTimeline = ({
  attributes,
  updatePoint,
  removePoint,
  AddPoint
}) => {
  const [currentSlide, setCurrentSlide] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(0);
  const sliderRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);
  const pointsPerSlide = 2;
  const points = attributes.points || [];
  const totalSlides = Math.max(1, Math.ceil(points.length / pointsPerSlide));

  // Adjust slider height when currentSlide changes
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    if (sliderRef.current) {
      const activeSlide = sliderRef.current.querySelector(".your-timeline-block__slide.is-active");
      if (activeSlide) {
        sliderRef.current.style.height = `${activeSlide.offsetHeight}px`;
      }
    }
  }, [currentSlide, points]);
  const nextSlide = () => {
    if (totalSlides > 1) {
      setCurrentSlide(prev => (prev + 1) % totalSlides);
    }
  };
  const prevSlide = () => {
    if (totalSlides > 1) {
      setCurrentSlide(prev => (prev - 1 + totalSlides) % totalSlides);
    }
  };

  // Reset slide if it's out of bounds after point removal
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    if (currentSlide >= totalSlides && totalSlides > 0) {
      setCurrentSlide(Math.max(0, totalSlides - 1));
    }
  }, [totalSlides, currentSlide]);

  // If no points, show add button
  if (points.length === 0) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: "your-timeline-block horizontal-layout",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "your-timeline-block__empty",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("No timeline points yet. Add your first point!", "my-block")
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
          className: "your-timeline-block__add-button",
          variant: "primary",
          icon: "plus",
          iconSize: 14,
          onClick: () => AddPoint(),
          text: "Add Point"
        })]
      })
    });
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    className: "your-timeline-block horizontal-layout",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "your-timeline-block__slider-container",
      children: [totalSlides > 1 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
        "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Previous timeline", "my-block"),
        className: "your-timeline-block__nav-button your-timeline-block__nav-button--prev",
        icon: "arrow-left-alt2",
        onClick: prevSlide,
        disabled: currentSlide === 0
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: "your-timeline-block__slider",
        ref: sliderRef,
        children: Array.from({
          length: totalSlides
        }).map((_, slideIndex) => {
          const slidePoints = points.slice(slideIndex * pointsPerSlide, (slideIndex + 1) * pointsPerSlide);
          const isActive = slideIndex === currentSlide;
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
            className: `your-timeline-block__slide ${isActive ? "is-active" : ""}`,
            style: {
              opacity: isActive ? 1 : 0,
              transform: isActive ? "translateX(0)" : slideIndex > currentSlide ? "translateX(100%)" : "translateX(-100%)"
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
              className: "your-timeline-block__list horizontal-list",
              children: slidePoints.map((point, pointIndex) => {
                const actualIndex = slideIndex * pointsPerSlide + pointIndex;
                return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                  className: "your-timeline-block__item",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                    className: "your-timeline-block__date",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
                      tagName: "p",
                      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Enter Date", "my-block"),
                      value: point.date,
                      onChange: value => updatePoint(actualIndex, {
                        ...point,
                        date: value
                      }),
                      allowedFormats: []
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                    className: "your-timeline-block__icon-wrap",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                      className: "your-timeline-block__icon"
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                    className: "your-timeline-block__content",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                      className: "your-timeline-block__title",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
                        tagName: "h2",
                        value: point.title,
                        placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Enter Title", "my-block"),
                        onChange: value => updatePoint(actualIndex, {
                          ...point,
                          title: value
                        })
                      })
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                      className: "your-timeline-block__description",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
                        tagName: "div",
                        value: point.description,
                        placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Enter Description", "my-block"),
                        onChange: value => updatePoint(actualIndex, {
                          ...point,
                          description: value
                        })
                      })
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
                    "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Remove timeline point", "my-block"),
                    className: "your-timeline-block__remove-button",
                    icon: "trash",
                    onClick: () => removePoint(actualIndex),
                    size: "small"
                  })]
                }, actualIndex);
              })
            })
          }, slideIndex);
        })
      }), totalSlides > 1 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
        "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Next Timeline", "my-block"),
        className: "your-timeline-block__nav-button your-timeline-block__nav-button--next",
        icon: "arrow-right-alt2",
        onClick: nextSlide,
        disabled: currentSlide === totalSlides - 1
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "your-timeline-block__controls",
      children: [totalSlides > 1 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: "your-timeline-block__pagination",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("span", {
          style: {
            fontSize: "14px",
            color: "#666"
          },
          children: [currentSlide + 1, " / ", totalSlides]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
        className: "your-timeline-block__add-button",
        variant: "primary",
        icon: "plus",
        iconSize: 14,
        onClick: () => AddPoint(),
        text: "Add Point"
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HorizontalTimeline);

/***/ }),

/***/ "./src/your-timeline/components/ResetButton.js":
/*!*****************************************************!*\
  !*** ./src/your-timeline/components/ResetButton.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
/**
 * Reset Button Component
 *
 * Provides a reset button to restore a specific block attribute
 * back to its default value as defined in the block settings.
 *
 * @component
 *
 * @param {Object}   props                        - Component props.
 * @param {string}   props.attribute              - Attribute key to be reset.
 * @param {Function} props.setAttributes          - Callback to update block attributes.
 * @param {Object}   props.defaultAttributes      - Object containing default values for attributes.
 * @param {*}        props.defaultAttributes[attribute].default - Default value of the attribute.
 *
 * @returns {JSX.Element} A button that resets the given attribute to its default value.
 */





const ResetButton = ({
  attribute,
  setAttributes,
  defaultAttributes
}) => {
  const handleReset = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useCallback)(() => {
    var _defaultAttributes$at;
    const defaultValue = (_defaultAttributes$at = defaultAttributes?.[attribute]?.default) !== null && _defaultAttributes$at !== void 0 ? _defaultAttributes$at : "";
    setAttributes({
      [attribute]: defaultValue
    });
  }, [attribute, setAttributes, defaultAttributes]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Reset", "my-block"),
    showTooltip: true,
    className: "your-block-reset",
    variant: "link",
    onClick: handleReset,
    icon: "image-rotate",
    iconSize: 14
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ResetButton);

/***/ }),

/***/ "./src/your-timeline/components/VerticalTimeline.js":
/*!**********************************************************!*\
  !*** ./src/your-timeline/components/VerticalTimeline.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
/**
 * Vertical Timeline Component
 *
 * Displays timeline items in a vertical layout with left/right alternating positions
 *
 * @param {Object} props - Component props
 * @param {Object} props.attributes - Block attributes
 * @param {Function} props.updatePoint - Function to update a timeline point
 * @param {Function} props.removePoint - Function to remove a timeline point
 * @param {Function} props.AddPoint - Function to add a new timeline point
 *
 * @returns {JSX.Element} Vertical timeline component
 */





const VerticalTimeline = ({
  attributes,
  updatePoint,
  removePoint,
  AddPoint
}) => {
  const LayoutSideOption = attributes.layoutSide === "left" ? "layout-side-left" : "layout-side-right";
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    className: `your-timeline-block ${attributes.orientation === "vertical" ? attributes.layout + "-layout" : ""} ${LayoutSideOption}`,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: `your-timeline-block__list ${attributes.points.length ? "has-points" : ""}`,
      children: attributes.points.map((point, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: "your-timeline-block__item",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          className: "your-timeline-block__date",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
            tagName: "p",
            placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Enter Date", "my-block"),
            value: point.date,
            onChange: value => updatePoint(index, {
              ...point,
              date: value
            }),
            allowedFormats: []
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          className: "your-timeline-block__icon"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "your-timeline-block__content",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            className: "your-timeline-block__title",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
              tagName: "h2",
              value: point.title,
              placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Enter Title", "my-block"),
              onChange: value => updatePoint(index, {
                ...point,
                title: value
              })
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            className: "your-timeline-block__description",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
              tagName: "div",
              value: point.description,
              placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Enter Description", "my-block"),
              onChange: value => updatePoint(index, {
                ...point,
                description: value
              })
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
          className: "your-timeline-block__remove-button",
          icon: "trash",
          onClick: () => removePoint(index),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Remove Timeline", "my-block")
          })
        })]
      }, index))
    }), attributes.points.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
      className: "your-timeline-block__add-button",
      variant: "primary",
      icon: "plus",
      iconSize: 14,
      onClick: () => AddPoint(),
      text: "Add Point"
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VerticalTimeline);

/***/ }),

/***/ "./src/your-timeline/edit.js":
/*!***********************************!*\
  !*** ./src/your-timeline/edit.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editor.scss */ "./src/your-timeline/editor.scss");
/* harmony import */ var _InspectorBlock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./InspectorBlock */ "./src/your-timeline/InspectorBlock.js");
/* harmony import */ var _components_VerticalTimeline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/VerticalTimeline */ "./src/your-timeline/components/VerticalTimeline.js");
/* harmony import */ var _components_HorizontalTimeline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/HorizontalTimeline */ "./src/your-timeline/components/HorizontalTimeline.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);







function Edit({
  attributes,
  setAttributes
}) {
  const {
    TimelineLabelColor,
    headingColor,
    DescriptionColor,
    orientation
  } = attributes;
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps)({
    style: {
      "--your-timeline-primary-color": TimelineLabelColor,
      "--your-timeline-heading-color": headingColor,
      "--your-timeline-description-color": DescriptionColor
    }
  });
  const addPoint = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
    setAttributes(prev => ({
      points: [...prev.points, {
        date: "",
        title: "",
        description: ""
      }]
    }));
  }, [setAttributes]);
  const updatePoint = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useCallback)((index, newPoint) => {
    setAttributes(prev => {
      const points = [...prev.points];
      points[index] = newPoint;
      return {
        points
      };
    });
  }, [setAttributes]);
  const removePoint = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useCallback)(index => {
    setAttributes(prev => {
      const points = [...prev.points];
      points.splice(index, 1);
      return {
        points
      };
    });
  }, [setAttributes]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
    ...blockProps,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_InspectorBlock__WEBPACK_IMPORTED_MODULE_3__.InspectorBlock, {
      attributes: attributes,
      setAttributes: setAttributes
    }), orientation === "horizontal" ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_HorizontalTimeline__WEBPACK_IMPORTED_MODULE_5__["default"], {
      attributes: attributes,
      updatePoint: updatePoint,
      removePoint: removePoint,
      addPoint: addPoint
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_VerticalTimeline__WEBPACK_IMPORTED_MODULE_4__["default"], {
      attributes: attributes,
      updatePoint: updatePoint,
      removePoint: removePoint,
      addPoint: addPoint
    })]
  });
}

/***/ }),

/***/ "./src/your-timeline/editor.scss":
/*!***************************************!*\
  !*** ./src/your-timeline/editor.scss ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/your-timeline/save.js":
/*!***********************************!*\
  !*** ./src/your-timeline/save.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
/**
 * Save function for Timeline Block
 *
 * Renders the timeline on the frontend based on user-selected orientation
 * and layout. Supports vertical and horizontal slider layouts.
 */



function save({
  attributes
}) {
  const {
    TimelineLabelColor,
    headingColor,
    DescriptionColor,
    points,
    orientation,
    layout,
    layoutSide
  } = attributes;
  const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps.save({
    style: {
      "--your-timeline-primary-color": TimelineLabelColor,
      "--your-timeline-heading-color": headingColor,
      "--your-timeline-description-color": DescriptionColor
    },
    className: `your-timeline-block ${orientation}-layout ${orientation === "vertical" ? `layout-side-${layoutSide}` : ""} ${orientation === "horizontal" && layout === "slider" ? "slider-layout" : ""}`
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    ...blockProps,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: `your-timeline-block__list ${points.length ? "has-points" : ""}`,
      children: points.map((point, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "your-timeline-block__item",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
          className: "your-timeline-block__date",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText.Content, {
            tagName: "p",
            value: point.date
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
          className: "your-timeline-block__icon"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          className: "your-timeline-block__content",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
            className: "your-timeline-block__title",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText.Content, {
              tagName: "h2",
              value: point.title
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
            className: "your-timeline-block__description",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText.Content, {
              tagName: "div",
              value: point.description
            })
          })]
        })]
      }, index))
    })
  });
}

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "react/jsx-runtime":
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["ReactJSXRuntime"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!************************************!*\
  !*** ./src/your-timeline/index.js ***!
  \************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _blockIcon_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blockIcon.js */ "./src/your-timeline/blockIcon.js");
/* harmony import */ var _blockStyles_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blockStyles.scss */ "./src/your-timeline/blockStyles.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./src/your-timeline/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./save */ "./src/your-timeline/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./block.json */ "./src/your-timeline/block.json");
/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */



/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * Internal dependencies
 */




/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_5__.name, {
  /**
   * @see ./edit.js
   */
  icon: {
    src: _blockIcon_js__WEBPACK_IMPORTED_MODULE_1__.BlockIcon
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_3__["default"],
  /**
   * @see ./save.js
   */
  save: _save__WEBPACK_IMPORTED_MODULE_4__["default"]
});
})();

/******/ })()
;
//# sourceMappingURL=index.js.map