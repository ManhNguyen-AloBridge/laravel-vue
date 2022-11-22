<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Google_Client;
use Illuminate\Support\Facades\Storage;
use League\Flysystem\Filesystem;
use \Hypweb\Flysystem\GoogleDrive\GoogleDriveAdapter;

class GoogleDiveServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        // $client = new \Google_Client;
        // dd($client);
        Storage::extend('google',function($app,$config){
            $client = new \Google_Client;
            $client->setClientId($config['clientId']);
            $client->setClientSecret($config['clientSecret']);
            $client->refreshToken($config['refreshToken']);
            $service = new \Google_Service_Drive($client);
            $adapter = new GoogleDriveAdapter($service, $config['folderId']);
            dd($adapter);
            return new Filesystem();
        });
    }
}
