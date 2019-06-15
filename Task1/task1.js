function deleteSymbol(input) {
    var signs = ["?", "!", ":", ";" ,",", ".", " "];
    var str = input.toLowerCase();
    var arr = str.split(' ');
    var Symbols = {};

    arr.forEach(function(elem) {
        var word = elem.split('');
        for (var i = 0; i < word.length; i++)
        {
            if(signs.indexOf(word[i]) == -1 && -1 != word.indexOf(word[i], i + 1)){
                Symbols[word[i]] = 1;
                /*document.writeln( "****");
                document.writeln( `${word[i]}<br/>`);*/
            }
        };
    });
    arr =str.split('');
    var result = arr.filter(function(elem){
        return !Symbols[elem] && signs.indexOf(elem) == -1;
    });

return result;
}
      
var str = "У: попа была, собака";
var res = deleteSymbol(str);
for (var elem in res)
{
    document.writeln( `${res[elem]}<br/>`);
}
