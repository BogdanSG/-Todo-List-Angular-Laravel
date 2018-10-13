<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use \DB;

class ApiController extends Controller {

    public function getTasks(){

        return response()->json(['data' => DB::table('tasks')->get()]);

    }//getTasks

    public function addTask(Request $request){

        $text = $request->get('text');
        $id = null;

        if($text){

            $id = DB::table('tasks')->insertGetId(['text' => $text]);

        }//if

        return response()->json(['data' => $id ? DB::table('tasks')->find($id) : null]);

    }//updateTask

    public function updateTask(Request $request){

        $id = $request->get('id');
        $text = $request->get('text');

        if($id && $text){

            DB::table('tasks')->where('id', '=', $id)->update(['text' => $text]);
            return response()->json(['data' => true]);

        }//if

        return response()->json(['data' => false]);

    }//updateTask

    public function deleteTask(Request $request){

        $id = $request->get('id');

        if($id){

            DB::table('tasks')->where('id', '=', $id)->delete();
            return response()->json(['data' => true]);

        }//if

        return response()->json(['data' => false]);

    }//updateTask

}//ApiController
