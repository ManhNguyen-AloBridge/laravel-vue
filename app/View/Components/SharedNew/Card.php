<?php

namespace App\View\Components\SharedNew;

use Illuminate\View\Component;

class Card extends Component
{
	/**
	 * Create a new component instance.
	 *
	 * @return void
	 */
	public function __construct(
		public ?string $title = null,
		public ?string $content = null,
	) {
	}

	/**
	 * Get the view / contents that represent the component.
	 *
	 * @return \Illuminate\Contracts\View\View|\Closure|string
	 */
	public function render()
	{
		return view('components.shared-new.card');
	}
}
