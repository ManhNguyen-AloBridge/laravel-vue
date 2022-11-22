<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\UploadedFile;
use Google\Client;
use Google\Service\Drive;

class StatisticController extends Controller
{
    public function __construct()
    {
    }

    public function store(Request $request)
    {

        if ($request->file('image')) {
            $file = $request->file('image');
            $filename = date('YmdHi') . $file->getClientOriginalName();
            dd($file->getClientOriginalName());
            $file->move(public_path('public/Image'), $filename);
            $data['image'] = $filename;

        }
    }

    function uploadBasic()
{
    try {
        $client = new Client();
        $client->useApplicationDefaultCredentials();
        $client->addScope(Drive::DRIVE);
        $driveService = new Drive($client);
        $fileMetadata = new Drive\DriveFile(array(
        'name' => 'photo.jpg'));
        $content = file_get_contents('../files/photo.jpg');
        $file = $driveService->files->create($fileMetadata, array(
            'data' => $content,
            'mimeType' => 'image/jpeg',
            'uploadType' => 'multipart',
            'fields' => 'id'));
        printf("File ID: %s\n", $file->id);
        return $file->id;
    } catch(Exception $e) {
        echo "Error Message: ".$e;
    }

}
}
