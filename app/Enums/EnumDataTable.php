<?php

namespace App\Enums;

use App\Traits\BackedEnumTrait;

enum EnumDataTable:int
{
    use BackedEnumTrait;

    const PAGE_DEFAULT = 1;
    const PER_PAGE_DEFAULT = 10;
}
