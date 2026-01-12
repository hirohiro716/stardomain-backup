// ==UserScript==
// @name         Star Domain Backup
// @namespace    https://github.com/hirohiro716/
// @version      1.0
// @description  Add the ability to backup DNS records.
// @author       hiro
// @match        https://secure.netowl.jp/starapanel/stardomain/domain/dns/index*
// @icon         https://secure.netowl.jp/starapanel/assets/stardomain/img/favicon.ico
// @grant        none
// @updateURL    https://github.com/hirohiro716/stardomain-backup/raw/main/stardomain-backup.user.js
// @downloadURL  https://github.com/hirohiro716/stardomain-backup/raw/main/stardomain-backup.user.js
// ==/UserScript==

const backup = () => {
    let lines = "ホスト名,種別,内容,TTL,優先度";
    const tableRows = window.document.querySelectorAll("table tbody tr");
    for (const tableRow of tableRows) {
        const tableDatas = tableRow.querySelectorAll("td");
        if (tableDatas.length >= 5) {
            let line = "";
            for (let index = 0; index < 5; index++) {
                const tableData = tableDatas[index];
                if (line.length > 0) {
                    line += ",";
                }
                line += "\"";
                line += tableData.textContent;
                line += "\"";
            }
            lines += "\n";
            lines += line;
        }
    }
    let filename = "backup";
    const definitionLists = window.document.querySelectorAll("dl");
    for (const definitionList of definitionLists) {
        const definitionTerm = definitionList.querySelector("dt");
        if (definitionTerm.textContent === "ドメイン") {
            const definitionDescription = window.document.querySelector("dd");
            filename += "(";
            filename += definitionDescription.textContent;
            filename += ")"
            break;
        }
    }
    filename += ".csv";
    let blob = new Blob([lines], {type: "text/csv"});
    let link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.download = filename;
    link.click();
}
window.addEventListener("load", () => {
    const div = window.document.querySelector(".btnWrap");
    const button = window.document.createElement("button");
    button.textContent = "DNSレコードのバックアップ";
    button.type = "button";
    button.classList.add("btn", "btn--outline", "btn--auto");
    button.addEventListener("click", () => {
        backup();
    });
    div.append(button);
});
