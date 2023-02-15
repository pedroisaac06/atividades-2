var clubedefut = 18

switch (true){
    case clubedefut > 5 && clubedefut< 11:
        console.log ("CATEGORIA INFANTIL");
        break
    case clubedefut>=11 && clubedefut<=15:
        console.log ("CATEGORIA JUVENIL");
        break
    case clubedefut>=16 && clubedefut<=20:
        console.log("CATEGORIA JUNIOR");
        break
    case clubedefut>=21 && clubedefut <=25:
        console.log ("CATEGORIA PROFISSIONAL");
        break
     default:
        console.log("CATEGORIA INEXISTENTE");
}