<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PizzasTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('pizzas')->insert([
            'name' => 'Al Sham on thin crust 30 cm',
            'description' => 'chicken, mozzarella cheese, tomatoes, fresh cucumber, iceberg salad, onion, ketchup, creamy garlic sauce, thin crust',
            'image' => '/assets/pizza1.png',
            'price_euro' => '7.1',
            'price_dollar' => '8',
            'weight' => '570',
        ]);
        DB::table('pizzas')->insert([
            'name' => 'Rustic on lush dough 30 cm',
            'description' => 'ham, bacon, mozzarella cheese, champignon mushrooms, parmesan cheese, red onion, onion, garlic, pizza sauce, fluffy dough',
            'image' => '/assets/pizza2.png',
            'price_euro' => '7.3',
            'price_dollar' => '8.4',
            'weight' => '610',
        ]);
        DB::table('pizzas')->insert([
            'name' => 'Hawaiian on a fluffy dough 30 cm',
            'description' => 'smoked chicken, ham, salad shrimp, pineapple, mozzarella cheese, brand sauce, fluffy dough',
            'image' => '/assets/pizza3.png',
            'price_euro' => '7.7',
            'price_dollar' => '8.8',
            'weight' => '730',
        ]);
        DB::table('pizzas')->insert([
            'name' => 'Prosciutto fungi on fluffy dough 30 cm',
            'description' => 'mushrooms champignons, ham, mozzarella cheese, pizza sauce, fluffy dough',
            'image' => '/assets/pizza4.png',
            'price_euro' => '7.1',
            'price_dollar' => '7.9',
            'weight' => '650',
        ]);
        DB::table('pizzas')->insert([
            'name' => 'Petrovskaya on fluffy dough 20 cm',
            'description' => 'ham, mozzarella cheese, pepperoni, garlic, champignons, red onions, pizza sauce, chicken, fluffy dough, parmesan cheese, tomatoes',
            'image' => '/assets/pizza5.png',
            'price_euro' => '3',
            'price_dollar' => '4.2',
            'weight' => '330',
        ]);
        DB::table('pizzas')->insert([
            'name' => 'Dragon on a lush dough 20 cm',
            'description' => 'ham, pepperoni, mozzarella cheese, champignons, jalapeno peppers, pizza sauce, fluffy dough, paprika, parmesan cheese, red onion',
            'image' => '/assets/pizza6.png',
            'price_euro' => '3.1',
            'price_dollar' => '3.8',
            'weight' => '330',
        ]);
        DB::table('pizzas')->insert([
            'name' => 'Carbonara on thin crust 30 cm',
            'description' => 'bacon, mozzarella cheese, egg, paprika, onion, pizza sauce, thin crust',
            'image' => '/assets/pizza7.png',
            'price_euro' => '3.7',
            'price_dollar' => '4.3',
            'weight' => '450',
        ]);
        DB::table('pizzas')->insert([
            'name' => 'Margarita on thin crust 30 cm',
            'description' => 'mozzarella cheese, basil, pizza sauce, thin crust',
            'image' => '/assets/pizza8.png',
            'price_euro' => '2.8',
            'price_dollar' => '3.1',
            'weight' => '320',
        ]);
    }
}
