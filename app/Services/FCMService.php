<?php

namespace App\Services;

use GuzzleHttp\Client;
use Illuminate\Support\Facades\Log;

class FCMService
{
    private $apiConfig;

    public function __construct()
    {
        $this->apiConfig = [
            'url' => config('firebase.push_url'),
            'server_key' => config('firebase.server_key'),
            'device_type' => config('firebase.device_type'),
        ];
    }

    /**
     * Sending push message to single user by Firebase
     *
     * @param  string  $device_token
     * @param  array  $notification
     * @param  array  $data
     * @return bool
     */
    public function send(string $device_token, array $notification, array $data = null): bool
    {
        $fields = [
            'to' => $device_token,
            'notification' => $notification,
            'data' => $data,
        ];

        return $this->sendPushNotification($fields);
    }

    /**
     * Sending push message to multiple users by firebase
     *
     * @param  array  $device_tokens
     * @param  array  $notification
     * @param  array  $data
     * @return bool
     */
    public function sendMultiple(array $device_tokens, array $notification, array $data): bool
    {
        $fields = [
            'registration_ids' => $device_tokens,
            'data' => $data,
            'notification' => $notification,
        ];

        return $this->sendPushNotification($fields);
    }

    /**
     * GuzzleHTTP request to firebase servers
     *
     * @param  array  $fields
     * @return bool
     */
    private function sendPushNotification(array $fields): bool
    {
        $client = new Client([
            'headers' => [
                'Content-Type' => 'application/json',
                'Authorization' => 'key='.$this->apiConfig['server_key'],
            ],
        ]);
        $res = $client->post(
            $this->apiConfig['url'],
            ['body' => json_encode($fields)]
        );

        $res = json_decode($res->getBody());

        if ($res->failure) {
            Log::error('ERROR_PUSH_NOTIFICATION: ', $res->results);
        }

        return $res->success ? true : false;
    }
}
