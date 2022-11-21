<?php

namespace App\Providers;

use Illuminate\Support\Facades\Blade;
use Illuminate\Support\ServiceProvider;

class DirectiveServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
		Blade::directive('use', function ($expression) {
			return "<?php use $expression; ?>";
		});

		Blade::directive('trans_page', function (string $expression, array $replace = []) {
			return trans_page($expression, $replace);
		});

		Blade::directive('attrs', function (string $expression) {
			$expression = str_replace([
				"'",
				'"'
			], '', $expression);

			return __('attributes.' . $expression);
		});
    }
}
