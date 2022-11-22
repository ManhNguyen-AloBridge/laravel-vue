@extends('layouts.app')

@section('content')
<div class="content-header pt-2 pb-1">
    <div class="container-fluid">
        <div class="d-flex align-items-end flex-wrap justify-content-between pb-2">
            <h1 class="m-0 pr-3">
                Users
                <small class="font-weight-light ml-1 text-md">User list</small>
            </h1>
            <ol class="breadcrumb text-sm">
                <li class="breadcrumb-item">
                    <a href="http://localhost:8080/admin">
                        Home
                    </a>
                </li>
                <li class="breadcrumb-item"><a href="http://localhost:8080/admin/users">Users</a></li>
            </ol>
        </div>
    </div>
</div>
<section class="content">
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 mbl">
                <span class="float-right pb-3">
                    <a href="http://localhost:8080/admin/users/create" class="btn btn-primary">
                        Add a user                
                    </a>
                </span>
            </div>
        </div>
        <div class="card card-outline card-info">
            <div class="card-body">
                @if (session('message'))
                <div class="alert alert-info">{{ session('message') }}</div>
                @endif
                <div class="table-responsive">
                    <div id="dt_users_wrapper" class="dataTables_wrapper dt-bootstrap4 no-footer">
                        <form action="{{ route('user.index') }}" method="GET">
                            <div class="d-flex flex-wrap justify-content-between">
                                <div class="dt_top_left mb-2 mr-2">
                                    <div class="dataTables_length">
                                        <label class="mb-0">Show 
                                            <select name="perPage" class="custom-select custom-select-sm form-control form-control-sm">
                                                <option value="10">10</option>
                                                <option value="25">25</option>
                                                <option value="50">50</option>
                                                <option value="100">100</option>
                                                <option value="-1">∞</option>
                                            </select> entries</label>
                                    </div>
                                </div>
                                <div class="dt_top_right d-flex mb-2">
                                        <div id="dt_users_filter" class="dataTables_filter d-flex">
                                            <label class="mb-0">Search:
                                                <input type="search" class="form-control form-control-sm" name="keyword" value="{{request()->keyword}}" placeholder="">
                                            </label>
                                        </div>
                                        <div class="dt-buttons btn-group flex-wrap ml-1">
                                            <button type="submit" id="search" class="btn btn-sm show-filters btn-default">
                                                <span>
                                                    <span class="fa fa-fw fa-filter"></span>
                                                    <span class="fa fa-caret-down"></span>
                                                </span>
                                            </button> 
                                        </div>
                                </div>
                            </div>
                        </form>
                        <div class="row">
                            <div class="col-sm-12">
                                <x-datatable :data="$data" :headers="$headers" :fields="$fields"/>
                            </div>
                        </div>
                        <div class="row d-flex flex-wrap align-items-center justify-content-between">
                            {!! $data->withQueryString()->links('pagination::bootstrap-5') !!}
                        </div>
                    </div>
                </div>
            </div>
        </div>
</section>
@endsection

@push('page_scripts')
<script type="text/javascript">
window.onload = function () {
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="_token"]').attr('content')
        }
    });
    $('#search').click(function() {
        
    });
    $('a.delete').click(function() {
        $('#key').val($(this).data('id'));
    })
    $('#deleteModal .btn-primary').click(function(){
        $.ajax({
            url: 'users/' + $('#key').val(),
            method: 'DELETE'
        })
        .done(function( data ) {
            if ( data ) {
                window.location.reload();
            }
        });
    });
}
</script>
@endpush