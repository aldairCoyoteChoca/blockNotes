<?php

use Illuminate\Http\Request;
use Notes\NotesController;

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

// Route::get('/index', [NotesController::class],'index');

Route::apiResource('notes', NotesController::class);