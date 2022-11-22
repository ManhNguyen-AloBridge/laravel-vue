<div class="datatable-responsive">
    <table class="table table-bordered table-hover datatable">
        <thead>
            <tr>
                @foreach ($titles as $header)
                    @if ($header['title'] == 'checkbox')
                        <th class="th-check-all {{ $header['class'] ?? '' }}"><input class="check-all" type="checkbox" name="" id=""></th>
                    @else
                        <th class="{{ $header['class'] ?? '' }}">{{ $header['title'] }}</th>
                    @endif
                @endforeach
            </tr>
        </thead>
        <tbody>
            {{ $slot ?? '' }}
        </tbody>
        <tfoot>
            <tr>
                @foreach ($titles as $header)
                    @if ($header['title'] == 'checkbox')
                        <th class="th-check-all"><input class="check-all" type="checkbox" name="" id=""></th>
                    @else
                        <th>{{ $header['title'] }}</th>
                    @endif
                @endforeach
            </tr>
        </tfoot>
    </table>
</div>
