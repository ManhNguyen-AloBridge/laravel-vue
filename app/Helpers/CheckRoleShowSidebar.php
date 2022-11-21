<?php

use App\Enums\EnumUserRole;

class CheckRoleShowSidebar
{
	private static function renderSidebar()
	{
		$superAdmin = EnumUserRole::SUPER_ADMIN->value;
		$admin = EnumUserRole::ADMIN->value;
		$sale = EnumUserRole::SALE->value;
		$staff = EnumUserRole::STAFF->value;

		$baseUrl = 'views/layout/sidemenu';

		return [
			"dashboard" => [
				"title" => "$baseUrl.dashboard",
				"route_name" => "dashboard",
				"icon" => "fas fa-home",
				"role" => [$admin, $sale],
			],
			"companies" => [
				"title" => "$baseUrl.list_company",
				"route_name" => "companies.index",
				"icon" => "fas fa-building",
				"role" => [$superAdmin],
			],
			"prices" => [
				"title" => "$baseUrl.list_price",
				"route_name" => "prices.index",
				"icon" => "fas fa-list-alt",
				"role" => [$superAdmin],
			],
			"maintenance" => [
				"title" => "$baseUrl.list_maintenance",
				"route_name" => "maintenances.index",
				"icon" => "fas fa-tools",
				"role" => [$superAdmin],
			],
			"notification" => [
				"title" => "$baseUrl.list_notification",
				"route_name" => "notifications.index",
				"icon" => "fas fa-bell",
				"role" => [$superAdmin],
			],
			"invitation_code" => [
				"title" => "$baseUrl.list_invitation_code",
				"route_name" => "invitation_codes.index",
				"icon" => "fas fa-percent",
				"role" => [$superAdmin],
			],
			"staffs" => [
				"title" => "$baseUrl.list_employee",
				"route_name" => "staffs.index",
				"icon" => "fas fa-users",
				"role" => [$admin, $sale],
			],
			'send' => [
				"title" => "$baseUrl.setting_send_cv",
				"route_name" => "send.cv.index",
				"icon" => "fas fa-envelope-open",
				"role" => [$admin, $sale],
			],
			"list_setting" => [
				"title" => "$baseUrl.setting",
				// "route_name" => "#",
				"icon" => "fas fa-cog",
				"role" => [$admin],
				"child_item" => [
					'cv' => [
						"title" => "$baseUrl.setting_cv",
						"route_name" => "cv.resume.edit",
						"icon" => "fas fa-file",
						"role" => [$admin],
					],
					'skills_qualifications' => [
						"title" => "$baseUrl.setting_skills_qualifications",
						"route_name" => "skills_qualifications.index",
						"icon" => "fas fa-tasks",
						"role" => [$admin],
					],
					'mail' => [
						"title" => "$baseUrl.setting_send_mail",
						"route_name" => "mail.setting",
						"icon" => "fas fa-envelope",
						"role" => [$admin],
					],
					'department' => [
						"title" => "$baseUrl.setting_department",
						"route_name" => "department.index",
						"icon" => "fas fa-door-open",
						"role" => [$admin],
					],
					'setting' => [
						"title" => "$baseUrl.setting_payment",
						"route_name" => "setting.company",
						"icon" => "fas fa-money-check",
						"role" => [$admin],
					]
				]
			]
		];
	}

	public static function getSidebar($userRole)
	{
		$sidebar = self::renderSidebar();
		$userSidebar = [];
		foreach ($sidebar as $key => $value) {
			if (!in_array($userRole, $value["role"])) {
				continue;
			}

			$userSidebar[$key] = $value;

			if (!isset($value["child_item"])) {
				continue;
			}

			$childSidebar = [];
			$active = false;

			foreach ($value["child_item"] as $keyItem => $item) {
				if (in_array($userRole, $item["role"])) {
					$childSidebar[$keyItem] = $item;
				}

				if (Str::startsWith(Route::currentRouteName(), $keyItem)) {
					$active = true;
					$userSidebar[$key]['child_item'][$keyItem]['active'] = $active;
				}
			}

			if ($active) {
				$userSidebar[$key]["open"] = $active;
			}
			$value["child_item"] = $childSidebar;
		}

		return $userSidebar;
	}
}
