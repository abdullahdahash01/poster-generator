const html = `
<html lang="en" dir="rtl">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Document</title>

  <style>
    html {
      font-size:62.5%;
      
    }
    body {
      background-color: white;
    
      /*  */
      width: 80rem;
      height: 60rem;
      /*  */
      border: 1px solid black;
      padding: 2rem;
      margin: 2.5rem auto;
    }
    .poster-content {
      width: 100%;
    }
    .header-container {
      width: 100%;
      height: 16.6rem;
      display: grid;
      /* justify-content: center;
      align-items: center; */
      grid-template-columns: 1fr 3fr;
      gap: 1rem;
     
    }
    .poster-header {
      font-size:3.2rem;
      color: black;
  
    }
    .image {
     width:100%; 
     height:100%;
     border-radius: 5px;
    }
    .header-text-container{
      box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, .2);
      border-radius: 5px;
      padding:0 2rem  ;
    }

    .content {
      width: 100%;
      display: grid;
      grid-template-columns: 3fr 1fr;
      margin: 2rem 0;
      gap: 2rem;
      /* overflow: hidden; */
    }
    
    .info-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 1rem;
      
    }

    .numbers {
      display: flex;
      gap: 1rem;
      width: 100%;
    }

    .location-container{
      box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, .2);
      border-radius: 5px; 
      padding: 0 2rem ;
    }

    .info {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      width: 100%;
      box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, .2);
      border-radius: 5px;
    }

    p {
      font-size: 2rem;
     
    }

    .qr {
      width: 100%;
      border: 1px black solid;
    }

    .features {
      display: flex;
      justify-content: space-between;
     
    }

    .feature {
      background-color: rgb(213, 218, 240); padding: 0.5rem; border-radius: 5px;
      font-size: 2rem;
    }

    .footer-container {
      width: 100%;
      height: 12rem;
      display: grid;
      /* justify-content: center;
      align-items: center; */
      grid-template-columns: 1fr 3fr;
      gap: 1rem;
      /* border: 1px solid black; */
      
     
    }

    .footer-image {
      height: 12rem;
      width: 100%;
      border-radius: 5px;
      box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, .2);
    }

   

  </style>
</head>
<body>
  <div class="poster-content">
    <div class="header-container">
      <img class='image'src="https://play-lh.googleusercontent.com/8YQu_wJnsN6wdV8Xp39i2zvTkXhXUbG5iLywRkbiEEuvurRmrrfTfWVfRMdkdR6wC1iI=s512-rw" >
      <div class="header-text-container">
        <p class="poster-header"> شاليه للايجار شاليه للايجار شاليه للايجار شاليه للايجارشاليه للايجار</p>
      </div>
    </div>

    <div class="content">
      <div class="info-container">
        <div class="numbers">
          <div class="info"><p>009647712345678</p></div>
          <div class="info"><p>009647712345678</p></div>
        </div>
        <div class="location-container">
          <p class="city">المدائن - بغداد</p>
          <p class="location">بالقرب من الشارع العام</p>
        </div>
      </div>
      <div class="qr-container">
        <img class="qr" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1280px-QR_code_for_mobile_English_Wikipedia.svg.png" alt="">
      </div>
      
    </div>
    <div class="features">
      <p class="feature">100 متر مربع</p>
      <p class="feature">كراج</p>
      <p class="feature">مسبح</p>
      <p class="feature">شواية</p>
      <p class="feature">انترنت</p>
    </div>

    <div class="footer-container">
      <img class="footer-image" src="https://play-lh.googleusercontent.com/8YQu_wJnsN6wdV8Xp39i2zvTkXhXUbG5iLywRkbiEEuvurRmrrfTfWVfRMdkdR6wC1iI=s512-rw" alt="">
      <img class="footer-image" src="https://scontent.fbgw66-1.fna.fbcdn.net/v/t39.30808-6/309911998_490547629756018_8092393072987399215_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=52f669&_nc_eui2=AeHDmtE4nX1cE_10-v8diD6i54dQEv0MwlXnh1AS_QzCVWSFRcgWwL4lnIT9wDtwee6Z9n3W_D74kVBY9dp6waK8&_nc_ohc=rU1VvSQIMx0AX_al792&_nc_ht=scontent.fbgw66-1.fna&oh=00_AfByvZxKMyDQXEo3XSiYTtIMc7tXMIOSPuz3ldg4kCtzyA&oe=6528F839" alt="">
    </div>      
  </div>
</body>
</html>
      `

module.exports = html