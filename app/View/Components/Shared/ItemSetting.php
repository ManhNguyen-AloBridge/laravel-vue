<?php

namespace App\View\Components\Shared;

use Illuminate\View\Component;

class ItemSetting extends Component
{
    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct(
		public $form,
		public $listData,
		public $basePart,
		public $route
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
        return view('components.shared.item-setting');
    }
}
