<?php

namespace App\Http\Entities;

/**
 * @OA\Schema(
 *     description="Get pizza from api",
 *     type="object",
 *     title="get Pizza",
 * )
 */
class PizzaResponseEntity extends AbstractEntity
{

    /**
     * @OA\Property(
     *     title="name",
     *     description="Title of pizza",
     *     format="string",
     *     example="Hawaiian on a fluffy dough 30 cm"
     * )
     */
    public string $name;

    /**
     * @OA\Property(
     *     title="description",
     *     description="Description of pizza",
     *     format="string",
     *     example="smoked chicken, ham, salad shrimp, pineapple, mozzarella cheese, brand sauce, fluffy dough"
     * )
     */
    public string $description;

    /**
     * @OA\Property(
     *     title="Image url",
     *     description="Image of pizza",
     *     format="string",
     *     example="/assets/pizza3.png"
     * )
     */
    public string $image;

    /**
     * @OA\Property(
     *     title="Price euro",
     *     description="Price of pizza",
     *     format="float",
     *     example="3.2"
     * )
     */
    public float $price_euro;

    /**
     * @OA\Property(
     *     title="Price dollar",
     *     description="Price of pizza",
     *     format="float",
     *     example="2.9"
     * )
     */
    public float $price_dollar;

    /**
     * @OA\Property(
     *     title="Weight",
     *     description="Weight of pizza",
     *     format="int",
     *     example="2.9"
     * )
     */
    public int $weight;

}
