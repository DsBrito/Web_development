/*
* 08) Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém
* registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o
* mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2
* pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um
* vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior
* jogo. (Número do pior jogo).
* Obs.: O primeiro jogo não conta como novo recorde do melhor.
* Exemplo:
* String: “10 20 20 8 25 3 0 30 1”
* Retorno: [3, 7] (Significa que ele bateu três vezes seu recorde de melhor pontuação e a pior pontuação
* aconteceu no sétimo jogo.)
*/


function game_record(list_points) {
    let vet_points = list_points.split(", ");

    let breaking_records = 0;
    let worse_game = 1;
    let biggest_point = vet_points[0];
    let minor_point = vet_points[0];

    for (let i = 1; i < vet_points.length; i++) {
        if (vet_points[i] > biggest_point) {
            biggest_point = vet_points[i];
            breaking_records++;
        } else if (vet_points[i] < minor_point) {
            minor_point = vet_points[i];
            worse_game = i + 1;
        };
    };
    return [breaking_records, worse_game];
}


let list_points = "30, 40, 20, 4, 51, 25, 42, 38, 56, 0";

console.log("[breaking_records, worse_game]");
console.log(game_record(list_points));
