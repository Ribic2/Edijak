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
            $table->string('subject');
            $table->string('class')->nullable();
            $table->integer('hour');
            $table->foreignId('teacherId')->references('id')->on('teachers');
            $table->foreignId('groupId')->references('id')->on('groups');
            $table->foreignId('hourId')->references('id')->on('hours');
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
