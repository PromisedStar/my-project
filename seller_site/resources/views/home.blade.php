@extends('layout')
@section('content')
<body>
    <div id="app">

        <top-bar1></top-bar1>

        <dashboard></dashboard>

        <subcontent></subcontent>
        <div class="container full-width">
            <div class="row">
                <div class="col-md-12">
                    <p class="curser-create-btn" type="button">Course Create</p>
                </div>
                <div class="col-md-12">
                    @for($i = 0; $i < 4; $i++)
                        <courses></courses>
                    @endfor
                </div>
            </div>
        </div>

        <footer id="footer">
            <subfooter></subfooter>
        </footer>
    </div>
</body>
@stop

