var ahmed=setInterval(function(){
    if(myid!=null){
        clearInterval(ahmed);
$("#users .uzr:contains('أَحمد')").addClass('ahm');             
$("#users .uzr.ahm span.uhash, #users .uzr.ahm img.co,#users .uzr.ahm .ustat,.fl.mini.u-co").hide();
    }
}, 10000);

$("style").last().append(`
#users .uzr.ahm .fitimg.u-pic {
  border-radius: 0px 8px 8px 0px!important;
}
#users .uzr.ahm {
    background-color:#E2E2E2;
}
#users .uzr.ahm .u-topic {
  margin-left: 5px;
}

`);

