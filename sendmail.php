<?php
   use PHPMailer\PHPMailer\PHPMailer;
   use PHPMailer\PHPMailer\Exception;

   require 'phpmailer/src/Exception.php';
   require 'phpmailer/src/PHPMailer.php';
   require 'phpmailer/src/SMTP.php';

   // Instantiation and passing `true` enables exceptions   
   $mail = new PHPMailer(true);
   $mail->CharSet = 'UTF-8';
   $mail->setLanguage('ru', 'phpmailer/language/');
   $mail->IsHTML(true);


   //Server settings
   $mail->SMTPDebug = 0;                      // Enable verbose debug output
   $mail->isSMTP();                                            // Send using SMTP
   $mail->Host       = 'smtp.gmail.com';                    // Set the SMTP server to send through
   $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
   $mail->Username   = 'pendulumplay@gmail.com';                     // SMTP username
   $mail->Password   = 'jtrwtztemvazhhfi';                               // SMTP password
   $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
   $mail->Port       = 465; 

   //Recipients
   //От кого письмо
   $mail->setFrom('pendulumplay@gmail.com', 'Дитячий табiр');
   //Кому отправить
   $mail->addAddress('anastasianik32@gmail.com');

   //Тема письма
   $mail->Subject = 'Бронювання путівки. Лiто 2023';

   //Тело письма
   $body = '<h1>Бронювання путівки</h1>';

   if (trim(!empty($_POST['name']))) {
      $body.='<p><strong>Імя:</strong> '.$_POST['name'].'</p>';
   }
   if (trim(!empty($_POST['phone']))) {
      $body.='<p><strong>Телефон:</strong> '.$_POST['phone'].'</p>';
   }
   if (trim(!empty($_POST['child']))) {
      $body.='<p><strong>Кількість дітей:</strong> '.$_POST['child'].'</p>';
   }
   if (trim(!empty($_POST['age']))) {
      $body.='<p><strong>Ім’я та прізвище, вік:</strong> '.$_POST['age'].'</p>';
   }
   if (trim(!empty($_POST['age2']))) {
      $body.='<p><strong>Ім’я та прізвище, вік:</strong> '.$_POST['age2'].'</p>';
   }
   if (trim(!empty($_POST['age3']))) {
      $body.='<p><strong>Ім’я та прізвище, вік:</strong> '.$_POST['age3'].'</p>';
   }

   $mail->Body = $body;

   //ОТправляем
   if (!$mail->send()) {
      $message = 'Помилка';
   } else {
      $message = 'Дані надіслані!';
   }

   $response = ['message' => $message];

   header('Content-type: application/json');
   echo json_encode($response);
?>
   