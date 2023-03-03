function Transformar(grau) {
    const celsiusexiste = grau.toUpperCase().includes('C');
    const fahrenhetexiste = grau.toUpperCase().includes('F');


    //FLUXO DE ERRO
    if(!celsiusexiste && !fahrenhetexiste) {
        throw new Error('Grau não identificado.')
    }

    //F PARA -> C
    let grauupdate = Number(grau.toUpperCase().replace("F",""));
    let formula = (fahrenhet) => (fahrenhet-32) *5/9
    let grauc = 'C';


    //C PARA -> F
    if(celsiusexiste) { 
        grauupdate = Number(grau.toUpperCase().replace("C",""));
        formula = celsius => celsius * 9/5 + 32
        grauc = 'F';

    }

    return formula(grauupdate) + grauc
}

try {

    console.log(Transformar('50F'))
    console.log(Transformar('50C'))
    console.log(Transformar('50Z'))


} catch (error) {

    console.log(error.message)

}