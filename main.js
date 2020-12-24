
if(document.URL.includes("stuinfosys")){
    $('input[name="UserName"]')[0].type="text"
}else if(document.URL.includes("moodle")){
    let newScript = document.createElement('script');
    newScript.innerHTML='$("input").off();\n';
    newScript.innerHTML += `$('input[name="username"]')[0].value = $('input[name="username"]')[0].value.includes("*") ? "" : $('input[name="username"]')[0].value;`
    document.head.appendChild(newScript);
}
console.log("Meoww~");