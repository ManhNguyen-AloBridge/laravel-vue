<?php

if (!function_exists('convertKatakanaToRomaji')) {

	function convertKatakanaToRomaji(string $text): string
	{
		$textKatakana = [
			'ｳﾞ' => 'V',
			'ｶﾞ' => 'G',
			'ｷﾞ' => 'G',
			'ｸﾞ' => 'G',
			'ｹﾞ' => 'G',
			'ｺﾞ' => 'G',
			'ｻﾞ' => 'Z',
			'ｼﾞ' => 'J',
			'ｽﾞ' => 'Z',
			'ｾﾞ' => 'Z',
			'ｿﾞ' => 'Z',
			'ﾀﾞ' => 'D',
			'ﾁﾞ' => 'J',
			'ﾂﾞ' => 'T',
			'ﾃﾞ' => 'D',
			'ﾄﾞ' => 'D',
			'ﾊﾞ' => 'B',
			'ﾋﾞ' => 'B',
			'ﾌﾞ' => 'B',
			'ﾍﾞ' => 'B',
			'ﾎﾞ' => 'B',
			'ﾊﾟ' => 'P',
			'ﾋﾟ' => 'P',
			'ﾌﾟ' => 'P',
			'ﾍﾟ' => 'P',
			'ﾎﾟ' => 'P',
			'ヴ' => 'V',
			'ガ' => 'G',
			'ギ' => 'G',
			'グ' => 'G',
			'ゲ' => 'G',
			'ゴ' => 'G',
			'ザ' => 'T',
			'ジ' => 'J',
			'ズ' => 'Z',
			'ゼ' => 'Z',
			'ゾ' => 'Z',
			'ダ' => 'D',
			'ヂ' => 'D',
			'ヅ' => 'D',
			'デ' => 'D',
			'ド' => 'D',
			'バ' => 'B',
			'ビ' => 'B',
			'ブ' => 'B',
			'ベ' => 'B',
			'ボ' => 'B',
			'パ' => 'P',
			'ピ' => 'P',
			'プ' => 'P',
			'ペ' => 'P',
			'ポ' => 'P',
			'ｱ' => 'A',
			'ｲ' => 'I',
			'ｳ' => 'U',
			'ｴ' => 'E',
			'ｵ' => 'O',
			'ｶ' => 'K',
			'ｷ' => 'K',
			'ｸ' => 'K',
			'ｹ' => 'K',
			'ｺ' => 'K',
			'ｻ' => 'S',
			'ｼ' => 'S',
			'ｽ' => 'S',
			'ｾ' => 'S',
			'ｿ' => 'S',
			'ﾀ' => 'T',
			'ﾁ' => 'C',
			'ﾂ' => 'T',
			'ﾃ' => 'T',
			'ﾄ' => 'T',
			'ﾅ' => 'N',
			'ﾆ' => 'N',
			'ﾇ' => 'N',
			'ﾈ' => 'N',
			'ﾉ' => 'N',
			'ﾊ' => 'H',
			'ﾋ' => 'H',
			'ﾌ' => 'F',
			'ﾍ' => 'H',
			'ﾎ' => 'H',
			'ﾏ' => 'M',
			'ﾐ' => 'M',
			'ﾑ' => 'M',
			'ﾒ' => 'M',
			'ﾓ' => 'M',
			'ﾔ' => 'Y',
			'ﾕ' => 'Y',
			'ﾖ' => 'Y',
			'ﾗ' => 'R',
			'ﾘ' => 'R',
			'ﾙ' => 'R',
			'ﾚ' => 'R',
			'ﾛ' => 'R',
			'ﾜ' => 'W',
			'ｦ' => 'W',
			'ﾝ' => 'N',
			'ｧ' => 'A',
			'ｨ' => 'I',
			'ｩ' => 'U',
			'ｪ' => 'E',
			'ｫ' => 'O',
			'ヵ' => 'K',
			'ｬ' => 'Y',
			'ｭ' => 'Y',
			'ｮ' => 'Y',
			'ｯ' => 'T',
			'ア' => 'A',
			'イ' => 'I',
			'ウ' => 'U',
			'エ' => 'E',
			'オ' => 'O',
			'カ' => 'K',
			'キ' => 'K',
			'ク' => 'K',
			'ケ' => 'K',
			'コ' => 'K',
			'サ' => 'S',
			'シ' => 'S',
			'ス' => 'S',
			'セ' => 'S',
			'ソ' => 'S',
			'タ' => 'T',
			'チ' => 'C',
			'ツ' => 'T',
			'テ' => 'T',
			'ト' => 'T',
			'ナ' => 'N',
			'ニ' => 'N',
			'ヌ' => 'N',
			'ネ' => 'N',
			'ノ' => 'N',
			'ハ' => 'H',
			'ヒ' => 'H',
			'フ' => 'F',
			'ヘ' => 'H',
			'ホ' => 'H',
			'マ' => 'M',
			'ミ' => 'M',
			'ム' => 'M',
			'メ' => 'M',
			'モ' => 'M',
			'ヤ' => 'Y',
			'ユ' => 'Y',
			'ヨ' => 'Y',
			'ラ' => 'R',
			'リ' => 'R',
			'ル' => 'R',
			'レ' => 'R',
			'ロ' => 'R',
			'ワ' => 'W',
			'ヲ' => 'W',
			'ン' => 'N',
			'ァ' => 'A',
			'ィ' => 'I',
			'ゥ' => 'U',
			'ェ' => 'E',
			'ォ' => 'O',
			'ヶ' => 'K',
			'ャ' => 'Y',
			'ュ' => 'Y',
			'ョ' => 'Y',
			'ッ' => 'T',
		];

		$firstCharacter = mb_substr($text, 0, 1);

		return $textKatakana[$firstCharacter] ?? '-';
	}
}