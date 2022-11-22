<?php

namespace App\View\Components\SharedNew;

use Illuminate\Support\Collection;
use Illuminate\View\Component;

class SelectAndOr extends Component
{
	/**
	 * Create a new component instance.
	 *
	 * @return void
	 */
	public function __construct(
		public array|Collection $collection,
		public array $map = ['value' => 'id', 'title' => 'name'],
	) {
	}

	/**
	 * Get the view / contents that represent the component.
	 *
	 * @return \Illuminate\Contracts\View\View|\Closure|string
	 */
	public function render()
	{
		return view('components.shared-new.select-and-or');
	}
}
