<?php

namespace App\Enums;

use App\Traits\BackedEnumTrait;

enum EnumUseInternetStatus:int
{
    use BackedEnumTrait;

    case USE = 1;
    case DO_NOT_USE = 0;
}
