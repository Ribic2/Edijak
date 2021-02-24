<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class PollTables extends Migration
{
    /**
     * Run the migrations and creates tables
     *
     * @return void
     */
    public function up()
    {
        Schema::create('polls', function(Blueprint $table){
            $table->id();
            $table->string('pollTitle');
            $table->string('pollDescription');
            $table->boolean('isFinished')->default(0);
            $table->foreignId('creatorId')->references('id')->on('users');
            $table->foreignId('groupId')->references('id')->on('groups');
            $table->timestamps();
        });

        Schema::create('options', function(Blueprint $table){
            $table->id();
            $table->string('option');
            $table->foreignId('pollId')->references('id')->on('polls');
            $table->timestamps();
        });

        Schema::create('answers', function(Blueprint $table){
            $table->id();
            $table->foreignId('userId')->references('id')->on('users');
            $table->foreignId('pollId')->references('id')->on('polls');
            $table->foreignId('optionId')->references('id')->on('options');
            $table->timestamps();
        });

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
