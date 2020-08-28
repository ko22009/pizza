<?php

use App\Models\Order;
use App\Models\OrderUser;
use App\Models\User;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOrderUserTable extends Migration {
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up() {
        Schema::create(with(new OrderUser())->getTable(), function (Blueprint $table) {
            $table->integer('order_id');
            $table->integer('user_id');

            $table->foreign('order_id')
                ->references('id')
                ->on(with(new Order())->getTable())
                ->onDelete('cascade');

            $table->foreign('user_id')
                ->references('id')
                ->on(with(new User())->getTable())
                ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down() {
        Schema::dropIfExists(with(new OrderUser())->getTable());
    }
}
