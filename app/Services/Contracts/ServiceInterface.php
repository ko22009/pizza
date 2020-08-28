<?php

namespace App\Services\Contracts;

use Illuminate\Http\Request;

interface ServiceInterface
{
    public function index();

    public function create(Request $request);

    public function read($id);

    public function update(Request $request, $id);

    public function delete($id);
}
