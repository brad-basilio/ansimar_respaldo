<?php

namespace App\Http\Controllers;

use App\Models\General;
use Illuminate\Http\Request;

class PrivacyPolicyController extends BasicController
{
    public $reactView = 'PrivacyPolicy';
    public $reactRootView = 'public';

     public function setReactViewProperties(Request $request)
    {
        $privacyPolicy = General::where('correlative', 'privacy_policy')->first();
        
        return  [
            'content' => $privacyPolicy ? $privacyPolicy->description : '',
            'title' => 'Política de Privacidad'
        ];
    }
}
