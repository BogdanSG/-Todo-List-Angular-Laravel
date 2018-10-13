<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/get-tasks', 'ApiController@getTasks');

Route::post('/add-task', 'ApiController@addTask');

Route::post('/update-task', 'ApiController@updateTask');

Route::post('/delete-task', 'ApiController@deleteTask');
