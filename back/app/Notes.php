<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Notes extends Model

{
    protected $fillable = [
        "name",
        "text",
        "archived"
    ];
}
