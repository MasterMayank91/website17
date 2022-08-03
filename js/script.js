/*

*/
try
{
    let all_link = document.querySelectorAll("#header a");
    
    let close_btn = document.getElementById('close_btn');
    
    let nav = document.getElementById('nav');
    
    let btn = document.getElementById('btn');
    
    let dot = document.querySelectorAll(" #dot > a");

    var count = 0;

    // contorl navbar open and close function 
    
    for (let i = 0; i < all_link.length; i++)
    {
        all_link[i].onclick = navbar_contorl;        
    }
    function navbar_contorl() 
    {
        if(count%2==0)
        {
            nav.style.left = `0`;
            close_btn.innerHTML = " X ";
        }
        else
        {
            nav.style.left = `150vh`;
            close_btn.innerHTML = " &#9776; ";
        }
        count++;
    }

    btn.onclick = function()
    {
        if(confirm("Can You Love Chandigah [Yes/No] :"))
        {
            alert("Thanks DEAR :)");
        }
        else
        {
            alert("PUT DICK INTO YOUR ANAL ilii ");
        }
    }

    dot[1].onclick = function()
    {
    }
}
catch(error)
{
    alert(error.message());
}