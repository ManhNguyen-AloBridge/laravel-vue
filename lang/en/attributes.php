<?php

return [
	// Model name
	'company' => [
		'title' => 'Company information',
		'name' => 'Company name',
		'email' => 'Company email address',
		'phone' => 'Company phone number',
		'list_phone' => 'Phone number',
		'list_email' => 'Email address',
		'zipcode' => 'Zip code',
		'prefecture' => 'Prefecture',
		'municipality' => 'City',
		'town_name' => 'House number',
		'building_name' => 'Building name',
		'url' => 'Website URL',
		'address' => 'Address',
		'invitation_code' => 'Invitation code',
		'example' => [
			'name' => 'Skill-Repo Inc.',
			'email' => 'skillrepo@impl.co.jp',
			'phone' => '03-4566-3070',
			'zipcode' => '〒000-0000',
			'prefecture' => 'Hokkaido',
			'municipality' => 'Minami 3-jo Nishi 10-chome, Chuo-ku, Sapporo',
			'town_name' => '10015',
			'building_name' => 'Fukuyama Minami Sanjo Building 2F',
			'url' => 'https://www.impl.co.jp/',
			'address' => '10015',
			'invitation_code' => 'EXA1234123'
		]
	],
	'user' => [
		'name' => 'Name',
		'email' => 'Email',
		'title' => 'About me',
		'password' => 'Password',
		'password_confirmation' => 'Confirm password',
		'name_list' => 'Full name:',
		'example' => [
			'name' => 'test',
			'email' => 'test@mail.com'
		]
	],
	'shared' => [
		'example' => 'Example）',
		'required' => 'Required',
		'any' => 'Any',
		'cancel' => 'Cancel',
		'delete' => 'Delete'
	],
	'skill' => [
		'name' => 'Skill name',
		'category_id' => 'Project',
		'category' => [
			'label' => 'Project',
			'LANGUAGE' => 'Language',
			'FRAMEWORK' => 'Framework',
			'DATABASE' => 'Database',
			'OS' => 'OS',
			'OTHERS' => 'Others',
		],
		'select_skill_category' => 'Please select an item',
		'select_skill_name' => 'Please select your technology',
		'select_skill_level' => 'Please select your skill level',
	],
	'level' => [
		'_name' => 'Skill level',
		'name' => 'Level name',
		'level' => 'Level number',
		'by_level' => 'By level',
		'level_criteria' => 'Level criteria'
	],
	'qualification' => [
		'_name' => 'Qualify',
		'name' => 'Qualification',
		'option_at' => 'Get date',
		'select_qualification' => 'Please select a qualification',
	],
	'sort_user_type' => [
		'level' => 'By skill level',
		'qualification' => 'get the year',
		'seniority' => 'Registration order',
		'alpha' => 'Japanese syllabary order'
	],
];
