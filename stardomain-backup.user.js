// ==UserScript==
// @name         Star Domain Backup
// @namespace    https://github.com/hirohiro716/
// @version      1.1
// @description  Add the ability to backup DNS records.
// @author       hiro
// @match        https://secure.netowl.jp/starapanel/stardomain/domain/dns/index*
// @icon         data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgoKPHN2ZwogICB3aWR0aD0iNDgiCiAgIGhlaWdodD0iNDgiCiAgIHZpZXdCb3g9IjAgMCAxMi43IDEyLjciCiAgIHZlcnNpb249IjEuMSIKICAgaWQ9InN2ZzUiCiAgIHhtbDpzcGFjZT0icHJlc2VydmUiCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnMKICAgICBpZD0iZGVmczIiIC8+PGcKICAgICBpZD0ibGF5ZXIxIj48ZwogICAgICAgaWQ9ImcxNzkiCiAgICAgICB0cmFuc2Zvcm09Im1hdHJpeCgwLjQ0ODYxNDk3LDAsMCwwLjQ0ODYxNDk3LDEyLjE1Njg3NSwwLjY0ODg3NjMxKSI+PHBhdGgKICAgICAgICAgc3R5bGU9ImZpbGw6I2ZlYjMwMztzdHJva2Utd2lkdGg6MC4yNjQ1ODMiCiAgICAgICAgIGQ9Im0gLTIzLjM3MDY3MSwyNS40ODM2ODUgYyAtMS41NjU4MjcsLTAuOTcxNzg4IC0xLjU1NDAwNywtMC44NzQxMjIgLTEuNTUyMTAyLC0xMi44MjQ1MDggMC4wMDIyLC0xNC4xODIyODgxIC0wLjU0MzM3MywtMTMuMTY0MTU5NzYgNy4wNjI4MzcsLTEzLjE3ODk2ODQ5IDUuNDY2NzA0LC0wLjAxMDY0NDIgNi44NDE2ODYsMC4yMDE4OTk1OCA5LjUxNjM5ODksMS40NzEwMzI4NCAzLjc3MDc5NCwxLjc4OTIxNjI1IDYuNTg0NTE2LDUuNjEwNzY0MDUgNy4yMzk1NjYxLDkuODMyNjUwNjUgMS4wMDM1MjIyNCw2LjQ2Nzg3MyAtMy4yNTE0Mjc1LDEzLjAyNjA0NyAtOS41MTE1NjQsMTQuNjYwMjIyIC0yLjQ4OTcxOCwwLjY0OTkyNSAtMTEuNzI1NTA5LDAuNjc4NTggLTEyLjc1NTEzNiwwLjAzOTU3IHogbSAxMy4wNzkzMDMsLTIuNTI5NDkgQyAtMy42MDYwMDA2LDE5LjM5MDkzMiAtMi4wMjQwOTY2LDEwLjQ1NTM3NCAtNy4xMTI3ODI3LDQuOTk5NjM0NSAtOC43MjI5ODQsMy4yNzMyODU5IC05LjkzNDM4NjcsMi41MDUyNTg5IC0xMS45MTYyMzEsMS45NTQyNTY5IGMgLTMuNTU5NzY4LC0wLjk4OTcwMzU3IC02LjUwMTU2MiwwLjYyNjkwMTcgLTYuNDkxMTA3LDMuNTY3MDYwMiAwLjAwNzMsMi4wNTk2MjU1IDAuMjc5NzE3LDIuNDI2ODU1OCA1LjYxOTE2NSw3LjU3NTU1NzkgMi43Mzg1NzEsMi42NDA3MzggMy4xNjk5NDQ5LDMuMjkyMDQ2IDMuMzg1NDI5NSw1LjExMTQ5NiAwLjE4NzI3MjEsMS41ODEyMDggLTAuMzA1ODUzMSwyLjgwMTU2MiAtMS43NzY5NjA1LDQuMzk3NTI2IC0wLjYxMTcxNCwwLjY2MzYzMyAtMS4wMjQ0MTMsMS4yMDY2MDMgLTAuOTE3MTA4LDEuMjA2NjAzIDAuMTA3MzA0LDAgMC45MTk3NTQsLTAuMzg2MjM4IDEuODA1NDQ0LC0wLjg1ODMwNSB6IG0gLTcuNDc3ODE4LC0xLjUxMzc3MiBjIDAuNTQ0ODM2LDAuNDMxNTE3IDEuMDU3NDkyLDAuNzg0NTc3IDEuMTM5MjM2LDAuNzg0NTc3IDAuMDgxNzUsMCAtMC4wMjQ2OCwtMC40OTEyMiAtMC4yMzY1MTIsLTEuMDkxNTk5IC0wLjUzMjExNywtMS41MDgxODEgLTAuNTA4ODYsLTEuNjAwMTU1IDAuNTkzNjk0LC0yLjM0Nzk4NCBsIDAuOTc1MjE2LC0wLjY2MTQ1OSAtMS4yODY0NTIsLTAuMTMyMjkxIGMgLTEuMjczNzM0LC0wLjEzMDk4NSAtMS4yOTA5MzIsLTAuMTQ1MzcgLTEuNzM5NjQxLC0xLjQ1NTIwOSBsIC0wLjQ1MzE5LC0xLjMyMjkxNiAtMC4yOTM2MDQsMC43MzkyNzIgYyAtMC4xNjE0ODIsMC40MDY2MDEgLTAuMzY1NTMsMS4wMjU4NTMgLTAuNDUzNDQxLDEuMzc2MTE5IC0wLjEzODkxMywwLjU1MzQ3NCAtMC4zMzU4NDUsMC42NDcxOTcgLTEuNTA0MzExLDAuNzE1OTM0IGwgLTEuMzQ0NDczLDAuMDc5MDkgMS4wODU2OTIsMC43NDk5ODMgMS4wODU2OTEsMC43NDk5ODMgLTAuMzc3MjQzLDEuMDY5MjIxIGMgLTAuNTU3MTczLDEuNTc5MTk3IC0wLjQ4NDY5LDEuNjU2NjUxIDAuNzIwNzQyLDAuNzcwMTY3IGwgMS4wOTc5ODUsLTAuODA3NDY4IHoiCiAgICAgICAgIGlkPSJwYXRoMTgzIiAvPjwvZz48L2c+PC9zdmc+Cg==
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
