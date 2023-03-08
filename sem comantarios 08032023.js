import { log } from 'console';
import fetch from 'node-fetch';
import { APP_CONFIG } from '../config';
import { JSDOM } from 'jsdom';
import { URLSearchParams } from 'url';

let htmlBrute = ""
let stt = 0;


const userToLogin = APP_CONFIG.SISMED_LOGIN;
const passwordToLogin = APP_CONFIG.SISMED_PASSWORD;
const sessionIDManual = APP_CONFIG.SISMED_SESSIONID_MANUAL

accessPageLogin()

export async function accessPageLogin() {
  let sessionID = sessionIDManual;
  acessHomePageGet(sessionID)
}

async function acessHomePageGet(sessionID: string) {
  const response00000 = await fetch("https://smsisrelat.amil.com.br/Login.aspx", {
    "headers": {
      "Upgrade-Insecure-Requests": "1",
      "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36",
      "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
      "Sec-Fetch-Site": "none",
      "Sec-Fetch-Mode": "navigate",
      "Sec-Fetch-User": "?1",
      "Sec-Fetch-Dest": "document",
      "sec-ch-ua": "\"Chromium\";v=\"110\", \"Not A(Brand\";v=\"24\", \"Google Chrome\";v=\"110\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"Linux\"",
      "Accept-Encoding": "gzip, deflate, br",
      "Accept-Language": "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7",
      "Cookie": "ASP.NET_SessionId=" + sessionID + "; BIGipServer~DMZ-WEB~pool_apoiosismed_relatwebserver_80=rd10o00000000000000000000ffff0a68aa24o80"
    },
    "body": null,
    "method": "GET"
  });


  const htmlBrute = await response00000.text();
  log(response00000.status)
  startLoginWithUserAndPassPost(sessionID, htmlBrute)
}

async function startLoginWithUserAndPassPost(sessionID: string, htmlBrute1: string) {
  const htmlObject = new JSDOM(htmlBrute1)
  const viewState = (htmlObject.window.document.querySelector("input#__VIEWSTATE").getAttribute("value")).toString();
  const tsmHiddenField = (htmlObject.window.document.querySelector("input#_TSM_HiddenField_").getAttribute("value")).toString();
  const viewStateGenerator = (htmlObject.window.document.querySelector("input#__VIEWSTATEGENERATOR").getAttribute("value")).toString();
  const eventValidation = (htmlObject.window.document.querySelector("input#__EVENTVALIDATION").getAttribute("value")).toString();
  let form1 = new URLSearchParams();

  form1.append("ctl00$scrManager", "ctl00$cphBodyBranco$UpdatePanel1|ctl00$cphBodyBranco$btnLogin");
  form1.append("__LASTFOCUS", "");
  form1.append("_TSM_HiddenField_", tsmHiddenField);
  form1.append("__EVENTTARGET", "");
  form1.append("__EVENTARGUMENT", "");
  form1.append("__VIEWSTATE", viewState);
  form1.append("__VIEWSTATEGENERATOR", viewStateGenerator);
  form1.append("__EVENTVALIDATION", eventValidation);
  form1.append("ctl00$cphBodyBranco$edtUsuario", userToLogin);
  form1.append("ctl00$cphBodyBranco$edtSenha", passwordToLogin);
  form1.append("__ASYNCPOST", "true");
  form1.append("ctl00$cphBodyBranco$btnLogin", "Entrar");


  const response0000 = await fetch("https://smsisrelat.amil.com.br/Login.aspx", {
    "headers": {
      "sec-ch-ua": "\"Chromium\";v=\"110\", \"Not A(Brand\";v=\"24\", \"Google Chrome\";v=\"110\"",
      "sec-ch-ua-mobile": "?0",
      "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36",
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      "Cache-Control": "no-cache",
      "X-Requested-With": "XMLHttpRequest",
      "X-MicrosoftAjax": "Delta=true",
      "sec-ch-ua-platform": "\"Linux\"",
      "Accept": "*/*",
      "Origin": "https://smsisrelat.amil.com.br",
      "Sec-Fetch-Site": "same-origin",
      "Sec-Fetch-Mode": "cors",
      "Sec-Fetch-Dest": "empty",
      "Referer": "https://smsisrelat.amil.com.br/Login.aspx",
      "Accept-Encoding": "gzip, deflate, br",
      "Accept-Language": "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7",
      "Cookie": "ASP.NET_SessionId=" + sessionID + "; BIGipServer~DMZ-WEB~pool_apoiosismed_relatwebserver_80=rd10o00000000000000000000ffff0a68aa24o80; __utma=127847055.1310801329.1678205418.1678205418.1678205418.1; __utmc=127847055; __utmz=127847055.1678205418.1.1.utmcsr=(direct)|utmccn=(direct)|utmcmd=(none); __utmt=1; __utmb=127847055.1.10.1678205418"
    },
    "body": form1,
    "method": "POST"
  });


  const htmlBrute = await response0000.text();
  log(response0000.status)
  acessMenuPageGet(sessionID)
}


async function acessMenuPageGet(sessionID: string) {
  const response000 = await fetch("https://smsisrelat.amil.com.br/Menu.aspx", {
    "headers": {
      "sec-ch-ua": "\"Chromium\";v=\"110\", \"Not A(Brand\";v=\"24\", \"Google Chrome\";v=\"110\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"Linux\"",
      "Upgrade-Insecure-Requests": "1",
      "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36",
      "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
      "Sec-Fetch-Site": "same-origin",
      "Sec-Fetch-Mode": "navigate",
      "Sec-Fetch-User": "?1",
      "Sec-Fetch-Dest": "document",
      "Referer": "https://smsisrelat.amil.com.br/Login.aspx",
      "Accept-Encoding": "gzip, deflate, br",
      "Accept-Language": "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7",
      "Cookie": "ASP.NET_SessionId=" + sessionID + "; BIGipServer~DMZ-WEB~pool_apoiosismed_relatwebserver_80=rd10o00000000000000000000ffff0a68aa24o80; __utma=127847055.1310801329.1678205418.1678205418.1678205418.1; __utmc=127847055; __utmz=127847055.1678205418.1.1.utmcsr=(direct)|utmccn=(direct)|utmcmd=(none); __utmt=1; __utmb=127847055.1.10.1678205418"
    },
    "body": null,
    "method": "GET"
  });


  const htmlBrute = await response000.text();
  acessReportTakeToInitMakeConfigReport(sessionID)

}


async function acessReportTakeToInitMakeConfigReport(sessionID: string) {
  const response00 = await fetch("https://smsisrelat.amil.com.br/SisRim/MedicalIndicators.aspx", {
    "headers": {
      "sec-ch-ua": "\"Chromium\";v=\"110\", \"Not A(Brand\";v=\"24\", \"Google Chrome\";v=\"110\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"Linux\"",
      "Upgrade-Insecure-Requests": "1",
      "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36",
      "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
      "Sec-Fetch-Site": "none",
      "Sec-Fetch-Mode": "navigate",
      "Sec-Fetch-User": "?1",
      "Sec-Fetch-Dest": "document",
      "Accept-Encoding": "gzip, deflate, br",
      "Accept-Language": "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7",
      "Cookie": "ASP.NET_SessionId=" + sessionID + "; BIGipServer~DMZ-WEB~pool_apoiosismed_relatwebserver_80=rd10o00000000000000000000ffff0a68aa24o80; __utma=127847055.1310801329.1678205418.1678205418.1678205418.1; __utmc=127847055; __utmz=127847055.1678205418.1.1.utmcsr=(direct)|utmccn=(direct)|utmcmd=(none); __utmt=1; __utmb=127847055.2.10.1678205418"
    },
    "body": null,
    "method": "GET"
  });


  const htmlBrute = await response00.text();
  log(response00.status)
  insertDateInitialAndFinalToRequestReport(sessionID, htmlBrute);
}




async function insertDateInitialAndFinalToRequestReport(sessionID: string, htmlBrute2: string) {

  const data = new Date();
  const theDay = data.getDate();
  const mes = data.getMonth();
  const Year4 = data.getFullYear();
  let day = "";
  if (theDay < 10) {
    day = "0" + theDay.toString();
  } else {
    day = theDay.toString();
  }
  let Month = "";
  if (mes < 10) {
    let theMonth = mes + 1;
    Month = "0" + (theMonth).toString();
  } else {
    let theMonth = mes + 1;
    Month = (theMonth).toString();
  }
  let Year = Year4.toString();
  let inicialDateToTakeReport = day + "/" + Month + "/" + Year;
  let finalDateToTakeReport = day + "/" + Month + "/" + Year;
  log(` start date ${inicialDateToTakeReport}`);
  log(` final date ${finalDateToTakeReport}`);

  const htmlObject = new JSDOM(htmlBrute2)
  const viewState = (htmlObject.window.document.querySelector("input#__VIEWSTATE").getAttribute("value")).toString();
  const tsmHiddenField = (htmlObject.window.document.querySelector("input#_TSM_HiddenField_").getAttribute("value")).toString();
  const viewStateGenerator = (htmlObject.window.document.querySelector("input#__VIEWSTATEGENERATOR").getAttribute("value")).toString();
  const eventValidation = (htmlObject.window.document.querySelector("input#__EVENTVALIDATION").getAttribute("value")).toString();
  const grade$DXKVInput = (htmlObject.window.document.querySelector("input#ctl00_ctl00_cphBodyBranco_cphBodyFormatada_ucListReport_Grade_DXKVInput").getAttribute("value")).toString();
  const gradeCallbackState = (htmlObject.window.document.querySelector(`input#ctl00_ctl00_cphBodyBranco_cphBodyFormatada_ucListReport_Grade_CallbackState`).getAttribute("value")).toString();
  let Form21 = new URLSearchParams();

  Form21.append("ctl00$ctl00$scrManager", "ctl00$ctl00$cphBodyBranco$cphBodyFormatada$upBotoes|ctl00$ctl00$cphBodyBranco$cphBodyFormatada$btnSearch");
  Form21.append("__LASTFOCUS", "");
  Form21.append("_TSM_HiddenField_", tsmHiddenField);
  Form21.append("__EVENTTARGET", "");
  Form21.append("__EVENTARGUMENT", "");
  Form21.append("__VIEWSTATE", viewState);
  Form21.append("__VIEWSTATEGENERATOR", viewStateGenerator);
  Form21.append("__EVENTVALIDATION", eventValidation);
  Form21.append("ctl00$ctl00$cphBodyBranco$cphBodyFormatada$txtDataInicial", inicialDateToTakeReport);
  Form21.append("ctl00$ctl00$cphBodyBranco$cphBodyFormatada$txtDataFinal", finalDateToTakeReport);
  Form21.append("ctl00$ctl00$cphBodyBranco$cphBodyFormatada$ddlCentroMedico", "");
  Form21.append("ctl00$ctl00$cphBodyBranco$cphBodyFormatada$ddlEspecialidade", "");
  Form21.append("ctl00$ctl00$cphBodyBranco$cphBodyFormatada$ddlTipoAtendimento", "0");
  Form21.append("ctl00$ctl00$cphBodyBranco$cphBodyFormatada$Hora", "rbtReal");
  Form21.append("ctl00$ctl00$cphBodyBranco$cphBodyFormatada$txtCodigoCid", "");
  Form21.append("ctl00$ctl00$cphBodyBranco$cphBodyFormatada$txtCodigoAmb", "");
  Form21.append("ctl00$ctl00$cphBodyBranco$cphBodyFormatada$Tipo", "rbtDetalhado");
  Form21.append("ctl00$ctl00$cphBodyBranco$cphBodyFormatada$chkQuebra", "on");
  Form21.append("ctl00$ctl00$cphBodyBranco$cphBodyFormatada$ddlNivelCuidado", "0");
  Form21.append("ctl00$ctl00$cphBodyBranco$cphBodyFormatada$ucListReport$Grade$DXSelInput", "");
  Form21.append("ctl00$ctl00$cphBodyBranco$cphBodyFormatada$ucListReport$Grade$DXKVInput", grade$DXKVInput);
  Form21.append("ctl00$ctl00$cphBodyBranco$cphBodyFormatada$ucListReport$Grade$CallbackState", gradeCallbackState);
  Form21.append("DXScript", "1_142,1_80,1_135,1_90,1_113,1_98,1_105");
  Form21.append("__ASYNCPOST", "true");
  Form21.append("ctl00$ctl00$cphBodyBranco$cphBodyFormatada$btnSearch", "Gerar");




  const response0 = await fetch("https://smsisrelat.amil.com.br/SisRim/MedicalIndicators.aspx", {
    "headers": {
      "sec-ch-ua": "\"Chromium\";v=\"110\", \"Not A(Brand\";v=\"24\", \"Google Chrome\";v=\"110\"",
      "sec-ch-ua-mobile": "?0",
      "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36",
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      "Cache-Control": "no-cache",
      "X-Requested-With": "XMLHttpRequest",
      "X-MicrosoftAjax": "Delta=true",
      "sec-ch-ua-platform": "\"Linux\"",
      "Accept": "*/*",
      "Origin": "https://smsisrelat.amil.com.br",
      "Sec-Fetch-Site": "same-origin",
      "Sec-Fetch-Mode": "cors",
      "Sec-Fetch-Dest": "empty",
      "Referer": "https://smsisrelat.amil.com.br/SisRim/MedicalIndicators.aspx",
      "Accept-Encoding": "gzip, deflate, br",
      "Accept-Language": "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7",
      "Cookie": "ASP.NET_SessionId=" + sessionID + "; BIGipServer~DMZ-WEB~pool_apoiosismed_relatwebserver_80=rd10o00000000000000000000ffff0a68aa24o80; __utma=127847055.1310801329.1678205418.1678205418.1678205418.1; __utmc=127847055; __utmz=127847055.1678205418.1.1.utmcsr=(direct)|utmccn=(direct)|utmcmd=(none); __utmt=1; __utmb=127847055.3.10.1678205418"
    },
    "body": Form21,
    "method": "POST"
  });

  await new Promise((r) => setTimeout(r, 10_000));

  const htmlBruteToForm22 = await response0.text();
  require("fs").writeFileSync("htmlBrute3.html", htmlBruteToForm22);
  log(response0.status)
  const htmlObjectToForm22 = new JSDOM(htmlBruteToForm22)
  let listhtmlObjectToForm22 = (htmlObjectToForm22.toString()).split('|')
  let listhtmlObjectToForm22clean = []
  listhtmlObjectToForm22.forEach(item => {
    if (item.includes("<") == false && item.includes(">") == false) {
      listhtmlObjectToForm22clean.push(item)
    }
  });
  let viewStateToForm22 = "";
  let tsmHiddenFieldToForm22 = "";
  let viewStateGeneratorToForm22 = "";
  let eventValidationToForm22 = "";
  let grade$DXKVInputToForm22 = "";
  let gradeCallbackStateToForm22 = "";

  listhtmlObjectToForm22clean.forEach((element, index) => {
    switch (true) {
      case element == "__VIEWSTATE":
        viewStateToForm22 = listhtmlObjectToForm22clean[index + 1];
        break;
      case element == "_TSM_HiddenField_":
        tsmHiddenFieldToForm22 = listhtmlObjectToForm22clean[index + 1];
        break;
      case element == "__VIEWSTATEGENERATOR":
        viewStateGeneratorToForm22 = listhtmlObjectToForm22clean[index + 1];
        break;
      case element == "__EVENTVALIDATION":
        eventValidationToForm22 = listhtmlObjectToForm22clean[index + 1];
        break;
      default:

        break;
    }
  });

  let Form22 = new URLSearchParams();
  Form22.append("_TSM_HiddenField_", tsmHiddenFieldToForm22);
  Form22.append("ctl00$ctl00$cphBodyBranco$cphBodyFormatada$txtDataInicial", inicialDateToTakeReport);
  Form22.append("ctl00$ctl00$cphBodyBranco$cphBodyFormatada$txtDataFinal", finalDateToTakeReport);
  Form22.append("ctl00$ctl00$cphBodyBranco$cphBodyFormatada$ddlCentroMedico", "");
  Form22.append("ctl00$ctl00$cphBodyBranco$cphBodyFormatada$ddlEspecialidade", "");
  Form22.append("ctl00$ctl00$cphBodyBranco$cphBodyFormatada$ddlTipoAtendimento", "0");
  Form22.append("ctl00$ctl00$cphBodyBranco$cphBodyFormatada$Hora", "rbtReal");
  Form22.append("ctl00$ctl00$cphBodyBranco$cphBodyFormatada$txtCodigoCid", "");
  Form22.append("ctl00$ctl00$cphBodyBranco$cphBodyFormatada$txtCodigoAmb", "");
  Form22.append("ctl00$ctl00$cphBodyBranco$cphBodyFormatada$Tipo", "rbtDetalhado");
  Form22.append("ctl00$ctl00$cphBodyBranco$cphBodyFormatada$chkQuebra", "on");
  Form22.append("ctl00$ctl00$cphBodyBranco$cphBodyFormatada$ddlNivelCuidado", "0");
  Form22.append("ctl00$ctl00$cphBodyBranco$cphBodyFormatada$ucListReport$Grade$DXSelInput", "");
  Form22.append("ctl00$ctl00$cphBodyBranco$cphBodyFormatada$ucListReport$Grade$DXKVInput", grade$DXKVInput);
  Form22.append("ctl00$ctl00$cphBodyBranco$cphBodyFormatada$ucListReport$Grade$CallbackState", gradeCallbackState);
  Form22.append("DXScript", "1_142,1_80,1_135,1_90,1_113,1_98,1_105");
  Form22.append("__EVENTTARGET", "");
  Form22.append("__EVENTARGUMENT", "");
  Form22.append("__LASTFOCUS", "");
  Form22.append("__VIEWSTATE", viewStateToForm22);
  Form22.append("__VIEWSTATEGENERATOR", viewStateGeneratorToForm22);
  Form22.append("__CALLBACKID", "ctl00$ctl00$cphBodyBranco$cphBodyFormatada$ucListReport$Grade");
  Form22.append("__CALLBACKPARAM", "c0:KV|46;['401140','401164','401114','401089','401088'];GB|9;7|REFRESH");
  Form22.append("__EVENTVALIDATION", eventValidationToForm22);

  const response2 = await fetch("https://smsisrelat.amil.com.br/SisRim/MedicalIndicators.aspx", {
    "headers": {
      "sec-ch-ua": "\"Chromium\";v=\"110\", \"Not A(Brand\";v=\"24\", \"Google Chrome\";v=\"110\"",
      "sec-ch-ua-platform": "\"Linux\"",
      "sec-ch-ua-mobile": "?0",
      "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36",
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      "Accept": "*/*",
      "Origin": "https://smsisrelat.amil.com.br",
      "Sec-Fetch-Site": "same-origin",
      "Sec-Fetch-Mode": "cors",
      "Sec-Fetch-Dest": "empty",
      "Referer": "https://smsisrelat.amil.com.br/SisRim/MedicalIndicators.aspx",
      "Accept-Encoding": "gzip, deflate, br",
      "Accept-Language": "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7",
      "Cookie": "ASP.NET_SessionId=" + sessionID + "; BIGipServer~DMZ-WEB~pool_apoiosismed_relatwebserver_80=rd10o00000000000000000000ffff0a68aa24o80; __utma=127847055.1310801329.1678205418.1678205418.1678205418.1; __utmc=127847055; __utmz=127847055.1678205418.1.1.utmcsr=(direct)|utmccn=(direct)|utmcmd=(none); __utmt=1; __utmb=127847055.3.10.1678205418"
    },
    "body": Form22,
    "method": "POST"
  });
  await new Promise((r) => setTimeout(r, 10_000));

  const htmlBruteToForm23 = await response2.text();
  require("fs").writeFileSync("htmlBrute3.html", htmlBruteToForm23);
  log(response2.status)


  const response3 = await fetch("https://smsisrelat.amil.com.br/SisRim/MedicalIndicators.aspx", {
    "headers": {
      "sec-ch-ua": "\"Chromium\";v=\"110\", \"Not A(Brand\";v=\"24\", \"Google Chrome\";v=\"110\"",
      "sec-ch-ua-platform": "\"Linux\"",
      "sec-ch-ua-mobile": "?0",
      "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36",
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      "Accept": "*/*",
      "Origin": "https://smsisrelat.amil.com.br",
      "Sec-Fetch-Site": "same-origin",
      "Sec-Fetch-Mode": "cors",
      "Sec-Fetch-Dest": "empty",
      "Referer": "https://smsisrelat.amil.com.br/SisRim/MedicalIndicators.aspx",
      "Accept-Encoding": "gzip, deflate, br",
      "Accept-Language": "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7",
      "Cookie": "ASP.NET_SessionId=" + sessionID + "; BIGipServer~DMZ-WEB~pool_apoiosismed_relatwebserver_80=rd10o00000000000000000000ffff0a68aa24o80; __utma=127847055.1310801329.1678205418.1678205418.1678205418.1; __utmc=127847055; __utmz=127847055.1678205418.1.1.utmcsr=(direct)|utmccn=(direct)|utmcmd=(none); __utmt=1; __utmb=127847055.3.10.1678205418"
    },
    "body": Form22,
    "method": "POST"
  });
  await new Promise((r) => setTimeout(r, 10_000));

  const htmlBruteToForm24 = await response3.text();
  require("fs").writeFileSync("htmlBrute3.html", htmlBruteToForm24);
  log(response3.status)




  const response4 = await fetch("https://smsisrelat.amil.com.br/SisRim/MedicalIndicators.aspx", {
    "headers": {
      "sec-ch-ua": "\"Chromium\";v=\"110\", \"Not A(Brand\";v=\"24\", \"Google Chrome\";v=\"110\"",
      "sec-ch-ua-platform": "\"Linux\"",
      "sec-ch-ua-mobile": "?0",
      "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36",
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      "Accept": "*/*",
      "Origin": "https://smsisrelat.amil.com.br",
      "Sec-Fetch-Site": "same-origin",
      "Sec-Fetch-Mode": "cors",
      "Sec-Fetch-Dest": "empty",
      "Referer": "https://smsisrelat.amil.com.br/SisRim/MedicalIndicators.aspx",
      "Accept-Encoding": "gzip, deflate, br",
      "Accept-Language": "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7",
      "Cookie": "ASP.NET_SessionId=" + sessionID + "; BIGipServer~DMZ-WEB~pool_apoiosismed_relatwebserver_80=rd10o00000000000000000000ffff0a68aa24o80; __utma=127847055.1310801329.1678205418.1678205418.1678205418.1; __utmc=127847055; __utmz=127847055.1678205418.1.1.utmcsr=(direct)|utmccn=(direct)|utmcmd=(none); __utmt=1; __utmb=127847055.3.10.1678205418"
    },
    "body": Form22,
    "method": "POST"
  });
  await new Promise((r) => setTimeout(r, 10_000));
  const htmlBruteToForm25 = await response4.text();
  require("fs").writeFileSync("htmlBrute3.html", htmlBruteToForm25);
  log(response4.status)

  const response5 = await fetch("https://smsisrelat.amil.com.br/SisRim/MedicalIndicators.aspx", {
    "headers": {
      "sec-ch-ua": "\"Chromium\";v=\"110\", \"Not A(Brand\";v=\"24\", \"Google Chrome\";v=\"110\"",
      "sec-ch-ua-platform": "\"Linux\"",
      "sec-ch-ua-mobile": "?0",
      "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36",
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      "Accept": "*/*",
      "Origin": "https://smsisrelat.amil.com.br",
      "Sec-Fetch-Site": "same-origin",
      "Sec-Fetch-Mode": "cors",
      "Sec-Fetch-Dest": "empty",
      "Referer": "https://smsisrelat.amil.com.br/SisRim/MedicalIndicators.aspx",
      "Accept-Encoding": "gzip, deflate, br",
      "Accept-Language": "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7",
      "Cookie": "ASP.NET_SessionId=" + sessionID + "; BIGipServer~DMZ-WEB~pool_apoiosismed_relatwebserver_80=rd10o00000000000000000000ffff0a68aa24o80; __utma=127847055.1310801329.1678205418.1678205418.1678205418.1; __utmc=127847055; __utmz=127847055.1678205418.1.1.utmcsr=(direct)|utmccn=(direct)|utmcmd=(none); __utmt=1; __utmb=127847055.3.10.1678205418"
    },
    "body": Form22,
    "method": "POST"
  });
  await new Promise((r) => setTimeout(r, 10_000));
  const htmlBruteToForm26 = await response5.text();
  require("fs").writeFileSync("htmlBrute3.html", htmlBruteToForm26);
  log(response5.status)

  const htmlObjectForm26 = new JSDOM(htmlBrute2)
  const viewStateForm26 = (htmlObjectForm26.window.document.querySelector("input#__VIEWSTATE").getAttribute("value")).toString();
  const tsmHiddenFieldForm26 = (htmlObjectForm26.window.document.querySelector("input#_TSM_HiddenField_").getAttribute("value")).toString();
  const viewStateGeneratorForm26 = (htmlObjectForm26.window.document.querySelector("input#__VIEWSTATEGENERATOR").getAttribute("value")).toString();
  const eventValidationForm26 = (htmlObjectForm26.window.document.querySelector("input#__EVENTVALIDATION").getAttribute("value")).toString();
  const grade$DXKVInputForm26 = (htmlObjectForm26.window.document.querySelector("input#ctl00_ctl00_cphBodyBranco_cphBodyFormatada_ucListReport_Grade_DXKVInput").getAttribute("value")).toString();
  const gradeCallbackStateForm26 = (htmlObjectForm26.window.document.querySelector(`input#ctl00_ctl00_cphBodyBranco_cphBodyFormatada_ucListReport_Grade_CallbackState`).getAttribute("value")).toString();
  let Form26 = new URLSearchParams();

  Form26.append("ctl00$ctl00$scrManager", "ctl00$ctl00$cphBodyBranco$cphBodyFormatada$ucListReport$upRelatorio|ctl00$ctl00$cphBodyBranco$cphBodyFormatada$ucListReport$Grade$cell0_9$btnEditar");
  Form26.append("_TSM_HiddenField_", tsmHiddenFieldForm26);
  Form26.append("ctl00$ctl00$cphBodyBranco$cphBodyFormatada$txtDataInicial", inicialDateToTakeReport);
  Form26.append("ctl00$ctl00$cphBodyBranco$cphBodyFormatada$txtDataFinal", finalDateToTakeReport);
  Form26.append("ctl00$ctl00$cphBodyBranco$cphBodyFormatada$ddlCentroMedico", "");
  Form26.append("ctl00$ctl00$cphBodyBranco$cphBodyFormatada$ddlEspecialidade", "");
  Form26.append("ctl00$ctl00$cphBodyBranco$cphBodyFormatada$ddlTipoAtendimento", "0");
  Form26.append("ctl00$ctl00$cphBodyBranco$cphBodyFormatada$Hora", "rbtReal");
  Form26.append("ctl00$ctl00$cphBodyBranco$cphBodyFormatada$txtCodigoCid", "");
  Form26.append("ctl00$ctl00$cphBodyBranco$cphBodyFormatada$txtCodigoAmb", "");
  Form26.append("ctl00$ctl00$cphBodyBranco$cphBodyFormatada$Tipo", "rbtDetalhado");
  Form26.append("ctl00$ctl00$cphBodyBranco$cphBodyFormatada$chkQuebra", "on");
  Form26.append("ctl00$ctl00$cphBodyBranco$cphBodyFormatada$ddlNivelCuidado", "0");
  Form26.append("ctl00$ctl00$cphBodyBranco$cphBodyFormatada$ucListReport$Grade$DXSelInput", "");
  Form26.append("ctl00$ctl00$cphBodyBranco$cphBodyFormatada$ucListReport$Grade$DXKVInput", grade$DXKVInputForm26);
  Form26.append("ctl00$ctl00$cphBodyBranco$cphBodyFormatada$ucListReport$Grade$CallbackState", gradeCallbackStateForm26);
  Form26.append("DXScript", "1_142,1_80,1_135,1_90,1_113,1_98,1_105");
  Form26.append("__EVENTTARGET", "ctl00$ctl00$cphBodyBranco$cphBodyFormatada$ucListReport$Grade$cell0_9$btnEditar");
  Form26.append("__EVENTARGUMENT", "");
  Form26.append("__LASTFOCUS", "");
  Form26.append("__VIEWSTATE", viewStateForm26);
  Form26.append("__VIEWSTATEGENERATOR", viewStateGeneratorForm26);
  Form26.append("__EVENTVALIDATION", eventValidationForm26);
  Form26.append("__ASYNCPOST", "true");

  const response6 = await fetch("https://smsisrelat.amil.com.br/SisRim/MedicalIndicators.aspx", {
    "headers": {
      "sec-ch-ua": "\"Chromium\";v=\"110\", \"Not A(Brand\";v=\"24\", \"Google Chrome\";v=\"110\"",
      "sec-ch-ua-mobile": "?0",
      "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36",
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      "Cache-Control": "no-cache",
      "X-Requested-With": "XMLHttpRequest",
      "X-MicrosoftAjax": "Delta=true",
      "sec-ch-ua-platform": "\"Linux\"",
      "Accept": "*/*",
      "Origin": "https://smsisrelat.amil.com.br",
      "Sec-Fetch-Site": "same-origin",
      "Sec-Fetch-Mode": "cors",
      "Sec-Fetch-Dest": "empty",
      "Referer": "https://smsisrelat.amil.com.br/SisRim/MedicalIndicators.aspx",
      "Accept-Encoding": "gzip, deflate, br",
      "Accept-Language": "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7",
      "Cookie": "ASP.NET_SessionId=" + sessionID + "; BIGipServer~DMZ-WEB~pool_apoiosismed_relatwebserver_80=rd10o00000000000000000000ffff0a68aa24o80; __utma=127847055.1310801329.1678205418.1678205418.1678205418.1; __utmc=127847055; __utmz=127847055.1678205418.1.1.utmcsr=(direct)|utmccn=(direct)|utmcmd=(none); __utmt=1; __utmb=127847055.3.10.1678205418"
    },
    "body": Form26,
    "method": "POST"
  });
  await new Promise((r) => setTimeout(r, 120_000));
  log('lest go')
  const htmlBruteToForm27 = await response6.text();
  require("fs").writeFileSync("htmlBrute3.html", htmlBruteToForm27);
  log(response6.status)

  downloadtoReportPost(sessionID)

}



async function downloadtoReportPost(sessionID: string) {

  let respon: any = "";

  respon = await fetch("https://smsisrelat.amil.com.br/DXR.axd?r=0_3207-ldDTl", {

    "body": null,
    "method": "GET"
  }); htmlBrute = await respon.text(); if (htmlBrute.includes('GradeDetalhado')) { log('found'); } else { stt = await respon.status; log(stt); }
  respon = await fetch("https://smsisrelat.amil.com.br/DXR.axd?r=0_3352-ldDTl", {

    "body": null,
    "method": "GET"
  }); htmlBrute = await respon.text(); if (htmlBrute.includes('GradeDetalhado')) { log('found'); } else { stt = await respon.status; log(stt); }
  respon = await fetch("https://smsisrelat.amil.com.br/DXR.axd?r=1_8-ldDTl", {

    "body": null,
    "method": "GET"
  }); htmlBrute = await respon.text(); if (htmlBrute.includes('GradeDetalhado')) { log('found'); } else { stt = await respon.status; log(stt); }
  respon = await fetch("https://smsisrelat.amil.com.br/DXR.axd?r=0_3210-ldDTl", {

    "body": null,
    "method": "GET"
  }); htmlBrute = await respon.text(); if (htmlBrute.includes('GradeDetalhado')) { log('found'); } else { stt = await respon.status; log(stt); }
  respon = await fetch("https://smsisrelat.amil.com.br/DXR.axd?r=0_3355-ldDTl", {

    "body": null,
    "method": "GET"
  }); htmlBrute = await respon.text(); if (htmlBrute.includes('GradeDetalhado')) { log('found'); } else { stt = await respon.status; log(stt); }
  respon = await fetch("https://smsisrelat.amil.com.br/DXR.axd?r=0_3200-ldDTl", {

    "body": null,
    "method": "GET"
  }); htmlBrute = await respon.text(); if (htmlBrute.includes('GradeDetalhado')) { log('found'); } else { stt = await respon.status; log(stt); }
  respon = await fetch("https://smsisrelat.amil.com.br/DXR.axd?r=1_4-ldDTl", {

    "body": null,
    "method": "GET"
  }); htmlBrute = await respon.text(); if (htmlBrute.includes('GradeDetalhado')) { log('found'); } else { stt = await respon.status; log(stt); }
  respon = await fetch("https://smsisrelat.amil.com.br/DXR.axd?r=0_3203-ldDTl", {

    "body": null,
    "method": "GET"
  }); htmlBrute = await respon.text(); if (htmlBrute.includes('GradeDetalhado')) { log('found'); } else { stt = await respon.status; log(stt); }
  respon = await fetch("https://smsisrelat.amil.com.br/WebResource.axd?d=pynGkmcFUV13He1Qd6_TZJ-NCRBZkzqxJWA5SOy_xIF7yvvlDp1S1PoeeuGNPTa7Rm6T1Q2&t=637811621229275428", {
    "headers": {
      "sec-ch-ua": "\"Chromium\";v=\"110\", \"Not A(Brand\";v=\"24\", \"Google Chrome\";v=\"110\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"Linux\"",
      "Referer": "https://smsisrelat.amil.com.br/SisRim/MedicalIndicators.aspx",
      "Referrer-Policy": "strict-origin-when-cross-origin"
    },
    "body": null,
    "method": "GET"
  }); htmlBrute = await respon.text(); if (htmlBrute.includes('GradeDetalhado')) { log('found'); } else { stt = await respon.status; log(stt); }
  respon = await fetch("https://smsisrelat.amil.com.br/ScriptResource.axd?d=x6wALODbMJK5e0eRC_p1LSLkF2JAvbyhHnSErUI9A7GvphU962Z49ErAHL3oXGIFFDpo63QHZCCO9xQjcyVWQSgG_Z9mT4JNQYMSnAtJTg6ftNBC0&t=51e37521", {
    "headers": {
      "sec-ch-ua": "\"Chromium\";v=\"110\", \"Not A(Brand\";v=\"24\", \"Google Chrome\";v=\"110\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"Linux\"",
      "Referer": "https://smsisrelat.amil.com.br/SisRim/MedicalIndicators.aspx",
      "Referrer-Policy": "strict-origin-when-cross-origin"
    },
    "body": null,
    "method": "GET"
  }); htmlBrute = await respon.text(); if (htmlBrute.includes('GradeDetalhado')) { log('found'); } else { stt = await respon.status; log(stt); }
  respon = await fetch("https://smsisrelat.amil.com.br/ScriptResource.axd?d=P5lTttoqSeZXoYRLQMIScLHEFC7cCHe7UBFh48hKlOZ4w0jJGsXM2KWx8GfN61QgNGsyfDpCawjKV9aBWOvW2n8MphN98KWKmj1JuRIfx4XI7UtB0&t=51e37521", {
    "headers": {
      "sec-ch-ua": "\"Chromium\";v=\"110\", \"Not A(Brand\";v=\"24\", \"Google Chrome\";v=\"110\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"Linux\"",
      "Referer": "https://smsisrelat.amil.com.br/SisRim/MedicalIndicators.aspx",
      "Referrer-Policy": "strict-origin-when-cross-origin"
    },
    "body": null,
    "method": "GET"
  }); htmlBrute = await respon.text(); if (htmlBrute.includes('GradeDetalhado')) { log('found'); } else { stt = await respon.status; log(stt); }
  respon = await fetch("https://smsisrelat.amil.com.br/SisRim/MedicalIndicators.aspx?_TSM_CombinedScripts_=True&v=ZaMfZ6yYhPPHZ1NeEf8j6-t902-6pHpn2MehV0eep-I1&_TSM_Bundles_=&cdn=False", {

    "body": null,
    "method": "GET"
  }); htmlBrute = await respon.text(); if (htmlBrute.includes('GradeDetalhado')) { log('found'); } else { stt = await respon.status; log(stt); }
  respon = await fetch("https://smsisrelat.amil.com.br/ScriptResource.axd?d=XGoPW3Unw0ILT0eb9sSUa9boiaUQ7Xzl9LDyyg0rUN4-dRJaByhjA1tEboEMA8CSzk8AwlFeOOyIESJH4odJcIfynTlXYhFaNo4tO-DpDATNf8vRaeSv8XxGYf9Qzfp-YyGpLA2&t=51e37521", {
    "headers": {
      "sec-ch-ua": "\"Chromium\";v=\"110\", \"Not A(Brand\";v=\"24\", \"Google Chrome\";v=\"110\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"Linux\"",
      "Referer": "https://smsisrelat.amil.com.br/SisRim/MedicalIndicators.aspx",
      "Referrer-Policy": "strict-origin-when-cross-origin"
    },
    "body": null,
    "method": "GET"
  }); htmlBrute = await respon.text(); if (htmlBrute.includes('GradeDetalhado')) { log('found'); } else { stt = await respon.status; log(stt); }
  respon = await fetch("https://smsisrelat.amil.com.br/ScriptResource.axd?d=uvA9ANM76Fbpm1FfUlagnZQfFJBWj22paCui0TGswoZd0W4_PQWTx5dOrN3pAqoRAbUkjF5sfPInqOYY7Nq3x9YM8pyZJ-TG-WVQNn0OV1ZmcY7Egig3YHctwX30YInD80cZWQ2&t=51e37521", {
    "headers": {
      "sec-ch-ua": "\"Chromium\";v=\"110\", \"Not A(Brand\";v=\"24\", \"Google Chrome\";v=\"110\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"Linux\"",
      "Referer": "https://smsisrelat.amil.com.br/SisRim/MedicalIndicators.aspx",
      "Referrer-Policy": "strict-origin-when-cross-origin"
    },
    "body": null,
    "method": "GET"
  }); htmlBrute = await respon.text(); if (htmlBrute.includes('GradeDetalhado')) { log('found'); } else { stt = await respon.status; log(stt); }
  respon = await fetch("https://smsisrelat.amil.com.br/WebResource.axd?d=JoBkLzP19aTuxbWOhHobYgtPOz8I3wgXp1s45sSOQp-ZBouPK6g3hkS_tazQ7N4Rgsvb1A2&t=637811621229275428", {

    "body": null,
    "method": "GET"
  }); htmlBrute = await respon.text(); if (htmlBrute.includes('GradeDetalhado')) { log('found'); } else { stt = await respon.status; log(stt); }
  respon = await fetch("https://smsisrelat.amil.com.br/DXR.axd?r=1_142-ldDTl", {

    "body": null,
    "method": "GET"
  }); htmlBrute = await respon.text(); if (htmlBrute.includes('GradeDetalhado')) { log('found'); } else { stt = await respon.status; log(stt); }
  respon = await fetch("https://smsisrelat.amil.com.br/DXR.axd?r=1_80-ldDTl", {

    "body": null,
    "method": "GET"
  }); htmlBrute = await respon.text(); if (htmlBrute.includes('GradeDetalhado')) { log('found'); } else { stt = await respon.status; log(stt); }
  respon = await fetch("https://smsisrelat.amil.com.br/DXR.axd?r=1_135-ldDTl", {

    "body": null,
    "method": "GET"
  }); htmlBrute = await respon.text(); if (htmlBrute.includes('GradeDetalhado')) { log('found'); } else { stt = await respon.status; log(stt); }
  respon = await fetch("https://smsisrelat.amil.com.br/DXR.axd?r=1_90-ldDTl", {

    "body": null,
    "method": "GET"
  }); htmlBrute = await respon.text(); if (htmlBrute.includes('GradeDetalhado')) { log('found'); } else { stt = await respon.status; log(stt); }
  respon = await fetch("https://smsisrelat.amil.com.br/DXR.axd?r=1_113-ldDTl", {

    "body": null,
    "method": "GET"
  }); htmlBrute = await respon.text(); if (htmlBrute.includes('GradeDetalhado')) { log('found'); } else { stt = await respon.status; log(stt); }
  respon = await fetch("https://smsisrelat.amil.com.br/DXR.axd?r=1_98-ldDTl", {

    "body": null,
    "method": "GET"
  }); htmlBrute = await respon.text(); if (htmlBrute.includes('GradeDetalhado')) { log('found'); } else { stt = await respon.status; log(stt); }
  respon = await fetch("https://smsisrelat.amil.com.br/DXR.axd?r=1_105-ldDTl", {

    "body": null,
    "method": "GET"
  }); htmlBrute = await respon.text(); if (htmlBrute.includes('GradeDetalhado')) { log('found'); } else { stt = await respon.status; log(stt); }
  respon = await fetch("https://smsisrelat.amil.com.br/DXR.axd?r=1_9-ldDTl", {

    "body": null,
    "method": "GET"
  }); htmlBrute = await respon.text(); if (htmlBrute.includes('GradeDetalhado')) { log('found'); } else { stt = await respon.status; log(stt); }
  respon = await fetch("https://smsisrelat.amil.com.br/DXR.axd?r=0_3206-ldDTl", {

    "body": null,
    "method": "GET"
  }); htmlBrute = await respon.text(); if (htmlBrute.includes('GradeDetalhado')) { log('found'); } else { stt = await respon.status; log(stt); }
  respon = await fetch("https://smsisrelat.amil.com.br/DXR.axd?r=0_3209-ldDTl", {

    "body": null,
    "method": "GET"
  }); htmlBrute = await respon.text(); if (htmlBrute.includes('GradeDetalhado')) { log('found'); } else { stt = await respon.status; log(stt); }

  respon = await fetch("https://smsisrelat.amil.com.br/SisRim/MedicalIndicators.aspx", {
    "headers": {
      "accept": "*/*",
      "accept-language": "en-US,en;q=0.9",
      "cache-control": "no-cache",
      "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
      "sec-ch-ua": "\"Chromium\";v=\"110\", \"Not A(Brand\";v=\"24\", \"Google Chrome\";v=\"110\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"Linux\"",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      "x-microsoftajax": "Delta=true",
      "x-requested-with": "XMLHttpRequest",
      "cookie": "ASP.NET_SessionId=" + sessionID + "; __utmc=127847055; __utmz=127847055.1673974189.1.1.utmcsr=(direct)|utmccn=(direct)|utmcmd=(none); BIGipServer~DMZ-WEB~pool_apoiosismed_relatwebserver_80=rd10o00000000000000000000ffff0a68aa24o80; _ga=GA1.3.1985671547.1674841027; OptanonAlertBoxClosed=2023-01-27T17:39:36.138Z; OptanonConsent=isIABGlobal=false&datestamp=Fri+Jan+27+2023+14%3A54%3A15+GMT-0300+(Hor%C3%A1rio+Padr%C3%A3o+de+Bras%C3%ADlia)&version=6.21.0&hosts=&consentId=7e116444-786a-4bf2-975a-9b6c95994571&interactionCount=1&landingPath=NotLandingPage&groups=C0001%3A1%2CC0003%3A1%2CC0002%3A1%2CC0004%3A1&geolocation=BR%3BSP&AwaitingReconsent=false; __utma=127847055.897197718.1673974189.1678300892.1678304751.36; __utmt=1; __utmb=127847055.3.10.1678304751",
      "Referer": "https://smsisrelat.amil.com.br/SisRim/MedicalIndicators.aspx",
      "Referrer-Policy": "strict-origin-when-cross-origin"
    },
    "method": "POST"
  }); const htmlBruteFinal = await respon.text(); if (htmlBruteFinal.includes('GradeDetalhado')) { log('found'); } else { stt = await respon.status; log(stt); }
  log('here')
  respon = await fetch("https://smsisrelat.amil.com.br/SisRim/MedicalIndicators.aspx", {
    "headers": {
      "accept": "*/*",
      "accept-language": "en-US,en;q=0.9",
      "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
      "sec-ch-ua": "\"Chromium\";v=\"110\", \"Not A(Brand\";v=\"24\", \"Google Chrome\";v=\"110\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"Linux\"",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      "cookie": "ASP.NET_SessionId=" + sessionID + "; __utmc=127847055; __utmz=127847055.1673974189.1.1.utmcsr=(direct)|utmccn=(direct)|utmcmd=(none); BIGipServer~DMZ-WEB~pool_apoiosismed_relatwebserver_80=rd10o00000000000000000000ffff0a68aa24o80; _ga=GA1.3.1985671547.1674841027; OptanonAlertBoxClosed=2023-01-27T17:39:36.138Z; OptanonConsent=isIABGlobal=false&datestamp=Fri+Jan+27+2023+14%3A54%3A15+GMT-0300+(Hor%C3%A1rio+Padr%C3%A3o+de+Bras%C3%ADlia)&version=6.21.0&hosts=&consentId=7e116444-786a-4bf2-975a-9b6c95994571&interactionCount=1&landingPath=NotLandingPage&groups=C0001%3A1%2CC0003%3A1%2CC0002%3A1%2CC0004%3A1&geolocation=BR%3BSP&AwaitingReconsent=false; __utma=127847055.897197718.1673974189.1678300892.1678304751.36; __utmt=1; __utmb=127847055.3.10.1678304751",
      "Referer": "https://smsisrelat.amil.com.br/SisRim/MedicalIndicators.aspx",
      "Referrer-Policy": "strict-origin-when-cross-origin"
    },
    "method": "POST"
  }); htmlBrute = await respon.text(); if (htmlBrute.includes('GradeDetalhado')) { log('found'); } else { stt = await respon.status; log(stt); }
  respon = await fetch("https://smsisrelat.amil.com.br/DXR.axd?r=0_3352-ldDTl", {

    "body": null,
    "method": "GET"
  }); htmlBrute = await respon.text(); if (htmlBrute.includes('GradeDetalhado')) { log('found'); } else { stt = await respon.status; log(stt); }
  respon = await fetch("https://smsisrelat.amil.com.br/DXR.axd?r=1_8-ldDTl", {

    "body": null,
    "method": "GET"
  }); htmlBrute = await respon.text(); if (htmlBrute.includes('GradeDetalhado')) { log('found'); } else { stt = await respon.status; log(stt); }
  respon = await fetch("https://smsisrelat.amil.com.br/DXR.axd?r=0_3355-ldDTl", {

    "body": null,
    "method": "GET"
  }); htmlBrute = await respon.text(); if (htmlBrute.includes('GradeDetalhado')) { log('found'); } else { stt = await respon.status; log(stt); }
  respon = await fetch("https://smsisrelat.amil.com.br/SisRim/MedicalIndicators.aspx", {
    "headers": {
      "accept": "*/*",
      "accept-language": "en-US,en;q=0.9",
      "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
      "sec-ch-ua": "\"Chromium\";v=\"110\", \"Not A(Brand\";v=\"24\", \"Google Chrome\";v=\"110\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"Linux\"",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      "cookie": "ASP.NET_SessionId=" + sessionID + "; __utmc=127847055; __utmz=127847055.1673974189.1.1.utmcsr=(direct)|utmccn=(direct)|utmcmd=(none); BIGipServer~DMZ-WEB~pool_apoiosismed_relatwebserver_80=rd10o00000000000000000000ffff0a68aa24o80; _ga=GA1.3.1985671547.1674841027; OptanonAlertBoxClosed=2023-01-27T17:39:36.138Z; OptanonConsent=isIABGlobal=false&datestamp=Fri+Jan+27+2023+14%3A54%3A15+GMT-0300+(Hor%C3%A1rio+Padr%C3%A3o+de+Bras%C3%ADlia)&version=6.21.0&hosts=&consentId=7e116444-786a-4bf2-975a-9b6c95994571&interactionCount=1&landingPath=NotLandingPage&groups=C0001%3A1%2CC0003%3A1%2CC0002%3A1%2CC0004%3A1&geolocation=BR%3BSP&AwaitingReconsent=false; __utma=127847055.897197718.1673974189.1678300892.1678304751.36; __utmt=1; __utmb=127847055.3.10.1678304751",
      "Referer": "https://smsisrelat.amil.com.br/SisRim/MedicalIndicators.aspx",
      "Referrer-Policy": "strict-origin-when-cross-origin"
    },
    "method": "POST"
  }); htmlBrute = await respon.text(); if (htmlBrute.includes('GradeDetalhado')) { log('found'); } else { stt = await respon.status; log(stt); }
  respon = await fetch("https://smsisrelat.amil.com.br/SisRim/MedicalIndicators.aspx", {
    "headers": {
      "accept": "*/*",
      "accept-language": "en-US,en;q=0.9",
      "cache-control": "no-cache",
      "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
      "sec-ch-ua": "\"Chromium\";v=\"110\", \"Not A(Brand\";v=\"24\", \"Google Chrome\";v=\"110\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"Linux\"",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      "x-microsoftajax": "Delta=true",
      "x-requested-with": "XMLHttpRequest",
      "cookie": "ASP.NET_SessionId=" + sessionID + "; __utmc=127847055; __utmz=127847055.1673974189.1.1.utmcsr=(direct)|utmccn=(direct)|utmcmd=(none); BIGipServer~DMZ-WEB~pool_apoiosismed_relatwebserver_80=rd10o00000000000000000000ffff0a68aa24o80; _ga=GA1.3.1985671547.1674841027; OptanonAlertBoxClosed=2023-01-27T17:39:36.138Z; OptanonConsent=isIABGlobal=false&datestamp=Fri+Jan+27+2023+14%3A54%3A15+GMT-0300+(Hor%C3%A1rio+Padr%C3%A3o+de+Bras%C3%ADlia)&version=6.21.0&hosts=&consentId=7e116444-786a-4bf2-975a-9b6c95994571&interactionCount=1&landingPath=NotLandingPage&groups=C0001%3A1%2CC0003%3A1%2CC0002%3A1%2CC0004%3A1&geolocation=BR%3BSP&AwaitingReconsent=false; __utma=127847055.897197718.1673974189.1678300892.1678304751.36; __utmt=1; __utmb=127847055.3.10.1678304751",
      "Referer": "https://smsisrelat.amil.com.br/SisRim/MedicalIndicators.aspx",
      "Referrer-Policy": "strict-origin-when-cross-origin"
    },
    "method": "POST"
  }); htmlBrute = await respon.text(); if (htmlBrute.includes('GradeDetalhado')) { log('found'); } else { stt = await respon.status; log(stt); }
  respon = await fetch("https://smsisrelat.amil.com.br/DXR.axd?r=0_3207-ldDTl", {

    "body": null,
    "method": "GET"
  }); htmlBrute = await respon.text(); if (htmlBrute.includes('GradeDetalhado')) { log('found'); } else { stt = await respon.status; log(stt); }
  respon = await fetch("https://smsisrelat.amil.com.br/DXR.axd?r=0_3352-ldDTl", {

    "body": null,
    "method": "GET"
  }); htmlBrute = await respon.text(); if (htmlBrute.includes('GradeDetalhado')) { log('found'); } else { stt = await respon.status; log(stt); }
  respon = await fetch("https://smsisrelat.amil.com.br/DXR.axd?r=1_8-ldDTl", {

    "body": null,
    "method": "GET"
  }); htmlBrute = await respon.text(); if (htmlBrute.includes('GradeDetalhado')) { log('found'); } else { stt = await respon.status; log(stt); }
  respon = await fetch("https://smsisrelat.amil.com.br/DXR.axd?r=0_3210-ldDTl", {

    "body": null,
    "method": "GET"
  }); htmlBrute = await respon.text(); if (htmlBrute.includes('GradeDetalhado')) { log('found'); } else { stt = await respon.status; log(stt); }
  respon = await fetch("https://smsisrelat.amil.com.br/DXR.axd?r=0_3355-ldDTl", {

    "body": null,
    "method": "GET"
  }); htmlBrute = await respon.text(); if (htmlBrute.includes('GradeDetalhado')) { log('found'); } else { stt = await respon.status; log(stt); }
  respon = await fetch("https://smsisrelat.amil.com.br/DXR.axd?r=0_3200-ldDTl", {

    "body": null,
    "method": "GET"
  }); htmlBrute = await respon.text(); if (htmlBrute.includes('GradeDetalhado')) { log('found'); } else { stt = await respon.status; log(stt); }
  respon = await fetch("https://smsisrelat.amil.com.br/DXR.axd?r=1_4-ldDTl", {

    "body": null,
    "method": "GET"
  }); htmlBrute = await respon.text(); if (htmlBrute.includes('GradeDetalhado')) { log('found'); } else { stt = await respon.status; log(stt); }
  respon = await fetch("https://smsisrelat.amil.com.br/DXR.axd?r=0_3203-ldDTl", {

    "body": null,
    "method": "GET"
  }); htmlBrute = await respon.text(); if (htmlBrute.includes('GradeDetalhado')) { log('found'); } else { stt = await respon.status; log(stt); }

  respon = await fetch("https://smsisrelat.amil.com.br/WebResource.axd?d=pynGkmcFUV13He1Qd6_TZJ-NCRBZkzqxJWA5SOy_xIF7yvvlDp1S1PoeeuGNPTa7Rm6T1Q2&t=637811621229275428", {
    "headers": {
      "sec-ch-ua": "\"Chromium\";v=\"110\", \"Not A(Brand\";v=\"24\", \"Google Chrome\";v=\"110\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"Linux\"",
      "Referer": "https://smsisrelat.amil.com.br/SisRim/MedicalIndicators.aspx",
      "Referrer-Policy": "strict-origin-when-cross-origin"
    },
    "body": null,
    "method": "GET"
  }); htmlBrute = await respon.text(); if (htmlBrute.includes('GradeDetalhado')) { log('found'); } else { stt = await respon.status; log(stt); }
  respon = await fetch("https://smsisrelat.amil.com.br/ScriptResource.axd?d=x6wALODbMJK5e0eRC_p1LSLkF2JAvbyhHnSErUI9A7GvphU962Z49ErAHL3oXGIFFDpo63QHZCCO9xQjcyVWQSgG_Z9mT4JNQYMSnAtJTg6ftNBC0&t=51e37521", {
    "headers": {
      "sec-ch-ua": "\"Chromium\";v=\"110\", \"Not A(Brand\";v=\"24\", \"Google Chrome\";v=\"110\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"Linux\"",
      "Referer": "https://smsisrelat.amil.com.br/SisRim/MedicalIndicators.aspx",
      "Referrer-Policy": "strict-origin-when-cross-origin"
    },
    "body": null,
    "method": "GET"
  }); htmlBrute = await respon.text(); if (htmlBrute.includes('GradeDetalhado')) { log('found'); } else { stt = await respon.status; log(stt); }
  respon = await fetch("https://smsisrelat.amil.com.br/ScriptResource.axd?d=P5lTttoqSeZXoYRLQMIScLHEFC7cCHe7UBFh48hKlOZ4w0jJGsXM2KWx8GfN61QgNGsyfDpCawjKV9aBWOvW2n8MphN98KWKmj1JuRIfx4XI7UtB0&t=51e37521", {
    "headers": {
      "sec-ch-ua": "\"Chromium\";v=\"110\", \"Not A(Brand\";v=\"24\", \"Google Chrome\";v=\"110\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"Linux\"",
      "Referer": "https://smsisrelat.amil.com.br/SisRim/MedicalIndicators.aspx",
      "Referrer-Policy": "strict-origin-when-cross-origin"
    },
    "body": null,
    "method": "GET"
  }); htmlBrute = await respon.text(); if (htmlBrute.includes('GradeDetalhado')) { log('found'); } else { stt = await respon.status; log(stt); }
  respon = await fetch("https://smsisrelat.amil.com.br/SisRim/MedicalIndicators.aspx?_TSM_CombinedScripts_=True&v=ZaMfZ6yYhPPHZ1NeEf8j6-t902-6pHpn2MehV0eep-I1&_TSM_Bundles_=&cdn=False", {
    "headers": {
      "sec-ch-ua": "\"Chromium\";v=\"110\", \"Not A(Brand\";v=\"24\", \"Google Chrome\";v=\"110\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"Linux\"",
      "Referer": "https://smsisrelat.amil.com.br/SisRim/MedicalIndicators.aspx",
      "Referrer-Policy": "strict-origin-when-cross-origin"
    },
    "body": null,
    "method": "GET"
  }); htmlBrute = await respon.text(); if (htmlBrute.includes('GradeDetalhado')) { log('found'); } else { stt = await respon.status; log(stt); }
  respon = await fetch("https://smsisrelat.amil.com.br/ScriptResource.axd?d=XGoPW3Unw0ILT0eb9sSUa9boiaUQ7Xzl9LDyyg0rUN4-dRJaByhjA1tEboEMA8CSzk8AwlFeOOyIESJH4odJcIfynTlXYhFaNo4tO-DpDATNf8vRaeSv8XxGYf9Qzfp-YyGpLA2&t=51e37521", {
    "headers": {
      "sec-ch-ua": "\"Chromium\";v=\"110\", \"Not A(Brand\";v=\"24\", \"Google Chrome\";v=\"110\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"Linux\"",
      "Referer": "https://smsisrelat.amil.com.br/SisRim/MedicalIndicators.aspx",
      "Referrer-Policy": "strict-origin-when-cross-origin"
    },
    "body": null,
    "method": "GET"
  }); htmlBrute = await respon.text(); if (htmlBrute.includes('GradeDetalhado')) { log('found'); } else { stt = await respon.status; log(stt); }
  respon = await fetch("https://smsisrelat.amil.com.br/ScriptResource.axd?d=uvA9ANM76Fbpm1FfUlagnZQfFJBWj22paCui0TGswoZd0W4_PQWTx5dOrN3pAqoRAbUkjF5sfPInqOYY7Nq3x9YM8pyZJ-TG-WVQNn0OV1ZmcY7Egig3YHctwX30YInD80cZWQ2&t=51e37521", {
    "headers": {
      "sec-ch-ua": "\"Chromium\";v=\"110\", \"Not A(Brand\";v=\"24\", \"Google Chrome\";v=\"110\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"Linux\"",
      "Referer": "https://smsisrelat.amil.com.br/SisRim/MedicalIndicators.aspx",
      "Referrer-Policy": "strict-origin-when-cross-origin"
    },
    "body": null,
    "method": "GET"
  }); htmlBrute = await respon.text(); if (htmlBrute.includes('GradeDetalhado')) { log('found'); } else { stt = await respon.status; log(stt); }

  respon = await fetch("https://smsisrelat.amil.com.br/DXR.axd?r=1_142-ldDTl", {
    "headers": {
      "sec-ch-ua": "\"Chromium\";v=\"110\", \"Not A(Brand\";v=\"24\", \"Google Chrome\";v=\"110\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"Linux\"",
      "Referer": "https://smsisrelat.amil.com.br/SisRim/MedicalIndicators.aspx",
      "Referrer-Policy": "strict-origin-when-cross-origin"
    },
    "body": null,
    "method": "GET"
  }); htmlBrute = await respon.text(); if (htmlBrute.includes('GradeDetalhado')) { log('found'); } else { stt = await respon.status; log(stt); }
  respon = await fetch("https://smsisrelat.amil.com.br/DXR.axd?r=1_80-ldDTl", {
    "headers": {
      "sec-ch-ua": "\"Chromium\";v=\"110\", \"Not A(Brand\";v=\"24\", \"Google Chrome\";v=\"110\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"Linux\"",
      "Referer": "https://smsisrelat.amil.com.br/SisRim/MedicalIndicators.aspx",
      "Referrer-Policy": "strict-origin-when-cross-origin"
    },
    "body": null,
    "method": "GET"
  }); htmlBrute = await respon.text(); if (htmlBrute.includes('GradeDetalhado')) { log('found'); } else { stt = await respon.status; log(stt); }
  respon = await fetch("https://smsisrelat.amil.com.br/DXR.axd?r=1_135-ldDTl", {
    "headers": {
      "sec-ch-ua": "\"Chromium\";v=\"110\", \"Not A(Brand\";v=\"24\", \"Google Chrome\";v=\"110\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"Linux\"",
      "Referer": "https://smsisrelat.amil.com.br/SisRim/MedicalIndicators.aspx",
      "Referrer-Policy": "strict-origin-when-cross-origin"
    },
    "body": null,
    "method": "GET"
  }); htmlBrute = await respon.text(); if (htmlBrute.includes('GradeDetalhado')) { log('found'); } else { stt = await respon.status; log(stt); }
  respon = await fetch("https://smsisrelat.amil.com.br/DXR.axd?r=1_90-ldDTl", {
    "headers": {
      "sec-ch-ua": "\"Chromium\";v=\"110\", \"Not A(Brand\";v=\"24\", \"Google Chrome\";v=\"110\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"Linux\"",
      "Referer": "https://smsisrelat.amil.com.br/SisRim/MedicalIndicators.aspx",
      "Referrer-Policy": "strict-origin-when-cross-origin"
    },
    "body": null,
    "method": "GET"
  }); htmlBrute = await respon.text(); if (htmlBrute.includes('GradeDetalhado')) { log('found'); } else { stt = await respon.status; log(stt); }
  respon = await fetch("https://smsisrelat.amil.com.br/DXR.axd?r=1_113-ldDTl", {
    "headers": {
      "sec-ch-ua": "\"Chromium\";v=\"110\", \"Not A(Brand\";v=\"24\", \"Google Chrome\";v=\"110\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"Linux\"",
      "Referer": "https://smsisrelat.amil.com.br/SisRim/MedicalIndicators.aspx",
      "Referrer-Policy": "strict-origin-when-cross-origin"
    },
    "body": null,
    "method": "GET"
  }); htmlBrute = await respon.text(); if (htmlBrute.includes('GradeDetalhado')) { log('found'); } else { stt = await respon.status; log(stt); }
  respon = await fetch("https://smsisrelat.amil.com.br/DXR.axd?r=1_98-ldDTl", {
    "headers": {
      "sec-ch-ua": "\"Chromium\";v=\"110\", \"Not A(Brand\";v=\"24\", \"Google Chrome\";v=\"110\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"Linux\"",
      "Referer": "https://smsisrelat.amil.com.br/SisRim/MedicalIndicators.aspx",
      "Referrer-Policy": "strict-origin-when-cross-origin"
    },
    "body": null,
    "method": "GET"
  }); htmlBrute = await respon.text(); if (htmlBrute.includes('GradeDetalhado')) { log('found'); } else { stt = await respon.status; log(stt); }

  respon = await fetch("https://smsisrelat.amil.com.br/DXR.axd?r=1_105-ldDTl", {
    "headers": {
      "sec-ch-ua": "\"Chromium\";v=\"110\", \"Not A(Brand\";v=\"24\", \"Google Chrome\";v=\"110\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"Linux\"",
      "Referer": "https://smsisrelat.amil.com.br/SisRim/MedicalIndicators.aspx",
      "Referrer-Policy": "strict-origin-when-cross-origin"
    },
    "body": null,
    "method": "GET"
  }); htmlBrute = await respon.text(); if (htmlBrute.includes('GradeDetalhado')) { log('found'); } else { stt = await respon.status; log(stt); }

  respon = await fetch("https://smsisrelat.amil.com.br/DXR.axd?r=1_9-ldDTl", {
    "headers": {
      "sec-ch-ua": "\"Chromium\";v=\"110\", \"Not A(Brand\";v=\"24\", \"Google Chrome\";v=\"110\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"Linux\"",
      "Referer": "https://smsisrelat.amil.com.br/SisRim/MedicalIndicators.aspx",
      "Referrer-Policy": "strict-origin-when-cross-origin"
    },
    "body": null,
    "method": "GET"
  }); htmlBrute = await respon.text(); if (htmlBrute.includes('GradeDetalhado')) { log('found'); } else { stt = await respon.status; log(stt); }

  respon = await fetch("https://smsisrelat.amil.com.br/DXR.axd?r=0_3206-ldDTl", {
    "headers": {
      "sec-ch-ua": "\"Chromium\";v=\"110\", \"Not A(Brand\";v=\"24\", \"Google Chrome\";v=\"110\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"Linux\"",
      "Referer": "https://smsisrelat.amil.com.br/SisRim/MedicalIndicators.aspx",
      "Referrer-Policy": "strict-origin-when-cross-origin"
    },
    "body": null,
    "method": "GET"
  }); htmlBrute = await respon.text(); if (htmlBrute.includes('GradeDetalhado')) { log('found'); } else { stt = await respon.status; log(stt); }

  respon = await fetch("https://smsisrelat.amil.com.br/DXR.axd?r=0_3209-ldDTl", {
    "headers": {
      "sec-ch-ua": "\"Chromium\";v=\"110\", \"Not A(Brand\";v=\"24\", \"Google Chrome\";v=\"110\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"Linux\"",
      "Referer": "https://smsisrelat.amil.com.br/DXR.axd?r=0_3207-ldDTl",
      "Referrer-Policy": "strict-origin-when-cross-origin"
    },
    "body": null,
    "method": "GET"
  });
  const responfinal = await fetch("https://smsisrelat.amil.com.br/SisRim/MedicalIndicators.aspx", {
    "headers": {
      "sec-ch-ua": "\"Chromium\";v=\"110\", \"Not A(Brand\";v=\"24\", \"Google Chrome\";v=\"110\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"Linux\"",
      "Upgrade-Insecure-Requests": "1",
      "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36",
      "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
      "Sec-Fetch-Site": "same-origin",
      "Sec-Fetch-Mode": "navigate",
      "Sec-Fetch-User": "?1",
      "Sec-Fetch-Dest": "document",
      "Referer": "https://smsisrelat.amil.com.br/SisRim/MedicalIndicators.aspx",
      "Accept-Encoding": "gzip, deflate, br",
      "Accept-Language": "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7",
      "Cookie": "ASP.NET_SessionId=" + sessionID + "; BIGipServer~DMZ-WEB~pool_apoiosismed_relatwebserver_80=rd10o00000000000000000000ffff0a68aa23o80; __utma=127847055.1861514119.1678292293.1678292293.1678292293.1; __utmc=127847055; __utmz=127847055.1678292293.1.1.utmcsr=(direct)|utmccn=(direct)|utmcmd=(none); __utmt=1; __utmb=127847055.3.10.1678292293"
    },
    "body": null,
    "method": "GET"
  });

  const htmlFinal = await responfinal.text()

  require("fs").writeFileSync("htmlBrute3.html", htmlBruteFinal);

  const htmlObject = new JSDOM(htmlBruteFinal)
  const viewState = (htmlObject.window.document.querySelector("input#__VIEWSTATE").getAttribute("value")).toString();
  const tsmHiddenField = (htmlObject.window.document.querySelector("input#_TSM_HiddenField_").getAttribute("value")).toString();
  const viewStateGenerator = (htmlObject.window.document.querySelector("input#__VIEWSTATEGENERATOR").getAttribute("value")).toString();
  const eventValidation = (htmlObject.window.document.querySelector("input#__EVENTVALIDATION").getAttribute("value")).toString();
  const gradeCallbackState = (htmlObject.window.document.querySelector(`input#ctl00_ctl00_cphBodyBranco_cphBodyFormatada_GradeDetalhado_CallbackState`).getAttribute("value")).toString();
  let form3 = new URLSearchParams();
  form3.append("__LASTFOCUS", "");
  form3.append("_TSM_HiddenField_", tsmHiddenField);
  form3.append("__EVENTTARGET", "ctl00$ctl00$cphBodyBranco$cphBodyFormatada$hplExportarExcel");
  form3.append("__EVENTARGUMENT", "");
  form3.append("__VIEWSTATE", viewState);
  form3.append("__VIEWSTATEGENERATOR", viewStateGenerator);
  form3.append("__EVENTVALIDATION", eventValidation);
  form3.append("ctl00$ctl00$cphBodyBranco$cphBodyFormatada$GradeDetalhado$DXSelInput", "");
  form3.append("ctl00$ctl00$cphBodyBranco$cphBodyFormatada$GradeDetalhado$DXKVInput", "[]");
  form3.append("ctl00$ctl00$cphBodyBranco$cphBodyFormatada$GradeDetalhado$CallbackState", gradeCallbackState);
  form3.append("DXScript", "1_142,C1_80,C1_135,C1_90,C1_113,C1_98,C1_105");

  const response = await fetch("https://smsisrelat.amil.com.br/SisRim/MedicalIndicators.aspx", {
    "headers": {
      "Cache-Control": "max-age=0",
      "sec-ch-ua": "\"Chromium\";v=\"110\", \"Not A(Brand\";v=\"24\", \"Google Chrome\";v=\"110\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"Linux\"",
      "Upgrade-Insecure-Requests": "1",
      "Origin": "https://smsisrelat.amil.com.br",
      "Content-Type": "application/x-www-form-urlencoded",
      "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36",
      "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
      "Sec-Fetch-Site": "same-origin",
      "Sec-Fetch-Mode": "navigate",
      "Sec-Fetch-User": "?1",
      "Sec-Fetch-Dest": "document",
      "Referer": "https://smsisrelat.amil.com.br/SisRim/MedicalIndicators.aspx",
      "Accept-Encoding": "gzip, deflate, br",
      "Accept-Language": "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7",
      "Cookie": "ASP.NET_SessionId=" + sessionID + "; BIGipServer~DMZ-WEB~pool_apoiosismed_relatwebserver_80=rd10o00000000000000000000ffff0a68aa24o80; __utma=127847055.1310801329.1678205418.1678205418.1678205418.1; __utmc=127847055; __utmz=127847055.1678205418.1.1.utmcsr=(direct)|utmccn=(direct)|utmcmd=(none); __utmt=1; __utmb=127847055.4.10.1678205418"
    },
    "body": form3,
    "method": "POST"
  });

  log(response.status)
  const report = await response.arrayBuffer();
  require("fs").writeFileSync("relatorio novo 07032023.xlsx", Buffer.from(report));


}
