<?php

namespace App\Http\Controllers;

use App\Repositories\PizzaRepository;
use Illuminate\Http\JsonResponse;

class PizzaController extends APIController
{

    protected PizzaRepository $pizzaRepository;

    public function __construct(PizzaRepository $pizzaRepository)
    {
        $this->pizzaRepository = $pizzaRepository;
    }

    /**
     * @OA\Get(
     *     path="/pizza",
     *     operationId="getPizza",
     *     tags={"Pizza"},
     *     summary="Get all pizza",
     *     @OA\Response(
     *         response="200",
     *         description="Load data from api",
     *         @OA\JsonContent(
     *              type="array",
     *              @OA\Items(ref="#/components/schemas/PizzaResponseEntity")
     *         )
     *     )
     * )
     */
    public function index(): JsonResponse
    {
        $list = $this->pizzaRepository->get();
        return response()->json($list);
    }

}
