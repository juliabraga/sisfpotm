const parser = require("xml2json");
const fs = require("fs");
const moment = require("moment");

moment.locale("pt-br");

let fileInputName = "tabela.xml";
let fileOutputName = "./src/tabela.json";

function getAlbum(track) {
  let index = 2;
  if (track.key.some((k) => k.includes("Album Artist"))) index = index + 1;
  if (track.key.some((k) => k.includes("Composer"))) index = index + 1;
  return track.string[index];
}

async function init() {
  fs.readFile(fileInputName, "utf8", function (err, fileData) {
    const json = parser.toJson(fileData, {
      object: true,
      reversible: false,
      coerce: false,
      sanitize: false,
      trim: true,
      arrayNotation: false,
      alternateTextNode: false,
    });

    const tracks = json.plist.dict.dict.dict.map((track) => ({
      interprete: track.string[1],
      tempo: new Date(+track.integer[2]).toISOString().slice(14, 19),
      album: getAlbum(track),
      dataInclusao: moment(track.date[1]).format("DD/MM/YYYY"),
    }));

    const data = JSON.stringify(tracks);
    fs.writeFile(fileOutputName, data, (err) => {
      if (err) throw err;
      console.log("xml parsed successful");
    });
  });
}

init();
