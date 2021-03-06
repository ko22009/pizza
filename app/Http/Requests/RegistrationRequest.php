<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class RegistrationRequest extends FormRequest
{

    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'login'                 => 'required|between:3,60|unique:users,login',
            'email'                 => 'required|email|unique:users,email',
            'name'                  => 'required|between:3,60',
            'password'              => 'required|between:4,36|confirmed',
        ];
    }

}
