<?php

namespace App\View\Components\Shared;

use App\Models\MailSetting;
use Illuminate\View\Component;

class ModalSendCv extends Component
{
	/**
	 * Create a new component instance.
	 *
	 * @return void
	 */
	public function __construct(
		public string $staffName,
		public ?MailSetting $dataSetting,
		public int $staffId,
		public string $linkCv
	) {
	}

	/**
	 * Get the view / contents that represent the component.
	 *
	 * @return \Illuminate\Contracts\View\View|\Closure|string
	 */
	public function render()
	{
		return view('components.shared.modal-send-cv');
	}
}
