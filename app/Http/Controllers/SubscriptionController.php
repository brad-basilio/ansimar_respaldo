<?php

namespace App\Http\Controllers;

use App\Models\Subscription;
use App\Notifications\SubscriptionNotification;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Notification;
use SoDe\Extend\Text;

class SubscriptionController extends BasicController
{
    public $model = Subscription::class;

    public function beforeSave(Request $request)
    {
        $provider = Text::getEmailProvider($request->email);
        $subscription = $this->model::select('id')->where('description', $request->email)->first();
        return [
            'id' => $subscription->id ?? null,
            'name' => $provider,
            'description' => $request->email
        ];
    }

    public function afterSave(Request $request, object $jpa)
    {
        try {
            Log::info('SubscriptionController - Iniciando envío de notificación de suscripción', [
                'subscription_id' => $jpa->id,
                'email' => $jpa->description
            ]);

            // Enviar email de bienvenida al suscriptor
            if ($jpa->description) {
                Notification::route('mail', $jpa->description)->notify(new SubscriptionNotification($jpa));
                Log::info('SubscriptionController - Notificación enviada exitosamente');
            }

        } catch (\Exception $e) {
            Log::error('SubscriptionController - Error al enviar notificación de suscripción', [
                'subscription_id' => $jpa->id ?? 'unknown',
                'error' => $e->getMessage(),
                'trace' => $e->getTraceAsString()
            ]);
        }
    }
}
