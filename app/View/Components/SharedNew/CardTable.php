<?php

namespace App\View\Components\SharedNew;

use Illuminate\Support\Collection;
use Illuminate\View\Component;

class CardTable extends Component
{
	/**
	 * Create a new component instance.
	 *
	 * @return void
	 */
	public function __construct(
		public string $form,
		public Collection $listData,
		public string $basePart,
		public string $routeName,
		public string $title,
		public string $modalTitle,
		public string $buttonAdd,
	) {
		//
	}

	/**
	 * Get the view / contents that represent the component.
	 *
	 * @return \Illuminate\Contracts\View\View|\Closure|string
	 */
	public function render()
	{
		return view('components.shared-new.card-table');
	}
}
