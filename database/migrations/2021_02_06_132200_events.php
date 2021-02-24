<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Events extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('events', function(Blueprint $table){
           $table->id();
           $table->string('eventTitle');
           $table->string('description');
           $table->string('to');
           $table->enum('type', ['Spraševanje', 'Test', 'Drugo']);
           $table->foreignId('groupId')->nullable()->references('id')->on('groups');
           $table->foreignId('userId')->nullable()->references('id')->on('users');
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
