<?php

namespace App\Http\Controllers\Notes;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Notes;
use Carbon\Carbon;

class NotesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try {
            $notes = Notes::orderBy('id', 'DESC')->get();
            foreach($notes as $note){
                $date = Carbon::parse($note->created_at);
                $note->created = $date->format('d-m-Y');
            }
            
            return response()->json([
                "data" => $notes,
                "error" => ""
            ]);

        } catch (\Exception $th) {
            return response()->json([
                "data" => "",
                "error" => $th
            ],500);
        }
        
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        try {
            $note = Notes::create($request->all());
            return response()->json([
                "data" => $note,
                "error" => ""
            ]);
        } catch (\Exception $th) {
            return response()->json([
                "data" => "",
                "error" => $th
            ],500);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
       try {
            $note = Notes::findOrFail($id);
            return response()->json([
                "data" => $note,
                "error" => ""
            ]);
       } catch (\Exception $th) {
            return response()->json([
                "data" => "",
                "error" => $th
            ],500);
       }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        try {
            $note = Notes::findOrFail($id)->update($request->all());
            $notes = Notes::orderBy('id', 'DESC')->get();

            return response()->json([
                "data" => $notes,
                "error" => ""
            ]);
        } catch (\Exception $th) {
            return response()->json([
                "data" => "",
                "error" => $th
            ],500);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        try {
            Notes::destroy($id);
            return response()->json([
                "data" => "Eliminado correctamente.",
                "error" => ""
            ]);
        } catch (\Exception $th) {
            return response()->json([
                "data" => "",
                "error" => $th
            ],500);
        }
    }
}
