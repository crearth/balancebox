<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Schema; // added https://dev.to/kingsconsult/laravel-8-auth-registration-and-login-32jl

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Schema::defaultstringLength(191); // added https://dev.to/kingsconsult/laravel-8-auth-registration-and-login-32jl
    }
}
