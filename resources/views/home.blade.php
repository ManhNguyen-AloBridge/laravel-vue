{{-- @extends('layouts.app') --}}
@extends('app_new')

@section('content')
    <div class="container-fluid">
        <h1 class="text-black-50">You are ...</h1>
    </div>

    <div class="row">
        @foreach ($listInfo as $info)
        <div class="room-item col-6 col-md-3 col-lg-3">
            <div class="room-item__content">
                <img src="{{ $info->url_avatar ?? mix('assets/img/avatar-default.png') }}" alt="" width="100" height="100">
                <p class="user-name">{{ $info->name }}</p>
                <p class="room-number">{{ $info->number }}</p>
                <p class="room-number">YYYYYYYYY</p>
            </div>
        </div>
        @endforeach
    </div>







@endsection
