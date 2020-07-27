let elm = document.getElementById("can");
let con = elm.getContext("2d");

const screen_w = 800;
const screen_h = 500;

elm.width  = screen_w;
elm.height = screen_h;
elm.style.backgroundColor = "red";

let x = 100;
let y = 200;
let sx = 20;
let sy = 10;
let vx = 2;
let vy = 2;

setInterval ( main , 1000/60 );

function main()
{
    con.clearRect( 0,0 , screen_w,screen_h );
    x+=vx;
    y+=vy;
    con.fillRect( x , y , sx , sy );
    if( x<=0 || x+sx>screen_w){
        vx*=-1;
    }
    if( y<=0 || y+sy>screen_h){
        vy*=-1;
    }
}
