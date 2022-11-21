<?php

return [
	// Model name
	'company' => [
		'title' => '会社情報',
		'name' => '会社名',
		'email' => '会社メールアドレス',
		'phone' => '会社電話番号',
		'list_phone' => '電話番号',
		'list_email' => 'メールアドレス',
		'zipcode' => '郵便番号',
		'prefecture' => '都道府県',
		'municipality' => '市区町村',
		'town_name' => '番地',
		'building_name' => 'ビル名',
		'url' => 'WEBサイトURL',
		'address' => '番地',
		'invitation_code' => '招待コード',
		'example' => [
			'name' => '株式会社Skill-Repo',
			'email' => 'skillrepo@impl.co.jp',
			'phone' => '03-4566-3070',
			'zipcode' => '〒000-0000',
			'prefecture' => '北海道',
			'municipality' => '札幌市中央区南3条西10丁目',
			'town_name' => '1001番地5',
			'building_name' => '福山南三条ビル 2階',
			'url' => 'https://www.impl.co.jp/',
			'address' => '1001番地5',
			'invitation_code' => 'EXA1234123'
		]
	],
	'maintenance' => [
		'start_date' => '開始日時',
		'end_date' => '終了日時',
		'note' => '詳細',
		'status' => 'ステータス'
	],
	'user' => [
		'title' => '管理者情報',
		'last_name' => '姓',
		'first_name' => '名',
		'name' => '氏名',
		'name_kana' => '氏名（フリガナ）',
		'gender' => '性別',
		'email' => 'メールアドレス',
		'birthdate' => '生年月日',
		'phone' => '電話番号',
		'department_id' => '部門',
		'department_position_id' => '職位',
		'status_id' => '状態',
		'password' => 'パスワード',
		'password_confirmation' => 'パスワード（確認）',
		'first_name_kana' => '名（フリガナ）',
		'last_name_kana' => '姓（フリガナ）',
		'is_spouse' => '配偶者',
		'zipcode' => '郵便番号',
		'prefecture' => '都道府県',
		'municipality' => '市区町村',
		'town_name' => '番地 ',
		'building_name' => 'ビル名',
		'projects' => '参加している案件',
		'joined_at' => '入社日',
		'leaved_at' => '退職日',
		'role_id' => '権限レベル',
		'address' => '住所',
		'name_list' => '氏名:',
		'example' => [
			'last_name' => '田中',
			'first_name' => '太郎',
			'email' => 'skillrepo@impl.co.jp',
			'phone' => '03-4566-3070',
			'birthdate' => '1999/01/01',
		],
		'icon_zipcode' => '〒'
	],
	'gender' => [
		'male' => '男性',
		'female' => '女性',
		'others' => '回答したくない',

	],
	'change_password' => [
		'current_password' => '現在のパスワード',
		'new_password' => '新しいパスワード',
		'new_password_confirm' => ' 新しいパスワード（確認）',
	],
	'skill' => [
		'name' => 'スキル名',
		'category_id' => '項目',
		'category' => [
			'label' => '項目',
			'LANGUAGE' => '言語',
			'FRAMEWORK' => 'フレームワーク',
			'DATABASE' => 'データベース',
			'OS' => 'OS',
			'OTHERS' => 'その他',
		],
		'select_skill_category' => '項目を選択してください',
		'select_skill_name' => '保有技術を選択してください',
		'select_skill_level' => 'スキルレベルを選択してください',
	],
	'level' => [
		'_name' => 'Skill level',
		'name' => 'レベル名',
		'level' => 'レベル番号',
		'by_level' => 'レベル順',
		'level_criteria' => 'レベル基準'
	],
	'qualification' => [
		'_name' => '取得資格',
		'name' => '保有資格',
		'option_at' => '取得年月日',
		'select_qualification' => '資格を選択してください',
	],
	'process' => [
		'_name' => '担当工程',
		'name' => '保有資格'
	],
	'role' => [
		'super_admin' => 'スーパー管理者',
		'admin' => '管理者',
		'sale' => 'セールス',
		'staff' => 'スタッフ',
		'_name' => '役割・役職'
	],
	'is_spouse' => [
		'spouse' => '有',
		'non_spouse' => '無'
	],
	'resume' => [
		'share_period' => '経歴書共有閲覧期限（時間）',
		'remind_period' => '更新催促期間（日）',
		'template' => '経歴書テンプレート',
		'self_pr' => '自己PR',
		'other' => 'その他',
		'knowledge' => '活かせる経験・知識',
		'is_name_hidden_sending_email' => '経歴書をメール送付する際',
		'is_name_hidden_downloading' => '経歴書をダウンロードする際',
		'template_id' => '経歴書テンプレート',
		'specialty' => '得意分野',
		'job_summary' => '職務要約',
	],
	'status' => [
		'normal' => '通常',
		'pause' => '一時停止',
		'retirement' => '退職'
	],
	'mail_setting' => [
		'sender' => '送信者名',
		'cc' => 'CCメールアドレス',
		'mail_reply' => '返信メールアドレス',
		'bcc' => 'BCCメールアドレス',
		'default_subject' => 'デフォルト件名',
		'body' => 'デフォルト本文',
	],
	'mail' => [
		'to' => '宛先',
		'sender' => '送信者名',
		'cc' => 'CC',
		'bcc' => 'BCC',
		'subject' => '件名',
		'body' => '本文',
		'text_replace' => '（送付先ではこちらにダウンロード用URLが表示されます）',
		'staffs_name' => '対象要員',
		'footer_note_prev' => '本メールは、',
		'footer_note_next' => ' を用いて送付されました。',
		'skill_report' => 'スキルレポ'

	],
	'education' => [
		'name' => '学校名',
		'degree' => '学位',
		'start_date' => '開始日',
		'end_date' => '終了日'
	],
	'job_history' => [
		'work_place' => '勤務先',
		'start_date' => '開始日',
		'end_date' => '終了日',
	],
	'job_offer_project' => [
		'name' => '案件名',
		'start_date' => '開始日',
		'end_date' => '終了日',
		'description' => '説明',
		'env_languages' => '環境・言語',
		'number_of_people' => '規模・人数',
		'role' => '役割・役職',
	],
	'department' => [
		'name' => '部門名'
	],
	'position' => [
		'name' => '職位名'
	],
	'chart_order_type' => [
		'percent_asc' => '保有率順(多)',
		'percent_desc' => '保有率順(少)',
		'alpha' => '五十音順'
	],
	'shared' => [
		'example' => '例）',
		'required' => '必須',
		'any' => '任意',
		'cancel' => 'キャンセル',
		'delete' => '削除'
	],
	'sort_user_type' => [
		'level' => 'スキルレベル順',
		'qualification' => '取得年月順',
		'seniority' => '登録順',
		'alpha' => '五十音順'
	],
	'notification' => [
		'title' => 'タイトル',
		'level' => 'お知らせレベル',
		'start_date' => '配信開始日',
		'end_date' => '配信終了日',
		'noti_to' => '配信対象',
		'content' => '詳細',
		'companies_name' => '企業'
	],
	'csv' => [
		'first_name' => '名',
		'last_name' => '姓',
		'first_name_kana' => '名（フリガナ）',
		'last_name_kana' => '姓（フリガナ）',
		'email' => 'メールアドレス',
		'phone' => '電話番号',
		'municipality' => '市区町村',
		'town_name' => '番地',
		'building_name' => 'ビル名',
		'prefecture' => '都道府県',
		'birthdate' => '生年月日',
		'zipcode' => '郵便番号',
		'joined_at' => '入社日',
		'leaved_at' => '退職日',
		'department_name' => '部門',
		'department_position_name' => '職位',
		'status' => '状態',
		'role' => '権限レベル',
		'gender' => '性別',
		'spouse' => '配偶者'
	],
	'invitation_code' => [
		'code' => 'Code',
		'create_at' => '作成日',
		'price' => '価格',
		'status' => 'ステータス',
		'company' => '利用した企業',
	],
	'status_invitation_code' => [
		'active' => '有効',
		'inactive' => '無効'
	],
];
