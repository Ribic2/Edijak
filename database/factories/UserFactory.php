<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class UserFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = User::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $name = $this->faker->name;
        $surname = $this->faker->name;

        return [
            'name' => $name,
            'surname' => $surname,
            'email' => $this->faker->unique()->safeEmail,
            'password' => 'test', // password
            'nameAndSurname' => ucfirst($name[0]).". ".$surname,
            'groupId' => $this->faker->numberBetween($min=1, $max=39)
        ];
    }
}
