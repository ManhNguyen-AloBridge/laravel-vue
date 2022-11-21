<p>
    {{ __('views/emails/auth/reset-password.greeting', ['name' => $user->name]) }},
</p>
<p>
    {{ __('views/emails/auth/reset-password.content') }}
    <a href="{{ $url }}">{{ $url }}</a>
</p>