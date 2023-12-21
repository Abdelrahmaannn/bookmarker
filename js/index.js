var siteName = document.getElementById("siteName");
var SiteURL = document.getElementById("SiteURL");

var webSiteslist = [];

if (localStorage.getItem("webSite") != null) {
  webSiteslist = JSON.parse(localStorage.getItem("webSite"));

  showData();

  //display
}

function addSite() {
    
  if (validateUrl() == true)
   {
    var webSite = {
      name: siteName.value,
      url: SiteURL.value,
    };

    webSiteslist.push(webSite);

    localStorage.setItem("webSite", JSON.stringify(webSiteslist));

    showData();

    clearForm();
  }

  else
  {
    window.alert("Enter Valid URL")
  }


}

function showData() {
  var temp = " ";

  for (var i = 0; i < webSiteslist.length; i++) {
    temp +=
      `<tr>

        <td>` +
      (i+1) +
      `</td>

        <td>` +
      webSiteslist[i].name +
      `</td>

      <td><button class="visit-btn"><a href=` +
      webSiteslist[i].url +
      ` target="_blank"> <i class="fa-regular fa-eye pe-2"></i>Visit</a></button></td>

        <td><button  onclick="deleteSite(` +
      i +
      `)" class="delete-btn"><i class="fa-solid fa-trash pe-2"></i>Delete</button></td>
        
        </tr>`;
  }

  document.getElementById("data").innerHTML = temp;
}

function clearForm() {
  siteName.value = " ";
  SiteURL.value = " ";
}

function deleteSite(i) {
  webSiteslist.splice(i, 1);

  localStorage.setItem("webSite", JSON.stringify(webSiteslist));

  showData();
}

function validateUrl() {

  var regex =/^(?:(?:https?|ftp):\/\/)?(?:www\.)?[a-z0-9-]+(?:\.[a-z0-9-]+)+[^\s]*$/i;

  return regex.test(SiteURL.value);

}
