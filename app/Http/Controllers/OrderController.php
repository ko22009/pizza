<?php

namespace App\Http\Controllers;

use App\Http\Requests\OrderCreateRequest;
use App\Models\User;
use App\Repositories\OrderRepository;
use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\DB;

class OrderController extends APIController {

    protected OrderRepository $orderRepository;

    public function __construct(OrderRepository $orderRepository) {
        $this->orderRepository = $orderRepository;
    }

    public function index(): JsonResponse {
        $list = $this->orderRepository->get();
        return response()->json($list);
    }

    public function create(OrderCreateRequest $request): JsonResponse {
        DB::beginTransaction();
        /**
         * @var User $user
         */
        $user = auth('api')->user();
        try {
            $order = $this->orderRepository->create($request['delivery']);
            $items = $request['items'];
            $orderPizza = [];
            foreach ($items as $item) {
                $orderPizza[$item['id']] = ['count' => $item['count']];
            }
            $order->pizzas()->attach($orderPizza);
            if ($user) {
                $user->orders()->attach($order);
            }
            DB::commit();
            $status = 200;
        } catch (Exception $exception) {
            $status = 500;
            DB::rollBack();
        }
        return response()->json([], $status);
    }

    public function get(): JsonResponse {
        /**
         * @var User $user
         */
        $user = auth('api')->user();
        $user->load(['orders.pizzas']);
        return response()->json($user['orders']);
    }

}
