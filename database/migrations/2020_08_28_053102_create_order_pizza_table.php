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
            $table->integer('order_id');
            $table->integer('pizza_id');
            $table->integer('count');

            $table->foreign('order_id')
                ->references('id')
                ->on(with(new Order())->getTable())
                ->onDelete('cascade');

            $table->foreign('pizza_id')
                ->references('id')
                ->on(with(new Pizza())->getTable())
                ->onDelete('cascade');
        });
    }

    public function down() {
        Schema::dropIfExists(with(new OrderPizza())->getTable());
    }

}
