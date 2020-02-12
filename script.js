var conti;
var movie= ' is a good Choice';

var c;



var yourmovie = prompt("enter your favorite movie type; crime, drama or comedy");

function asking()
{   var a;
     a = prompt("enter your favorite movie type; crime, drama or comedy");
     return a;

}

while (yourmovie !== "crime" && yourmovie !== "drama" && yourmovie !== "comedy")
{
   
    yourmovie= asking();
}

// var yourmovie = prompt("enter your favorite movie type; crime, drama or comedy");


document.write('<span>'+yourmovie+'</span>');
document.write('<span>'+movie+'</span>');


function GiveSug(YourM)
{
    var sugg;
if (YourM== 'crime' )
{
    document.write( " !  watch Seven is a good crime movie" );
    
    return YourM;


}
    else if (YourM == 'drama')
    {   
        document.write( " !   watch Wonder is a good drama movie" );
        return YourM;

    }
    else if (YourM== 'comedy' )
    {   
        document.write( " !  watch Jumanji is a good comedy movie" );
        return YourM;

    }
    else {
        document.write( " Wronge input" );

    }
}

    GiveSug(yourmovie);



   


