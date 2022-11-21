@extends('layouts.app')

@section('content')
<div class="content-header pt-2 pb-1">
    <div class="container-fluid">
        <div class="d-flex align-items-end flex-wrap justify-content-between pb-2">
            <h1 class="m-0 pr-3">
                Users
                <small class="font-weight-light ml-1 text-md">Add a user</small>
            </h1>
            <ol class="breadcrumb text-sm">
                <li class="breadcrumb-item">
                    <a href="{{ url('admin') }}">
                        Home
                    </a>
                </li>
                <li class="breadcrumb-item"><a href="{{ url('admin/users') }}">Users</a></li>
                <li class="breadcrumb-item active">Add a user</li>
            </ol>
        </div>
    </div>
</div>
<section class="content">
    <div class="container-fluid">
        <form method="POST" action="{{ route('user.store') }}" accept-charset="UTF-8" autocomplete="off">
            @csrf
            <div class="row">
                <div class="col-12 pb-3">
                    <a href="{{ route('user.index') }}" class="btn btn-default" data-toggle="tooltip" title="Users list">
                        <span class="far fa-arrow-alt-circle-left text-muted"></span>
                    </a>
                    <span class="btn-group float-right">
                        <button type="submit" class="btn btn-primary">
                            Save                    
                        </button>
                    </span>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <div class="card card-outline card-info">
                        <div class="card-header border-bottom-0">
                            <h3 class="card-title">Informations</h3>
                        </div>
                        <div class="card-body pt-0">
                            <div class="form-group">
                                <label>Name</label>
                                @error('name')
                                    <div>
                                        <span class="text-danger">{{ $message }}</span>
                                    </div>
                                @enderror
                                <input class="form-control" autofocus="" autocomplete="off" name="name" type="text" value="{{ old('name') }}">
                            </div>
                            <div class="form-group">
                                <label>E-mail</label>
                                @error('email')
                                    <div>
                                        <span class="text-danger">{{ $message }}</span>
                                    </div>
                                @endif
                                <input class="form-control" autocomplete="off" name="email" type="text" value="{{ old('email') }}">
                                <small class="form-text text-muted">The user will receive an invitation by e-mail to login in which it will allow him to enter his new password</small>
                            </div>
                            <div class="form-group">
                                <label for="password">Password</label>
                                @error('password')
                                    <div>
                                        <span class="text-danger">{{ $message }}</span>
                                    </div>
                                @endif
                                <input type="password" name="password" class="form-control" id="password" placeholder="Password" value="{{ old('password') }}">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>
</section>
@endsection