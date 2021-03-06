firstDate = new Date ("1989-4-16");

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("./serviceworker.js");
}

function Share()
{
  if (navigator.share) {
    navigator.share({
      title: 'https://dilbertapp.tk',
      url: pictureUrl
    });
  } 
}


function onload()
{
    
  
    currentselectedDate = document.getElementById("DatePicker").valueAsDate = new Date();
    
    document.getElementById("Next").disabled = true;
    document.getElementById("Current").disabled = true;
    
    formatDate(currentselectedDate);

    today = year+'-'+month+'-'+day;
    document.getElementById("DatePicker").setAttribute("max", today);
    CompareDates();
    showComic();

}


document.addEventListener('swiped-right', function(e)
 {
  PreviousClick();
 }
);

function PreviousClick()
{
  //currentselectedDate = document.getElementById('DatePicker');
  
  //currentselectedDate = new Date(currentselectedDate.value);
  currentselectedDate.setDate(currentselectedDate.getDate()-1);

  CompareDates();

  showComic();

} 

document.addEventListener('swiped-left', function(e)
 {
  NextClick();
});


function NextClick()
{
  //currentselectedDate = document.getElementById('DatePicker');
  //currentselectedDate = new Date(currentselectedDate.value);
  currentselectedDate.setDate(currentselectedDate.getDate()+1);

  CompareDates();

  showComic();

}

function FirstClick()
{
  currentselectedDate = new Date(Date.UTC(1989, 3, 16,12));
  
  CompareDates();
  
  showComic();

}

document.addEventListener('swiped-up', function(e)
 {
  currentselectedDate = new Date();
  
  CompareDates();

  showComic();
});

function CurrentClick()
{
  currentselectedDate = new Date();
  
  CompareDates();

  showComic();
 
}


document.addEventListener('swiped-down', function(e)
 {
  start = firstDate;
  end = new Date();
  currentselectedDate = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));

  CompareDates();
  
  showComic();
});

function RandomClick()
{
  start = firstDate;
  end = new Date();
  currentselectedDate = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));

  CompareDates();
  
  showComic();
 
}

function DateChange()
{
  currentselectedDate = document.getElementById('DatePicker');
  currentselectedDate = new Date(currentselectedDate.value);
  
  CompareDates();
  
  showComic();
  
}

function showComic()
{
  
  formatDate(currentselectedDate);

  formattedDate = year+"-"+month+"-"+day;
  document.getElementById('DatePicker').value = formattedDate;
  siteUrl = "https://cors.bridged.cc/https://dilbert.com/strip/"+formattedDate;
  fetch(siteUrl, {
    method: "GET",
    headers: {
      "x-cors-grida-api-key": "77a0175b-4435-49b0-ad18-52d2dea5a548"
    }
  })
     .then(function(response) 
     {
      response.text().then(function(text) 
      {
      siteBody = text;
      picturePosition = siteBody.indexOf("https://assets.amuniversal.com");
      pictureUrl = siteBody.substring(picturePosition, picturePosition+63);
      document.getElementById("comic").src = pictureUrl;
     });
  });
}

function CompareDates()
{
  startDate = new Date(Date.UTC(1989, 3, 16,12));
  startDate = startDate.setHours(0,0,0,0);
  currentselectedDate = currentselectedDate.setHours(0,0,0,0);
  startDate = new Date(startDate);
  currentselectedDate = new Date(currentselectedDate);
  if (currentselectedDate.getTime() <= startDate.getTime() )
  
  {
    document.getElementById("Previous").disabled = true;
    document.getElementById("First").disabled = true;

    formatDate(startDate);

    startDate = year+'-'+month+'-'+day;

    document.getElementById('DatePicker').value = startDate;
    //currentselectedDate = startDate;
  }
  else
  {
    document.getElementById("Previous").disabled = false;
    document.getElementById("First").disabled = false;
  }
  
  endDate = new Date();
  endate = endDate.setHours(0,0,0,0);
  endDate = new Date(endDate);
  if (currentselectedDate.getTime() >= endDate.getTime())
  
  {
    document.getElementById("Next").disabled = true;
    document.getElementById("Current").disabled = true;

    formatDate(endDate);

    endDate = year+'-'+month+'-'+day;

    document.getElementById('DatePicker').value = endDate;
    currentselectedDate = new Date();
  }
  else
  {
    document.getElementById("Next").disabled = false;
    document.getElementById("Current").disabled = false;
  } 

 }

 function formatDate(datetoFormat)
 {
  day = datetoFormat.getDate();
  month = datetoFormat.getMonth() + 1;
  year = datetoFormat.getFullYear();
  month = ("0"+month).slice(-2);
  day = ("0"+day).slice(-2);
 }

 function Rotate() {
  var element = document.getElementById('comic');

  if (element.className === "normal") {
    element.className = "rotate";
  }
  else if ( element.className === "rotate") {
    element.className = 'normal';
  }
}



