class movie
{
    constructor(title,studio,rating='PG')
    {
        this.title=title;
        this.studio=studio;
        this.rating=rating;

    this.getPG=function()
    {
        return this.rating='PG';
    }
}
}
var s1=new movie("Spiderman","Marvel");
 console.log(s1.title,s1.studio,s1.rating);

var s2=new movie("Casino Royale","Eon productions","PG13");
 console.log(s2.title,s2.studio,s2.rating);


