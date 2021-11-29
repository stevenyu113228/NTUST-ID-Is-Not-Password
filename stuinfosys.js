document.addEventListener('DOMContentLoaded', (event) => {
    let tmp = document.body.innerHTML;
    document.body.innerHTML = "meow= =";
    tmp = tmp.replace(/(name="UserName".+type=")(password)/g,
    `$1text`);    
    document.body.innerHTML = tmp;

    let newScript = document.createElement('script');
    newScript.innerHTML='DoLoad();';
    document.head.appendChild(newScript);
});

console.log("Meoww~");
