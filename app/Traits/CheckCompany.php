<?php

namespace App\Traits;

use Illuminate\Support\Facades\Auth;

trait CheckCompany
{
	public static function getCompanyId(): int
	{
		$companyId = Auth::user()->companyUsers->first()->company_id;
		if (Auth::user()->companyUsers->count() > 1) {
			return session('companyId') ?? $companyId;
		}

		return Auth::user()->companyUsers->first()->company_id;
	}
}
