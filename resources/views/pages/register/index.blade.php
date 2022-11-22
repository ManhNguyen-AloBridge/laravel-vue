@extends('app_new', [
'page' =>'register-page',
'usingLayout' => false
])

@section('title')
    @trans_page('register/index.page_title')
@endsection

@section('content')

<div class="header-wrapper">
	<div id="header" class="u-max-width-800 mx-auto">
		<div class="logo">
			<h1>@trans_page('register/index.header.logo')</h1>
			<span> @trans_page('register/index.header.site_description')</span>
		</div>
	</div>
</div>

<x-register.confirm-terms></x-register.confirm-terms>

<div id="content-page-register" class="hidden content-page-register">
    <div class="page-title text-center is-bold">
        <h3>@trans_page('register/index.page_title')</h3>
        <p>Initial Registration</p>
    </div>
    <div class="register-process u-max-width-492 mx-auto">
        @include('components.register.process')
    </div>
	<div id="content-steps" class="">
		<div class="u-max-width-800 mx-auto form-title">
			@include('components.register.step-one', ['page' => 0, 'modalId' => 'modal-cancel-register'])
			@include('components.register.step-two', ['page' => 1, 'modalId' => 'modal-cancel-register'])
			@include('components.register.step-end', ['page' => 2, 'modalId' => 'modal-cancel-register'])
		</div>
	</div>

	<div class="modal fade ms-0 w-100" id="modal-cancel-register" tabindex="-1" role="dialog" aria-hidden="true">
		<div class="modal-dialog" role="document">
			<div class="modal-content">

					<div class="modal-header">
						<h5 class="modal-title text text-xl" id="exampleModalLabel">
							@trans_page('register/index.confirm_cancel')
						</h5>
					</div>
					<div class="modal-body" >
						@trans_page('register/index.confirm_note')
					</div>

					<div class="modal-footer">
						<a href="" class="link text-md" data-bs-dismiss="modal">{{__('messages.shared.back')}}</a>
                        <button class="btn --danger width-btn" onclick="location.href='{{ route('login') }}'">@trans_page('register/index.yes')</button>
					</div>
				</form>
			</div>
		</div>
	</div>
</div>
@endsection

@section('after-scripts')
    <script defer src="{{ mix('assets_new/js/pages/register/index.js') }}"></script>
@endsection
