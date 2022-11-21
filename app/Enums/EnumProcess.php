<?php

namespace App\Enums;

enum EnumProcess: int
{
	case REQUIREMENT_DEFINE = 1;
	case BASIC_DESIGN = 2;
	case DETAIL_DESIGN = 3;
	case IMPLEMENTATION = 4;
	case SINGLE_TEST = 5;
	case CONCLUSION_TEST = 6;
	case MAINTENANCE_OPERATION = 7;
}
