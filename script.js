/***** INPUT_OPTION_DAINAMIK_ENTER *****/

let bigSearchInput = document.querySelector("#search");

let searchValue = document.querySelector(".search_value");

let value = document.querySelector(".value");

function showOption() {
   
  bigSearchInput.addEventListener("input", () => {
    
    let inputValue = data.filter((obj) => obj.name.startsWith(bigSearchInput.value));
    
    let storOption = "";
      
    inputValue.forEach((objval) => {
      storOption += `<div class="value"><img src="img/search.svg" alt=""><h4>${objval.name}</h4></div>`;
        
   })
   searchValue.style.display = "block";
   searchValue.innerHTML = storOption;
 })
  bigSearchInput.addEventListener("blur", () => {
  searchValue.style.display = "none";
 })
 
}

showOption();


/***** DRAK_&_WHITE _MOOD *****/

let body = document.querySelector("body");

let allTag = document.querySelectorAll("a, h1,h2,h3,h4,h5,h6,p,span,small,button,label,input[placeholder]");

let moonIcon = document.querySelector("#moon_icon");

let wLogo = document.querySelectorAll(".w_logo");

let bLogo = document.querySelectorAll(".b_logo");

let brightnessIcon = document.querySelector("#brightness_icon");

let icon = document.querySelectorAll(".icon");

let premiumBtn = document.querySelector(".premium_btn");

let freeBtn = document.querySelector(".free_btn");

let small = document.querySelectorAll(".all_emoji_content small");

let i = document.querySelectorAll(".i");

let input_value = document.querySelectorAll(".input_value[value]");


moonIcon.addEventListener("click", () => {
  moonIcon.style.display = "none";
  
  brightnessIcon.style.display = "block";
 
  wLogo.forEach((wlogo) => {
    wlogo.style.display = "block";
  })
  
  body.style.backgroundColor = "#000";
  
  small.forEach((wsmall) => {
    wsmall.style.color = "#fff";
  })
    
  allTag.forEach((wtag) => {
    wtag.style.color = "#fff";
  })
  
  icon.forEach((wicon) => {
    wicon.style.color = "#fff";
  })
  
  input_value.forEach((iv) => {
    iv.style.color = "#fff";
  })
  
  premiumBtn.addEventListener("mousemove", () => {
    premiumBtn.style.color = "#fff";
  })
  
  premiumBtn.addEventListener("mouseleave", () => {
    premiumBtn.style.color = "#fff";
  })
  
  freeBtn.addEventListener("mouseenter", () => {
    freeBtn.style.color = "#fff";
  })
  
  freeBtn.addEventListener("mouseleave", () => {
    freeBtn.style.color = "#fff";
  })
})

brightnessIcon.addEventListener("click", () => {
  
   moonIcon.style.display = "block";
   
   brightnessIcon.style.display = "none";
     
  bLogo.forEach((blogo) => {
    blogo.style.display = "block";
  })
  
  wLogo.forEach((wlogo) => {
    wlogo.style.display = "none";
  })  
  
  body.style.backgroundColor = "#E8FFF1";
  
  allTag.forEach((wtag) => {
    wtag.style.color = "#000";
  })
  
  input_value.forEach((iv) => {
    iv.style.color = "#000";
  })
  
  icon.forEach((wicon) => {
    wicon.style.color = "#000";
  })
  
  premiumBtn.style.color = "#fff";
  
  premiumBtn.addEventListener("mousemove", () => {
    premiumBtn.style.color = "#000";
  })
  
  premiumBtn.addEventListener("mouseleave", () => {
    premiumBtn.style.color = "#fff";
  })
  
  freeBtn.addEventListener("mouseenter", () => {
    freeBtn.style.color = "#fff";
  })
  
  freeBtn.addEventListener("mouseleave", () => {
    freeBtn.style.color = "#000";
  })
})


/***** MENU_HEADER *****/

let crossIcon = document.querySelector("#cross_icon");

let menuHeader = document.querySelector(".menu_header");

let userIcon = document.querySelector("#user_icon");


userIcon.addEventListener("click", () => {
  menuHeader.style.display = "block";
  notificationMenu.style.display = "none";
})

crossIcon.addEventListener("click", () => {
  menuHeader.style.display = "none";
})


/***** NOTIFICATION_MENU *****/

let crossIcon2 = document.querySelector("#cross_icon2");

let notificationMenu = document.querySelector(".notification_menu");

let notificationIcon = document.querySelector("#notification_icon");


notificationIcon.addEventListener("click", () => {
  notificationMenu.style.display = "block";
  menuHeader.style.display = "none";
})

crossIcon2.addEventListener("click", () => {
  notificationMenu.style.display = "none";
})


/***** BACKGROUND *****/

let search = document.querySelector("#search");

let blur = document.querySelector(".blur");

let bg = document.querySelector(".bg");

search.addEventListener("focus", () =>{
  bg.style.display = "block";
  blur.style.filter = "blur(3px)";
})

search.addEventListener("blur", () => {
  bg.style.display = "none";
  blur.style.filter = "blur(0px)";
  search.value = "";
})


/***** ALL_CATEGORY_MENU & ALL_CATEGORY_OPTION *****/

let arrowUp = document.querySelector (".arrow_up");

let arrowDown = document.querySelector (".arrow_down");

let allCategoryMenu = document.querySelector (".all_category_menu");

let allCategoryOption = document.querySelector (".all_category_option");

allCategoryMenu.addEventListener("mousemove", () => {
  allCategoryOption.addEventListener("mousemove", () => {
    allCategoryOption.style.display = "block";
    arrowUp.style.display = "block";
    arrowDown.style.display = "none";
  })
  arrowUp.style.display = "block";
  arrowDown.style.display = "none";
  allCategoryOption.style.display = "block";
})


allCategoryMenu.addEventListener("mouseleave", () => {
  allCategoryOption.addEventListener("mouseleave", () => {
    arrowUp.style.display = "none";
    arrowDown.style.display = "block";
    allCategoryOption.style.display = "none";
  })
  arrowUp.style.display = "none";
  arrowDown.style.display = "block";
  allCategoryOption.style.display = "none";
})


/***** INPUT_OPTION_DAINAMIK_ENTER *****/

let type = document.querySelectorAll(".type");

type.forEach((ty) => {
  ty.addEventListener("click", (e) => {
    e.preventDefault();
    
  })
})


/***** INPUT_VALUE_DAINAMIK_ENTER *****/

let searchFiled = document.querySelector("#search_filed");

let emijiItems = document.querySelector(".emiji_items");

let name_emoji = "";

function enterTheEmoji() {
  data.forEach((moji) => {
    name_emoji += `<div class="emoji"><div class="item"><img src="${moji.emoji}" alt=""></div><small>${moji.name}</small></div>`
  })
  emijiItems.innerHTML = name_emoji;
}

function searchEmoji() {
  searchFiled.addEventListener("input", () => {
    let searchFilterValue = data.filter((val) => val.name.startsWith(searchFiled.value));
    
    let storValue = "";
    
    searchFilterValue.forEach((dat) => {
      storValue += `<div class="emoji"><div class="item"><img src="${dat.emoji}" alt=""></div><small>${dat.name}</small></div>`;
    })
    emijiItems.innerHTML = storValue;
  })
}


searchEmoji();
enterTheEmoji();


/***** SERVICE_DETAILS_BUTTON *****/

let det = document.querySelector(".det");

let moreBtn = document.querySelector(".more_btn");

let val = 0;


moreBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (val == 0) {
    det.textContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda numquam sit mollitia! Distinctio earum natus non corrupti culpa hic eos, blanditiis magnam officia alias aliquam explicabo error. Adipisci voluptatibus maiores magnam asperiores accusamus reiciendis. nihil nostrum, ad corrupti?";
    moreBtn.textContent = "Short";
    val = 1;
  } 
  else {
    det.textContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda numquam sit mollitia! Distinctio earum natus non corrupti culpa hic eos, blanditiis magnam officia alias aliquam explicabo error.";
    val = 0;
    moreBtn.textContent = "More";
  }
})


/***** ANIMATED_MENU *****/

function menu() {

  let service = document.querySelectorAll(".service");
  
  let serIcon = document.querySelectorAll(".ser_icon");
  
  
  service.forEach((val) => {
    val.addEventListener("mouseenter", () => {
      console.log(val)
      val.childNodes[2].style.opacity = "1";
      
      
    });
    
    val.addEventListener("mouseleave", () => {
      val.childNodes[2].style.opacity = "0";
    });
    
    val.addEventListener("mousemove", (move) => {
      val.childNodes[2].style.left = move.x + "px";
    });
    
    
  })
}

menu();


/***** PROFILE_SECTION *****/

function profile() {

  let header = document.querySelector(".header");
  
  let menu_header = document.querySelector(".menu_header");
  
  let notification_menu = document.querySelector(".notification_menu");
  
  let search_value = document.querySelector(".search_value");
    
  let blur = document.querySelector(".blur");
    
  let profile = document.querySelector(".profile");
  
  let profile_btn = document.querySelector(".profile_btn");
  
  let back_profile_home = document.querySelector(".back_profile_home");
    
  profile_btn.addEventListener("click", (e) => {
    e.preventDefault();
    header.style.display = "none";
    menu_header.style.display = "none";
    notification_menu.style.display = "none";
    search_value.style.display = "none";
    blur.style.display = "none";
    profile.style.display = "block";
  })
  
  back_profile_home.addEventListener("click", () => {
    header.style.display = "flex";
    blur.style.display = "block";
    profile.style.display = "none";
  })

}

profile();


/***** PROFILE_EDIT_SECTION *****/

let pName = document.querySelector(".p_name");

let pEmali = document.querySelector(".p_email");

let pPassword = document.querySelector(".p_password");

let updateBtn = document.querySelector(".update_btn");

let removeBtn = document.querySelector(".remove_btn");

let editIcon1 = document.querySelector(".edit_icon1");

let editIcon2 = document.querySelector(".edit_icon2");

let editIcon3 = document.querySelector(".edit_icon3");


editIcon1.addEventListener("click", () => {
  pName.removeAttribute("disabled");
});

editIcon2.addEventListener("click", () => {
  pEmali.removeAttribute("disabled");
});

editIcon3.addEventListener("click", () => {
  pPassword.removeAttribute("disabled");
});
  
updateBtn.addEventListener("click", () => {
  pName.setAttribute("disabled", "true");
  pEmali.setAttribute("disabled", "true");
  pPassword.setAttribute("disabled", "true");
  alert("Update Successfully..")
});
  
removeBtn.addEventListener("click", () => {
  pName.value = "";
  pEmali.value = "";
  pPassword.value = "";
  confirm("Are you sure ?")
});
  

/***** SETTING_SECTION *****/

  
  

/***** LOGIN_FORM *****/

function login() {
  
  let header = document.querySelector(".header");
  
  let blur = document.querySelector(".blur");
  
  let login = document.querySelector(".login");
  
  let menu_header = document.querySelector(".menu_header");
  
  let notification_menu = document.querySelector(".notification_menu");
  
  let search_value = document.querySelector(".search_value");
    
  let profile = document.querySelector(".profile");
  
  let profile_btn = document.querySelector(".profile_btn");
  
  let back_profile_home = document.querySelector(".back_profile_home");
  
  let loginBtn = document.querySelector(".login_btn");
  
  
  loginBtn.addEventListener("click", (e) => {
    e.preventDefault();
    header.style.display = "none";
    menu_header.style.display = "none";
    notification_menu.style.display = "none";
    search_value.style.display = "none";
    blur.style.display = "none";
    login.style.display = "block";
  })
}

login();

let sign_in_btn = document.querySelector("#sign-in-btn");

let sign_up_btn = document.querySelector("#sign-up-btn");

let container = document.querySelector(".container");

let form1 = document.querySelector("#form1");

let form2 = document.querySelector("#form2");

let t1 = document.querySelector(".t1");

let b1 = document.querySelector(".b1");


sign_up_btn.addEventListener("click", (e) => {
  e.preventDefault();
  let contentValue = document.querySelector(".content_value");
  
  container.classList.add("sign-up-mode");
  forgetPasswordForm.style.display = "none";
  form2.style.display = "block";
  form2.style.marginTop = "150px";
  contentValue.style.marginTop = "-600px";
});

sign_in_btn.addEventListener("click", (e) => {
  e.preventDefault();
  
  container.classList.remove("sign-up-mode");
  form1.style.display = "block";
  form1.style.top = "450px";
  t1.style.textAlign = "center";
  b1.style.left = "60px";
});


let signup = document.querySelector("#signup");

let signin = document.querySelector("#signin");

let forget = document.querySelector(".forget");

let forgetPasswordForm = document.querySelector(".forget_password_form");

let submit = document.querySelector(".submit");

let send = document.querySelector(".send");

signup.onclick =(e) => {
  e.preventDefault();
  let header = document.querySelector(".header");
  
  let blur = document.querySelector(".blur");
  
  let login = document.querySelector(".login");
  
  let e1 = document.querySelector(".e1");
  
  let p1 = document.querySelector(".p1");
  
  
  login.style.display = "none";
  header.style.display = "flex";
  blur.style.display = "block";
  
  e1.value = "";
  p1.value = "";
}

signin.onclick = (e) => {
  e.preventDefault();
  let profileValue1 = document.querySelector(".profile_value1");
  
  let profileValue2 = document.querySelector(".profile_value2");
  
  let profileValue3 = document.querySelector(".profile_value3");
  
  
  container.classList.remove("sign-up-mode");
  form2.style.display = "none";
  form1.style.display = "block";
  form1.style.top = "350px";
  t1.style.textAlign = "center";
  b1.style.left = "90px";
  
  let name = pName.value = profileValue1.value;
  let email = pEmali.value = profileValue2.value;
  let password = pPassword.value = profileValue3.value;
  
  localStorage.setItem("username :", name)
  localStorage.setItem("email: ", email)
  localStorage.setItem("password:",password)
  
  profileValue1.value = "";
  profileValue2.value = "";
  profileValue3.value = "";
}

forget.onclick = (e) =>{
  e.preventDefault();
  
  forgetPasswordForm.style.display= "flex";
  form1.style.display = "none";
  forgetPasswordForm.style.marginTop = "50px";
  forgetPasswordForm.style.justifyContent = "center";
}

submit.onclick = (e) => {
  e.preventDefault();
  let e2 = document.querySelector(".e2");
  
  let c1 = document.querySelector(".c1");
  
  let p2 = document.querySelector(".p2");
  
  forgetPasswordForm.style.display = "none";
  form1.style.display = "flex";
  form1.style.justifyContent = "center";
  form1.style.marginTop = "-180px";

  e2.value = "";
  c1.value = "";
  p2.value = "";
}

send.onclick = (e) =>{
  
  e.preventDefault();
  function sendOTO() {
    let signupBtn = document.querySelector(".signupBtn");
  
    let email = document.querySelector(".email");
  
    let otpCode = Math.floor(Math.random() * 10000);
  
    let emailBody = "Your varefication code is: " + otpCode;
  
  
      Email.send({
        SecureToken: "1afc78e9-597a-4b8c-beb3-8ea0f01e61fc", //"ca8d3817-117a-46f2-94ad-60bdbaab9fb4",
        To: email.value,
        From: "ferdousibegum3636@gmail.com", //"itsmostafiz127@gmail.com",
        Subject: "Varefication code",
        Body: emailBody
      }).then(
        message => {
          alert("Check your email !");
        }
      );
    }
}

