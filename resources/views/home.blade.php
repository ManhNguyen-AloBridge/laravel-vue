{{-- @extends('layouts.app') --}}
@extends('app_new')

@section('content')
    <div class="container-fluid">
        <h1 class="text-black-50">You are logged in!</h1>
    </div>

    <form action="{{ route('demo.store') }}" method="POST" enctype="multipart/form-data">
        @csrf
        <div class="input">
            {{-- <input type="file" name="image" /> --}}
            <input type="email" name="email" />
        </div>
        <x-shared-new.button title="Submit" class="btn --sm">
        </x-shared-new.button>
    </form>
@endsection
