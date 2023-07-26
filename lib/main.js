const getLyrics=require("./getLyrics")
const getSong=require("./getSong")
const options={
    apikey: 'QDLxPxwO7Ag2SV83QhhA3du93-R3yM74x-gx_vTQrNbH_2xTAn2sykU1nmnd16DQ',
    title: 'baby',
    artist: 'justin bieber',
    optimizeQuery:true
}
getLyrics(options).then((lyrics)=>console.log(lyrics));
getSong(options).then((song)=>
    console.log(`
    ${song.lyrics}`)
)