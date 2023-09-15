import ytdl from 'ytdl-core';
import fs from 'fs';

export const download = (videoid) => {
    const videoURL = "https://www.youtube.com/shorts/" + videoid
    console.log("Realizando o download do vídeo:", videoid)

    // Utilizando a biblioteca de download
    ytdl(videoURL, {quality: "lowestaudio", filter: "audioonly"})
    .on("info", (info) => {
        const seconds = info.formats[0].approxDurationMs / 1000
        //console.log(seconds)

        // Quando não for uma Shorts informar o erro
        if(seconds > 60) {
            throw new Error("A duração desse vídeo é maior do que 60 segundos.")
        }
    //Quando o video acabar sinalizar que o video acabou
    }).on("end", () => {
        console.log("Download do vídeo finalizado!")
    })
    .on("error", (error) => {
        console.log("Não foi possível fazer o download do vídeo. Detalhes do erro:", error)
    // Salvando vídeo na pasta tmp utilizando o fs:
    }).pipe(fs.createWriteStream("./tmp/audio.mp4"))
}