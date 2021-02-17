let newScript = document.createElement('script');
newScript.innerHTML='$("input").off();\n';
newScript.innerHTML += `$('input[name="username"]')[0].value = $('input[name="username"]')[0].value.includes("*") ? "" : $('input[name="username"]')[0].value;`
document.head.appendChild(newScript);
console.log("Meoww~");