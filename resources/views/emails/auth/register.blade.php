<p>
    {{ __('views/emails/auth/register.greeting', ['name' => $user->name]) }},
</p>
<div>
    {{ __('views/email/auth/register.content') }}
    <a href="{{ $url }}">{{ $url }}</a>
</div>