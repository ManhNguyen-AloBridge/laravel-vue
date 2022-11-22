<?php

namespace App\View\Components\SharedNew;

use Illuminate\Support\Collection;
use Illuminate\View\Component;

class FormTableInput extends Component
{
	/**
	 * Create a new component instance.
	 *
	 * @return void
	 */
	public function __construct(
		public Collection $collection,
		public array $columns,
		public string $model,
		public string $modalTitle = '',
		public string $modelField = ''
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
		return view('components.shared-new.form-table-input');
	}
}
