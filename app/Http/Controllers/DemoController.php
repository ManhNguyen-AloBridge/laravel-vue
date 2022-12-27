<?php

namespace App\Http\Controllers;

use App\Services\DemoService;
use Illuminate\Http\Request;
use Illuminate\Http\UploadedFile;
use Google\Client;
use Google\Service\Drive;

class DemoController extends Controller
{
    public function __construct(DemoService $demoService)
    {
        $this->demoService = $demoService;
    }

    public function store(Request $request)
    {
        $this->demoService->sendToMail($request->email);

    }



    function uploadBasic()
    {
        try {
            $client = new Client();
            $client->useApplicationDefaultCredentials();
            $client->addScope(Drive::DRIVE);
            $driveService = new Drive($client);
            $fileMetadata = new Drive\DriveFile(array(
                'name' => 'photo.jpg'
            ));
            $content = file_get_contents('../files/photo.jpg');
            $file = $driveService->files->create($fileMetadata, array(
                'data' => $content,
                'mimeType' => 'image/jpeg',
                'uploadType' => 'multipart',
                'fields' => 'id'
            ));
            printf("File ID: %s\n", $file->id);
            return $file->id;
        } catch (Exception $e) {
            echo "Error Message: " . $e;
        }
    }
}
