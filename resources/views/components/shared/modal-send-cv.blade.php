    <div class="modal fade" id="{{ $attributes['id'] }}" tabindex="-1" role="dialog"
        aria-labelledby="{{ $attributes['id'] . 'Label' }}" aria-hidden="true">
        <div class="modal-dialog u-max-width-720" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">@trans_page('staff/cv.title_modal_send_mail')</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body p-0">
                    <form class="form-horizontal" action="{{ route('staffs.send.mail.cv', ['staff' => $staffId]) }}"
                        method="POST">
                        @csrf
                        <input id="errors" type="hidden" name="errors" value="{{ count($errors) }}" />
                        <div class="card-header">
                            <div class="row">
                                <div class="col-6">
                                    <label>@trans_page('mail/index.staff_name'): </label>
                                    <label>{{ $staffName }}</label>
                                </div>
                                <div class="col-6 border-left">
                                    {{ Str::limit($linkCv, 40, '...') }}
                                </div>
                            </div>
                        </div>
                        <div class="card-body pb-0 pt-3 pr-4 pl-4 body-modal-send-mail">
                            <div class="form-group mt-3">
                                <label class="col-md-12 pl-0 label-checkbox">
                                    <input type="checkbox" id="is-hidden" class="is-name-hidden-sending" value="1"
                                        @checked($attributes['is-hidden-name'])
                                        name="is_name_hidden_sending">@trans_page('setting/resume.hidden_name')
                                </label>
                            </div>
                            <div class="form-group mb-3">
                                <label for="form-name">@trans_page('mail/index.to')</label>
                                <input class="form-control" name="to" value="{{ $dataSetting?->to }}">
                                <x-shared.validation-error name='to' />
                            </div>
                            <div class="form-group mb-3">
                                <label for="form-name">@trans_page('mail/index.sender')</label>
                                <p class="text-muted border-bottom u-line-height-37">{{ $dataSetting?->sender }}</p>
                            </div>
                            <div class="form-group mb-3">
                                <label for="form-name">@trans_page('mail/index.cc')</label>
                                <div class="vr" id="cc">
                                    <span class="item-email" id="cc-email">
                                        @if (json_decode($dataSetting?->cc))
                                            @foreach (json_decode($dataSetting?->cc) as $item)
                                                <span class="vr__item">
                                                    <span class="cc__email">
                                                        {{ $item }}
                                                    </span>
                                                    <input type="hidden" name="cc[]" value="{{ $item }}" />
                                                    <span class="vr__icon-remove pl-2">×</span>
                                                </span>
                                            @endforeach
                                        @endif()
                                        <textarea id="input-cc" class="vr__input-email input-multi-email" rows="1"></textarea>

                                    </span>
                                </div>
                                <x-shared.validation-error name='cc' />
                            </div>

                            <div class="form-group mb-3">
                                <label for="form-name">@trans_page('mail/index.bcc')</label>
                                <div class="vr" id="bcc">
                                    <span class="item-email" id="bcc-email">
                                        @if (json_decode($dataSetting?->bcc))
                                            @foreach (json_decode($dataSetting?->bcc) as $item)
                                                <span class="vr__item">
                                                    <span class="bcc__email">
                                                        {{ $item }}
                                                    </span>
                                                    <input type="hidden" name="bcc[]" value="{{ $item }}" />
                                                    <span class="vr__icon-remove pl-2">×</span>
                                                </span>
                                            @endforeach
                                        @endif()
                                        <textarea id="input-bcc" class="vr__input-email input-multi-email" rows="1"></textarea>

                                    </span>
                                </div>
                                <x-shared.validation-error name='bcc' />
                            </div>

                            <div class="form-group mb-3">
                                <label for="form-name">@trans_page('mail/index.subject')</label>
                                <input class="form-control" name="subject"
                                    value="{{ $dataSetting?->default_subject }}">
                                <x-shared.validation-error name='subject' />
                            </div>

                            <div class="form-group mb-3">
                                <label for="body">@trans_page('mail/index.body')</label>
                                <textarea id="body" class="mail-body form-control" name="body" rows="5">{{ $dataSetting?->body }}</textarea>
								<x-shared.validation-error name='body' />
                                <div class="d-flex">
                                    <span class="pt-2 text-note text-muted ">（※）</span>
                                    <p class="text-muted text-note pt-2 mb-0">@trans_page('mail/index.note')</p>
                                </div>
                            </div>

                        </div>
                        <div class="card-footer">
                            <div class="float-right">
                                <button type="submit"
                                    class="btn btn-primary width-btn"><i
                                        class="far fa-paper-plane"></i>
                                    @trans_page('mail/index.button_send')</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
