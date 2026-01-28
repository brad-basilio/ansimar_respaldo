<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Notification;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use App\Mail\RawHtmlMail;

class SubscriptionNotification extends Notification implements ShouldQueue
{
    use Queueable;
    
    protected $subscription;
    
    public function __construct($subscription)
    {
        $this->subscription = $subscription;
    }
    public function via($notifiable)
    {
        return ['mail'];
    }

        /**
     * Variables disponibles para la plantilla de email.
     */
    public static function availableVariables()
    {
        return [
            // No hay variables dinámicas para este email
            'fecha_suscripcion' => 'Fecha de suscripción',
            'email' => 'Correo electrónico',
            'year' => 'Año actual',
        ];
    }

    public function toMail($notifiable)
    {
        $template = \App\Models\General::where('correlative', 'subscription_email')->first();
        $body = $template
            ? \App\Helpers\Text::replaceData($template->description, [
                'fecha_suscripcion' => now()->setTimezone('America/Lima')->locale('es')->translatedFormat('d \d\e F \d\e\l Y'),
                'email' => $this->subscription->description ?? '',
                'year' => date('Y'),
            ])
            : 'Plantilla no encontrada';
        return (new RawHtmlMail($body, '¡Gracias por suscribirte!', $this->subscription->description));
    }
}
