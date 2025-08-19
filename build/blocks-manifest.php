<?php
// This file is generated. Do not modify it manually.
return array(
	'your-timeline' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'your-blocks/your-timeline',
		'version' => '0.1.0',
		'title' => 'Your Timeline',
		'category' => 'widgets',
		'icon' => 'smiley',
		'description' => 'Create Beautiful and interactive timelines.',
		'example' => array(
			
		),
		'attributes' => array(
			'orientation' => array(
				'type' => 'string',
				'default' => 'vertical'
			),
			'layout' => array(
				'type' => 'string',
				'default' => 'alternate'
			),
			'layoutSide' => array(
				'type' => 'string',
				'default' => 'right'
			),
			'points' => array(
				'type' => 'array',
				'default' => array(
					array(
						'id' => 1,
						'title' => 'Early 20th Century– ~50 years',
						'description' => 'Widespread use of vaccines, better medicine, and reduced infant mortality raised life expectancy significantly.',
						'date' => '1900'
					),
					array(
						'id' => 2,
						'title' => 'Post-WWII Modernization – ~60 years',
						'description' => 'Antibiotics, public health systems, clean water, and better nutrition accelerated gains.',
						'date' => '1950'
					),
					array(
						'id' => 3,
						'title' => 'Early 21st Century – ~67 years',
						'description' => 'Most countries benefited from modern medicine. Some developed nations saw averages >75 years.',
						'date' => '2000'
					),
					array(
						'id' => 4,
						'title' => 'Today – ~73 years',
						'description' => 'High-income countries: 80–85 years. Low-income countries: 60–65 years. Major threats include chronic diseases, lifestyle illnesses, and pandemics like COVID-19.',
						'date' => '2020'
					)
				)
			),
			'TimelineLabelColor' => array(
				'type' => 'string',
				'default' => '#3A86FF'
			),
			'headingColor' => array(
				'type' => 'string',
				'default' => '#3A86FF'
			),
			'DescriptionColor' => array(
				'type' => 'string',
				'default' => '#FF3A86'
			),
			'lineStyle' => array(
				'type' => 'string',
				'default' => 'solid'
			),
			'expandType' => array(
				'type' => 'string',
				'default' => 'inline'
			)
		),
		'supports' => array(
			'html' => false
		),
		'textdomain' => 'your-timeline',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	)
);
