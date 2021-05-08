<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Spatie\Permission\Models\Role;
use Tymon\JWTAuth\Facades\JWTAuth;

class AuthController extends Controller
{
    /**
     * Returns teacher data
     * @return JsonResponse
     */
    public function checkTeacher(): JsonResponse
    {
        return response()->json([
            "role" => JWTAuth::user()->hasRole('teacher'),
            "user" => JWTAuth::user()
        ]);
    }

    /**
     * Returns student data
     * @return JsonResponse
     */
    public function checkStudent(): JsonResponse
    {
        return response()->json([
            "role" => JWTAuth::user()->hasRole('student'),
            "user" => JWTAuth::user()
        ]);
    }

    /**
     * Returns user data
     * @return JsonResponse
     */
    public function getUser(): JsonResponse
    {
        return response()->json([
            "role" => Auth::user()->hasAllRoles(Role::all()),
            "user" => Auth::user(),
        ]);
    }

    /**
     * Function that sets username to email, so login throttling will work
     * @return string
     */
    public function username(): string
    {
        return 'email';
    }

    /**
     * Logs in user
     * @param Request $request
     * @return JsonResponse
     */
    public function login(Request $request): JsonResponse
    {
        // Check if all credentials were provided
        if (!$request->filled(['email', 'password'])) {
            abort(400, "Nekateri podatki manjkajo!");
        }

        // Credentials
        $credentials = $request->only('email', 'password');

        // Checks if users credentials are correct
        if (!$token = JWTAuth::attempt($credentials)) {
            abort(400, "Uporabnik s to kombinacijo ne obstaja!");
        }

        // Creates token
        $token = JWTAuth::attempt($credentials);

        // Returns all the user data (password and other sensitive data is hidden).
        // It also returns token and checks if logged in user has a role teacher
        return response()->json([
            "user" => JWTAuth::user(),
            "token" => $token,
            "teacher" => JWTAuth::user()->hasRole('teacher')
        ]);
    }
}
