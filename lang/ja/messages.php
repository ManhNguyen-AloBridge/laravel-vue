<?php

return [
	"shared" => [
		"space" => '　',
		"save" => '保存',
		"register" => '登録',
		"back" => 'キャンセル',
		'add' => '追加',
		'finish' => '終了',
		'confirm' => '確認',
		'delete' => '削除',
		'and' => 'を含む',
		'or' => 'または',
		'send' => '送信',
		'unit_money' => '¥',
		'on_month' => '/月',
	],
	'user' => [
		'incorrect_email_or_password' => 'メールアドレスまたはパスワードが間違っています',
		'email_unique' => '指定のメールアドレスは既に使用されています。',
		'phone_number_unique' => '指定の電話番号は既に使用されています。',
	],
	'invitation' => [
		'send_invitation_success' => '招待メールを送信しました。',
		'send_invitation_fail' => '招待メールの送信が失敗しました。',
		'accept_invitation_success' => '招待を承認しました。',
		'accept_invitation_fail' => '招待の承認が失敗しました。',
	],
	'maintenance' => [
		'emergency' => '今からメンテナンスモードに移行します。よろしいですか',
		'handle_finished_maintenance_success' => 'Handle finished maintenance successfully.',
		'handle_active_maintenance_success' => 'Handle active maintenance successfully.',
		'dont_have_schedule_maintenance' => 'Dont have schedule maintenance.',
		'system_is_maintenance' => 'System is maintenance.',
		'create_fail' => 'メンテナンススケジュールの追加が失敗しました。',
		'create_success' => 'メンテナンススケジュールの追加が完了しました。',
		'update_fail' => 'メンテナンススケジュールの変更は失敗しました。',
		'update_success' => 'メンテナンススケジュールの変更は完了しました。',
		'handle_finish_fail' => 'メンテナンス作業の終了は失敗しました。',
		'handle_finish_success' => 'メンテナンス作業は完了しました。',
		'delete_fail' => 'メンテナンススケジュールの削除が失敗しました。',
		'delete_success' => 'メンテナンススケジュールの削除が完了しました。',
		'start_date_invalid' => '開始日時、正しい日付ではありません。',
		'end_date_invalid' => '終了日時は、正しい日付ではありません。',
		'selected_time_already_in_maintenance_schedule' => '選択した時間はすでにメンテスケジュールに入っています。',
	],

	'notification' => [
		'create_fail' => 'お知らせの登録は失敗しました。',
		'create_success' => 'お知らせの登録は完了しました。',
		'update_fail' => 'お知らせの編集は失敗しました。',
		'update_success' => 'お知らせの編集は完了しました。',
		'delete_fail' => 'お知らせの削除は失敗しました。',
		'delete_success' => 'お知らせの削除は完了しました。',
	],

	'price' => [
		'value_price_invalid' => '価格の値が無効です。',
		'price_already_exists' => '価格はすでに存在します。',
		'create_price_success' => '価格作成は完了しました。',
		'create_price_fail' => '価格作成は失敗しました。',
	],
	'company' => [
		'E06001' => '会社作成が失敗しました。',
		'I06001' => '会社と管理者を追加しました。',
		'E21001' => '会社情報編集が失敗しました。',
		'I21001' => '会社情報編集が完了しました。',
		'I22001' => 'サブスクリプション登録が完了しました。',
		'I22002' => '一括解約が完了しました。',
		'E22002' => '一括解約が失敗しました。',
		'delete_hourly' => 'Successfully delete hourly company canceled!',
	],
	'stripe' => [
		'sync_data_success' => 'Sync data price successfully!',
		'sync_data_fail' => 'Sync data price failed!',
	],
	'change_password' => [
		'I03001' => 'パスワード変更が完了しました。',
		'E03001' => 'パスワード変更が失敗しました。',
	],
	'setting' => [
		'skill' => [
			'I12001' => 'スキル追加が完了しました。',
			'E12001' => 'スキル追加が失敗しました。',
			'I12002' => 'スキル変更が完了しました。',
			'E12002' => 'スキル変更が失敗しました。',
			'unique' => '指定のスキル名は既に使用されています。',
			'I12004' => 'スキル削除が完了しました。',
			'E12004' => 'スキル削除が失敗しました。',
			'E12008' => '一部の履歴書で使用されているため、このスキルを削除することはできません。',
		],
		'skill_level' => [
			'I12002' => 'スキルレベル追加が完了しました。',
			'E12002' => 'スキルレベル追加が失敗しました。',
			'unique' => '指定のレベル名は既に使用されています。',
			'I12005' => 'スキルレベル削除が完了しました。',
			'E12005' => 'スキルレベル削除が失敗しました。',
			'I12006' => 'スキルレベル変更が完了しました。',
			'E12006' => 'スキルレベル変更が失敗しました。',
			'E12007' => '一部の履歴書で使用されているため、このスキルレベルを削除することはできません。',
		],
		'qualification' => [
			'I12003' => '資格追加が完了しました。',
			'E12003' => '資格追加が失敗しました。',
			'unique' => '指定の保有資格名は既に使用されています。',
			'I12006' => '資格削除が完了しました。',
			'E12006' => '資格削除が失敗しました。',
			'E12009' => '一部の履歴書で使用されているため、この資格を削除することはできません。'
		],
		'resume' => [
			'I14001' => '経歴書設定が完了しました。',
			'E14001' => '経歴書設定が失敗しました。'
		],
		'payment' => [
			'E21001' => 'サブスクリプション変更が失敗しました。',
			'I21001' => 'サブスクリプション変更が完了しました。次回のインボイスをご確認ください。',
			'I21002' => 'サブスクリプション登録が完了しました。',
			'new_quantity_must_diff_current' => 'New quantity must has value difference with current quantity',
			'I21003' => '会社情報編集が完了しました。',
			'E21003' => '会社情報編集が失敗しました。',
			'I21004' => 'success',
			'E21004' => 'company not found',
			'E21005' => 'サブスクリプション解約が失敗しました。',
			'I21005' => 'サブスクリプション解約が完了しました。',
			'E21006' => 'サブスクリプション再開が失敗しました。',
			'I21006' => 'サブスクリプション再開が完了しました。',
			'I21007' => 'サブスクリプション解約が完了しました。',
			'E21007' => 'サブスクリプション解約が失敗しました。',
		]
	],
	'staff' => [
		'I10001' => 'メンバー追加が完了しました。',
		'E10001' => 'メンバー追加が失敗しました。',
		'E11001' => '要員情報編集が失敗しました。',
		'I11001' => '要員情報編集が完了しました。',
		'I17001' => '経歴書更新が完了しました。',
		'E17001' => '経歴書更新が失敗しました。',
		'W22004' => [
			'pre' => 'すべての機能を使用するには、',
			'link' => 'この設定ページ',
			'suf' => 'に移動してサブスクリプションを設定してください。'
		]
	],
	'mail_settings' => [
		'E15001' => 'メール送信設定が失敗しました。',
		'I15001' => 'メール送信設定が完了しました。'
	],
	'mail' => [
		'E16001' => '経歴書の送付が失敗しました。',
		'E16002' => 'メールアドレスが有効な形式ではありません。',
		'I16001' => '経歴書の送付が完了しました。',
		'report_hourly' => 'Successfully report hourly quote to everyone.',
		'subject_send_password_new_account' => '【Skill-Repo】アカウント登録のお知らせ',
		'send_password' => [
			'sentence_one' => 'Skill-Repoをご利用いただきありがとうございます。',
			'sentence_two' => 'へ招待されました。',
			'sentence_three' => 'あなたのパスワードは下記の通りです。',
			'sentence_four' => '下記のURLよりログインいただけます。',
			'sentence_five' => 'このメールに心当たりがない方は、お手数をおかけしますがこのメールを破棄してください。',
		],
		'subject_send_remind_update_cv' => '【Skill-Repo】経歴書を更新してください',
		'remind_update_cv' => [
			'sentence_one' => 'Skill-Repoをご利用いただきありがとうございます。',
			'sentence_two_prev' => '前回のチェックより ',
			'sentence_two_next' => ' 日経過しました。',
			'sentence_three' => 'Skill-Repoへログインし、経歴書の更新をお願いいたします。',
			'sentence_four' => 'Skill-Repoへログインする',
			'sentence_five' => 'このメールに心当たりがない方は、お手数をおかけしますがこのメールを破棄してください。',
		],
		'subject_send_link_reset_password' => '【Skill-Repo】パスワードを再設定してください',
		'send_link_reset_password' => [
			'sentence_one' => 'Skill-Repoをご利用いただきありがとうございます。',
			'sentence_two' => 'パスワード再設定の申請を受け付けました。以下のURLよりパスワードの再設定を行なってください。',
			'sentence_three' => 'このメールに心当たりがない方は、お手数をおかけしますがこのメールを破棄してください。',
		],
		'send_invitation' => [
			'subject' => '【Skill-Repo】アカウント登録のお知らせ',
			'sentence_one' => 'Skill-Repoをご利用いただきありがとうございます',
			'sentence_two' => '株式会社 へ招待されました。',
			'sentence_three' => 'ご自身で設定していただいたパスワードを用いて、下記のURLよりログインいただけます。',
			'sentence_four' => 'パスワードをお忘れの方はこちらより再設定お願いいたします：',
			'sentence_five' => 'このメールに心当たりがない方は、お手数をおかけしますがこのメールを破棄してください。',
		],
		'skill_repo_support' => 'Skill-Repo サポート',
		'confirm_send_mail' => 'このメールを送信しますか？',
		'target_personal_not_selected' => '対象要員が未選択です。選択してください。'

	],
	'department' => [
		'I22001' => '部門追加が完了しました。',
		'E22001' => '部門追加が失敗しました。',
		'I22003' => '部門削除が完了しました。',
		'E22003' => '部門削除が失敗しました。',
		'E22004' => '一部の要員詳細で使用されているため、この部門を削除することはできません。',
		'unique' => '指定の部門名は既に使用されています。',
		'exists' => '選択された部門は、有効ではありません。'
	],
	'position' => [
		'I22002' => '職位追加が完了しました。',
		'E22002' => '職位追加が完失敗ました。',
		'I22004' => '職位削除が完了しました。',
		'E22004' => '職位削除が完失敗ました。',
		'E22005' => '一部の要員詳細で使用されているため、この職位を削除することはできません。',
		'unique' => '指定の職位名は既に使用されています。',
		'exists' => '選択された職位は、有効ではありません。'
	],
	'profile' => [
		'I18001' => 'プロファイルは正常に編集されました。',
		'E18001' => 'プロファイルの編集に失敗しました。',
		'I18002' => '経歴書は正常に更新されました。',
		'E18002' => '経歴書の更新に失敗しました。',
	],
	'validate' => [
		'unique_email_user' => 'メールアドレスは既に使用されています（メールアドレス）。',
		'unique_phone_user' => 'メールアドレスは既に使用されています（電話番号）。',
		'row_csv' => '行目にエラーが発生しました。',
		'email' => '」のメールアドレスは複数あります。',
		'icon_corner' => '「',
		'phone' => '」の電話番号は複数あります。',
		'count' => '要員データがありません'
	],
	'invitation_code' => [
		'create_fail' => '招待コードの追加が失敗しました。',
		'create_success' => '招待コードの追加が完了しました。',
		'delete_fail' => '招待コードの削除が失敗しました。',
		'delete_success' => '招待コードの削除が完了しました。',
	]
];
