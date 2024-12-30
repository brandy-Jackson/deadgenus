 
 var a = 0;
 var b = 0;


 const xhPrefx = "https://xhamster.com/embed/";
 const xvPrx =  "https://www.xvideos.com/embedframe/";

// const xvidPrefx = "";
// ---------------- One Array of Video IDs per web source Provider -----------

  // ---------------- xhamster ---------------
   const xham_ID = ["12336139",
                    "11232311",
                    "9586677",
                    "10148243"
                  ];

  // ---------------- xvideos ---------------
  const xvid_ID = ["55923167",
                   "42083949"
                  ];
 

//const Arrays_Array = ["xham_ID["+a+"]":xham_ID];

 
  
  function myFunction() {
    var x = document.getElementById("xh").value;
    var y = 
   // document.getElementById("demo").innerHTML = "You selected: " + x;
    document.getElementById("display").src = "https://xhamster.com/embed/" + x;
  };

                
//function getwebvid(webUrls[a]){
//   document.getElementById("mainFrame").src="https://xhamster.com/embed/"+"webURLs[2]";            
//               };