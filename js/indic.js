var IgnoreSet = ""; 
var AchchuSet="";
var HalluSet="";
var NumberSet="";
var PolluSet= "";
var SmallAchchuSet="";
var SpecialFinishSet=""; 
var SmallFinishingSet="";
var FinishingSet="";
var NeutralSet="";


String.prototype.trim = function() {return this.replace(/^\s+|\s+$/g,"");} 
function Contains(MatchString,Char)
{
    var ret = MatchString.indexOf(Char);

    if (ret == -1)
	{			
		return false;
	}
	else
	{
	    return true;
	}
	alert(ret);

}

function  IsSpecialFinishing(Char)
{
   
        var ret = false;
        var  MatchString = SpecialFinishSet;
        ret = Contains(MatchString,Char);
        return ret;
    
    

}
    

  function  IsLongFinishing(Char)
{
   
    {
        var ret = false;
        if (!IsSpecialFinishing(Char) && !IsSmallFinishing(Char) && IsFinishing(Char)) { ret = true; }
        return ret;
    
   }
}
function  IsPollu(Char)
{
   
    {
        var ret = false;
        var  MatchString = PolluSet;
        ret = Contains(MatchString,Char);
        return ret;
    }
}
function  IsSmallFinishing(Char)
{
  
    { 
     var ret = false;
    var  MatchString = SmallFinishingSet;
    ret = Contains(MatchString,Char);
    return ret;
   }
}

    
    
  function  IsNeutral(Char)
{

    {
        var ret = false;
        var  MatchString = NeutralSet;
        ret = Contains(MatchString,Char);
        return ret;
    }
}
function  IsFinishing(Char)
{
    
    {
        var ret = false;
        var  MatchString = FinishingSet;
        ret = Contains(MatchString,Char);
        return ret;
    }
}
function  IsHallu(Char)
{

    {
        var ret = false;
        var  MatchString = HalluSet;
        ret = Contains(MatchString,Char);
        return ret;
    }
}
function  IsAchchu(Char)
{
    {
            var ret = false;
            var  MatchString =AchchuSet;
            ret = Contains(MatchString,Char);
            return ret;
    }    
    
}
function IsSmallAchchu(Char)
{
    
    {
        var ret = false;
        var  MatchString =SmallAchchuSet;
        ret = Contains(MatchString,Char);
        return ret;
    }
}
function  IsLongAchchu(Char)
{
    {
        var ret = false;
        if (IsAchchu(Char)) { if (!IsSmallAchchu(Char)) { ret = true; } }
        return ret;
    }
}

 function  CharNature(Char)
{
  
    {
        var ret = "x";  
        if (CanIgonre(Char)) { ret = "y";  return ret;} 
        if (IsSmallAchchu(Char)) { ret = "a";   return ret; }
        if (IsLongAchchu(Char)) { ret = "e";  return ret;}
        if (IsHallu(Char)) { ret = "h";  return ret;}
        if (IsPollu(Char)) { ret = "p";  return ret;}
        if (IsSpecialFinishing(Char)) { ret = "o"; return ret; }
        if (IsSmallFinishing(Char)) { ret = "s"; return ret; }
        if (IsLongFinishing(Char)) { ret = "l";  return ret;}
        if (IsNeutral(Char)) { ret = "z";  return ret;}
        if (IsNumber(Char)) { ret = "n";  return ret;}  
        return ret;
    }
}
function  IsNumber(Char)
{
    
    {
        
            var ret = false;
            var  MatchString = NumberSet;
            ret = Contains(MatchString,Char);
            return ret;
        
    }
}
function  IsStranger(Char)
{
    {return (CharNature(Char)=="x")? true:false;}
}

 function  CanIgonre(Char)
{
    
          
          {
            var ret = false;
            var  MatchString = IgnoreSet;
            ret = Contains(MatchString,Char);
            return ret;
        
          }

}
function  IsValid(Char) { { return !IsStranger(Char); } }



function IsPolluEnder(Str) 
{ 
    try
    {
        var tStr=Str.trim();  if(tStr.length==0){return false;}
        return  Contains(PolluSet,tStr.charAt(tStr.length-1));

    }
    catch(err) { return false; }

}

 function IsCompoundChar( _ic)
{
    
    {
        try
        {
            var c = 0;
            for (var i = 0; i < _ic.length; i++)
            {
                var Chr = _ic.charAt(i);

                if (IsHallu(Chr)) { c++; }

                if (c > 1)
                {
                    return true;
                }
            }

        }
        catch(err)
        {

        }
        return false;
    }
}


  function CanRelease(CN,PN)
    {
        var res = false;
        if (CN == "a" || CN == "e")//a A e E
        {
            res = true;
        }

        if (CN == "s" || CN == "l") //kaa ka ki kI
        {
            res = true;
        }
        if (CN == "o") { res = true; }
        if (CN == "p") { res = false; }
        if (CN == "h" && PN=="h")
        {
            res = true;
        }
        if (PN == "y" || PN == "z" || PN == "n" || PN == "x") { res = true; }
        if (CN == "y"  || CN=="z" || CN=="n" || CN=="x") { res = true; }
        return res;
    }



  function IsImmRelease(CN)
    {

        var res = false;
        if (CN == "h")
        {
            res = true;
        }
        if (CN == "x")
        {
            res = true;
        }

        if (CN == "p") { res = false; }
        
        return res;
    }
    
   function FirstChar(s)
{

       var IA = new Array();
        try
        {
            var retVal = new Array();
            var  cnt = 0;
            var lockedString = "";

            var lastChar = ' ';
            var lastCharNature = "a";
            var released = false;
            for (var i = 0; i<s.length; i++)
            {
   
                released = false;
                var currChar = s.charAt(i);
                var currCharNature = CharNature(currChar);
                var CanIRelase = CanRelease(currCharNature, lastCharNature);

                if (CanIRelase)
                {
                    var CanImmRelase = IsImmRelease(currCharNature);
                    if (CanImmRelase)
                    {
                        retVal[cnt++] = lockedString;
                        lockedString = currChar;
                    }
                    else
                    {
                       
                        if (IsSpecialFinishing(currChar))
                        {
                            if (lockedString == "")
                            {
                                try
                                {
                                    retVal[cnt - 1] = retVal[cnt - 1] + lockedString + currChar;
                                }
                                catch(err) 
                                {
                                    //throw new Exception("Invalid TE Char ");
                                }
                                
                            }
                            else
                            {
                                retVal[cnt++] = lockedString + currChar;
                            }
                        }
                        else
                        {

                            if (!CanIgonre(currChar))
                            {
                                lockedString = lockedString + currChar;
                                retVal[cnt++] = lockedString; 
                                i=s.length+1;//Smart Fix  for   getting fist Char
                            }
                            else
                            {
                                retVal[cnt++] = lockedString;
                                retVal[cnt++] = currChar;
                                i=s.length+1;//Smart Fix  for   getting fist Char
                            }
                        }
                        lockedString = "";
                        released = true;
                    }

                   lastChar = ' ';
                   lastCharNature = currCharNature;
                    

                }
                else
                {
                    lastChar = currChar;
                    lockedString = lockedString + currChar;
                    lastCharNature = currCharNature;
                }   

            }
            
            if (!released) { retVal[cnt++] = lockedString; }
            
            IA = new Array();
            for (var i = 0; i < cnt; i++)
            {

                IA[i] =retVal[i];

            }
         

        }
         catch(err)
        { 
        
        }
        return IA;

    }
    
    
    function Split(s)
{

       var IA = new Array();
        try
        {
            var retVal = new Array();
            var  cnt = 0;
            var lockedString = "";

            var lastChar = ' ';
            var lastCharNature = "a";
            var released = false;
            for (var i = 0; i<s.length; i++)
            {
   
                released = false;
                var currChar = s.charAt(i);
                var currCharNature = CharNature(currChar);
                var CanIRelase = CanRelease(currCharNature, lastCharNature);

                if (CanIRelase)
                {
                    var CanImmRelase = IsImmRelease(currCharNature);
                    if (CanImmRelase)
                    {
                        retVal[cnt++] = lockedString;
                        lockedString = currChar;
                    }
                    else
                    {
                       
                        if (IsSpecialFinishing(currChar))
                        {
                            if (lockedString == "")
                            {
                                try
                                {
                                    retVal[cnt - 1] = retVal[cnt - 1] + lockedString + currChar;
                                }
                                catch(err) 
                                {
                                    //throw new Exception("Invalid TE Char ");
                                }
                                
                            }
                            else
                            {
                                retVal[cnt++] = lockedString + currChar;
                            }
                        }
                        else
                        {

                            if (!CanIgonre(currChar))
                            {
                                lockedString = lockedString + currChar;
                                retVal[cnt++] = lockedString;
                            }
                            else
                            {
                                retVal[cnt++] = lockedString;
                                retVal[cnt++] = currChar;
                            }
                        }
                        lockedString = "";
                        released = true;
                    }

                   lastChar = ' ';
                   lastCharNature = currCharNature;
                    

                }
                else
                {
                    lastChar = currChar;
                    lockedString = lockedString + currChar;
                    lastCharNature = currCharNature;
                }   

            }
            
            if (!released) { retVal[cnt++] = lockedString; }
            
            IA = new Array();
            for (var i = 0; i < cnt; i++)
            {

                IA[i] =retVal[i];

            }
         

        }
         catch(err)
        { 
        
        }
        return IA;

    }
    function SetLang(lang)
    {
        
        if(lang=="te")
        {
             IgnoreSet = " \n"; 
             AchchuSet="అఆఇఈఉఊఋఎఏఌఐఒఓఔౠ";
             HalluSet="కఖగఘ" +
                 "ఙచఛజఝఞ" +
                 "టఠడఢణ" +
                 "తథదధన" +
                 "పఫబభమ" +
                 "యరఱలళవ" +
                 "శషసహ";
             NumberSet="౦౧౨౩౪౫౬౭౮౯";
             PolluSet= "్";
             SmallAchchuSet="అఇఉఋఎఌఒ";
             SpecialFinishSet="ంః"; 
             SmallFinishingSet="ిుృెొౌ";
             FinishingSet="ాిీుూృౄెేైొోౌంః";
             NeutralSet="ఁ";
        }
        
          if(lang=="hi")
        {
             IgnoreSet = " \n"; 
             AchchuSet="अआइईउऊऋऎएऌऐऒओऔॠ";
             HalluSet="कखगघङचछजझञटठडढणतथदधनपफबभमयरऱलळवशषसह";
             NumberSet="०१२३४५६७८९ ";
             PolluSet= "् ";
             SmallAchchuSet="अइउऋऎऌऒ ";
             SpecialFinishSet="ंः "; 
             SmallFinishingSet="िुृॆॊौ ";
             FinishingSet="ािीुूृॄॆेैॊोौंः ";
             NeutralSet="ँ";
        }
        
    }