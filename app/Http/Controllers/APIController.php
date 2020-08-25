<?php


namespace App\Http\Controllers;


/**
 * @OA\Info(
 *     title="Pizza API",
 *     version="1.0.0",
 *     @OA\Contact(
 *         email="ko22009@yandex.ru"
 *     ),
 *     @OA\License(
 *         name="Apache 2.0",
 *         url="http://www.apache.org/licenses/LICENSE-2.0.html"
 *     )
 * )
 * @OA\Parameter(
 *     name="accept",
 *     in="header",
 *     required=true,
 *     description="Accept json header",
 *     @OA\Schema(
 *         type="accept"
 *     )
 * ),
 * @OA\Server(
 *     description="Open API server",
 *     url="/api"
 * )
 */
class APIController extends Controller
{

}
