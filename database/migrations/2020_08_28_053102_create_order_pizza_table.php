<?php

use App\Models\Order;
use App\Models\OrderPizza;
use App\Models\Pizza;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOrderPizzaTable extends Migration {

    public function up() {
        Schema::create(with(new OrderPizza())->getTable(), function (Blueprint $table) {
            $table->foreignId('order_id')->constrained();
            $table->foreignId('pizza_id')->constrained();
            $table->integer('count');
        });
    }

    public function down() {
        Schema::dropIfExists(with(new OrderPizza())->getTable());
    }

}
