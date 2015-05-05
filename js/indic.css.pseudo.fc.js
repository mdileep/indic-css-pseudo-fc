function indicfix(c,ln)
{

//try{
       SetLang(ln);
        var e=$("."+c);
        var f= FirstChar(e.text())[0]; if(f==""){return;} 
        e.html( e.text().replace(f,"<span class='indicFirstChar'>"+f+"</span>"));
        e.removeClass(c);
        
//    }catch(e){}

}

