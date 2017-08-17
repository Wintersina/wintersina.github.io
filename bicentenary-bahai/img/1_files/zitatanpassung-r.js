window.onload=function() {

        var img =        document.getElementById('image');
        var quote =      document.getElementById('zitat-r');
        var beschreibung =      document.getElementById('imgDescription');
        var zurueck =      document.getElementById('back');
        var weiter =      document.getElementById('forward');
        var bg_left =      document.getElementById('prev-img-bg-left');
        var bg_right =      document.getElementById('prev-img-bg-right');
        var xclose =        document.getElementById('close');
//      var xclosetip =        document.getElementById('closetip');

        var viewportwidth =      window.innerWidth;
        var viewportheight  =    window.innerHeight;

        var box = parseInt(quote.style.width,10);
        var box2;

        var xheight = parseInt(quote.style.marginTop,10);

        var d_width =    img.width;
        var d_height =   img.height;
        var n_width =    img.naturalWidth;



        var margin600;

        beschreibung.style.left = (viewportwidth-d_width)/2;
        beschreibung.style.bottom = (viewportheight-d_height)/2;
        beschreibung.style.width = d_width;

        zurueck.style.left = (viewportwidth-d_width)/2;
        zurueck.style.top = (viewportheight-d_height)/2;
        zurueck.style.bottom = (viewportheight-d_height)/2;
        zurueck.style.width = (d_width)/2;

        weiter.style.right = (viewportwidth-d_width)/2;
        weiter.style.top = (viewportheight-d_height)/2;
        weiter.style.bottom = (viewportheight-d_height)/2;
        weiter.style.width = (d_width)/2;

        box2 = (box*2)-20;


// Den Abstand der Textbox zum oberen Rand setzen
if (xheight !== xheight || xheight !== " ") {
xheight = 70;
}


if (viewportheight > 618 ) {
         margin600 = (viewportheight-600-9-9)/2;
} else {
         margin600 = 0;
         }


if (viewportwidth > (d_width+box2) ) {
        quote.style.opacity="0.9";
        quote.style.marginLeft = (d_width/2)+9;
        quote.style.left= "50%";
        quote.style.position="fixed";
        quote.style.marginTop = xheight+margin600;
        quote.style.borderBottomRightRadius = '2px';
        quote.style.borderTopRightRadius = '2px';

        xclose.style.opacity="0.1";
        xclose.style.marginLeft = (d_width/2)-11+box;
        xclose.style.left= "50%";
        xclose.style.position="fixed";
        xclose.style.borderBottomLeftRadius = '2px';
        xclose.style.marginTop = xheight+margin600;

//        xclosetip.style.opacity="0.15";
//        xclosetip.style.marginLeft = (d_width/2)-11-40+box;
//        xclosetip.style.left= "50%";
//        xclosetip.style.position="fixed";
//        xclosetip.style.marginTop = xheight+margin600-3;

} else {
        quote.style.opacity="0.90";
        quote.style.borderBottomLeftRadius = '1px';
        quote.style.borderTopLeftRadius = '1px';
        quote.style.marginTop = xheight+margin600;

        xclose.style.opacity="0.12";
        xclose.style.borderBottomLeftRadius = '2px';
        xclose.style.marginTop = xheight+margin600;

//        xclosetip.style.opacity="0.15";
//        xclosetip.style.marginTop = xheight+margin600-2;
}


if (viewportwidth < d_width+box ) {

        quote.style.display="none";
        xclose.style.display="none";

}


if (viewportwidth < n_width+68 ) {

        zurueck.style.marginLeft= '9px';
        bg_left.style.marginLeft= '10px';

        weiter.style.marginRight= '-3px';
        bg_right.style.marginRight= '-15px';


}


if (viewportheight < quote.clientHeight+47 ) {

        quote.style.display="none";
        xclose.style.display="none";
//        xclosetip.style.display="none";

}


if (viewportheight < quote.clientHeight+125 ) {

        quote.style.marginTop="26px";
        xclose.style.marginTop="26px";
//        xclosetip.style.marginTop="24px";

}



};