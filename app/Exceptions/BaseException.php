<?php

namespace App\Exceptions;

use Exception;
use Illuminate\Http\Response;

class BaseException extends Exception
{
    protected $statusCode;
    protected $errorMessage;

    public function __construct(int $statusCode = Response::HTTP_INTERNAL_SERVER_ERROR, string $errorMessage = "")
    {
        $this->statusCode = $statusCode;
        $this->errorMessage = $errorMessage;
    }
}
