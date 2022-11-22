<?php

namespace App\View\Components\Shared;

use Illuminate\View\Component;

class CreateUpdateForm extends Component
{
    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct(
		public string $cardClass = 'card-primary'
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
        return view('components.shared.create-update-form');
    }
}
