<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class ScheduleMigration extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
       Schema::create('schedules', function (Blueprint $table){
            $table->id();
            $table->string('subject')->nullable();
            $table->string('class');
            $table->integer('hour');
            $table->string('type');
            $table->foreignId('userId')->nullable()->references('id')->on('users');
            $table->foreignId('groupId')->nullable()->references('id')->on('groups');
            $table->foreignId('hourId')->nullable()->references('id')->on('hours');
            $table->timestamps();
       }) ;
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
