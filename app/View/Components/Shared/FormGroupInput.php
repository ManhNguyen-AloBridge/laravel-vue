<?php

namespace App\View\Components\Shared;

use Illuminate\View\Component;

class FormGroupInput extends Component
{
	/**
	 * Create a new component instance.
	 *
	 * @return void
	 */
	public function __construct(
		public ?string $wrapperClass = null,
		public ?string $errorKey = null,
		public ?bool $showError = true
	) {
	}

	/**
	 * Get the view / contents that represent the component.
	 *
	 * @return \Illuminate\Contracts\View\View|\Closure|string
	 */
	public function render()
	{
		return function (array $data) {
			if (isset($data['attributes']['name'])) {
				$flatName = str_replace(['[', ']'], ['.', ''], $data['attributes']['name']);
				$data['attributes']['error_key'] = $flatName;
				if (!is_array(attrs($flatName)) && !isset($data['attributes']['title'])) {
					$data['attributes']['title'] = attrs($flatName);
				}
			}

			return 'components.shared.form-group-input';
		};
	}
}
