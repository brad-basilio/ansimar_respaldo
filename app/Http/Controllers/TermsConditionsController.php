<?php

namespace App\Http\Controllers;

use App\Models\General;
use Illuminate\Http\Request;

class TermsConditionsController extends BasicController
{
    public $reactView = 'TermsConditions';
    public $reactRootView = 'public';

     public function setReactViewProperties(Request $request)
    
    {
        $termsConditions = General::where('correlative', 'terms_conditions')->first();
        
        return  [
            'content' => $termsConditions ? $termsConditions->description : '',
            'title' => 'Términos y Condiciones'
        ];
    }
}
