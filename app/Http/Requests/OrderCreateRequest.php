<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class OrderCreateRequest extends FormRequest {
    public function rules() {
        return [
            'delivery.address' => [
                'required',
            ],
            'delivery.name'    => [
                'required',
            ],
            'delivery.email'   => [
                'required',
                'email',
            ],
            'delivery.phone'   => [
                'required',
            ],
            'items.*.id'       => [
                'required',
                'integer',
            ],
            'items.*.count'    => [
                'required',
                'integer',
            ],
        ];
    }
}
