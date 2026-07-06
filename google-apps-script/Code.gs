const SPREADSHEET_ID = "1w4MbvvDKK9FnlnYiqMWqNTLrCa1J5yj-n9c3FOd99nU";
const DRIVE_FOLDER_ID = "1EkacVrXtSINEmaaaXRoiCuRb4qQ6g_sA";
const PLEDGE_FOLDER_NAME = "서약서";

const APPLICATION_SHEET = "Applications";
const SCHEDULE_SHEET = "Schedule";
const API_VERSION = "2026-07-07-readable-file-names";

const APPLICATION_HEADERS = [
  "id",
  "createdAt",
  "status",
  "paymentStatus",
  "musicStatus",
  "participantType",
  "country",
  "division",
  "entryType",
  "athleteName",
  "englishName",
  "birthDate",
  "email",
  "phone",
  "organization",
  "coachName",
  "coachPhone",
  "athletes",
  "groupCategory",
  "customEvents",
  "judgeName",
  "judgeGrade",
  "judgeOrganization",
  "judgeEmail",
  "routines",
  "apparatus",
  "photoOptions",
  "videoOptions",
  "musicFileName",
  "musicFileUrl",
  "adminMemo",
  "updatedAt",
  "pledgeStatus",
  "pledgeFileName",
  "pledgeFileUrl"
];

const SCHEDULE_HEADERS = [
  "id",
  "email",
  "athleteName",
  "date",
  "time",
  "label",
  "location",
  "memo",
  "isPublic",
  "updatedAt"
];

function doGet(e) {
  return handleRequest(e, "GET");
}

function doPost(e) {
  return handleRequest(e, "POST");
}

function handleRequest(e, method) {
  try {
    const payload = method === "POST" ? JSON.parse(e.postData.contents || "{}") : queryPayload(e);
    if (payload.action === "health") {
      return jsonResponse({
        ok: true,
        version: API_VERSION,
        spreadsheetId: SPREADSHEET_ID,
        applicationsSheet: APPLICATION_SHEET
      });
    }
    if (payload.action === "submitApplication") {
      return jsonResponse(submitApplication(payload.application, payload.musicFile, payload.pledgeFile));
    }
    if (payload.action === "lookupApplication") {
      return jsonResponse(lookupApplication(payload.email));
    }
    if (payload.action === "getSchedule") {
      return jsonResponse(getSchedule(payload.query));
    }
    if (payload.action === "getPublicSchedule") {
      return jsonResponse(getPublicSchedule());
    }
    return jsonResponse({ ok: false, error: "Unknown action" });
  } catch (error) {
    return jsonResponse({ ok: false, error: String(error && error.message ? error.message : error) });
  }
}

function queryPayload(e) {
  const params = e && e.parameter ? e.parameter : {};
  return {
    action: params.action || "health",
    email: params.email || "",
    query: params.query || ""
  };
}

function submitApplication(application, musicFile, pledgeFile) {
  const validation = validateApplication(application, pledgeFile);
  if (!validation.ok) {
    return { ok: false, error: validation.error };
  }

  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  const sheet = ensureSheet(ss, APPLICATION_SHEET, APPLICATION_HEADERS);
  const now = new Date().toISOString();
  const id = application.id || `KHU-2026-${Date.now().toString().slice(-6)}`;
  const pledge = savePledgeFile(id, application, pledgeFile);
  const music = saveMusicFile(id, application, musicFile);

  const rowObject = {
    id,
    createdAt: application.createdAt || now.slice(0, 10),
    status: application.status || "접수대기",
    paymentStatus: application.paymentStatus || "미확인",
    musicStatus: music.url ? "확인중" : "미제출",
    participantType: application.participantType || "",
    country: application.country || "",
    division: application.division || "",
    entryType: application.entryType || "",
    athleteName: application.athleteName || "",
    englishName: application.englishName || "",
    birthDate: application.birthDate || "",
    email: application.email || "",
    phone: application.phone || "",
    organization: application.organization || "",
    coachName: application.coachName || "",
    coachPhone: application.coachPhone || "",
    athletes: JSON.stringify(application.athletes || []),
    groupCategory: application.groupCategory || "",
    customEvents: stringifyList(application.customEvents),
    judgeName: application.judgeName || "",
    judgeGrade: application.judgeGrade || "",
    judgeOrganization: application.judgeOrganization || "",
    judgeEmail: application.judgeEmail || "",
    routines: stringifyList(application.routines),
    apparatus: stringifyList(application.apparatus),
    photoOptions: stringifyList(application.photoOptions),
    videoOptions: stringifyList(application.videoOptions),
    pledgeStatus: pledge.url ? "제출완료" : "미제출",
    pledgeFileName: pledge.name || application.pledgeFileName || "",
    pledgeFileUrl: pledge.url || "",
    musicFileName: music.name || application.musicFileName || "",
    musicFileUrl: music.url || "",
    adminMemo: application.adminMemo || "운영진 확인 전",
    updatedAt: now
  };

  sheet.appendRow(APPLICATION_HEADERS.map((header) => rowObject[header] || ""));
  sendConfirmationEmail(rowObject);

  return {
    ok: true,
    version: API_VERSION,
    application: {
      id,
      status: rowObject.status,
      paymentStatus: rowObject.paymentStatus,
      musicStatus: rowObject.musicStatus,
      pledgeFileUrl: rowObject.pledgeFileUrl,
      musicFileUrl: rowObject.musicFileUrl
    }
  };
}

function sendConfirmationEmail(application) {
  if (!application.email) return;

  const subject = "[경희대학교 총장배 국제 리듬체조 대회] 신청 접수 안내";
  const body = [
    `${application.athleteName || "참가자"} 님,`,
    "",
    "경희대학교 총장배 국제 리듬체조 대회 신청이 접수되었습니다.",
    "",
    `신청 상태: ${application.status}`,
    `입금 상태: ${application.paymentStatus}`,
    `서약서 상태: ${application.pledgeStatus}`,
    `음악 상태: ${application.musicStatus}`,
    "",
    "신청 확인 페이지에서 이메일을 입력하면 신청 상태와 개인 일정표를 확인할 수 있습니다.",
    "",
    "감사합니다.",
    "경희대학교 총장배 국제 리듬체조 대회 운영사무국"
  ].join("\n");

  try {
    MailApp.sendEmail({
      to: application.email,
      subject,
      body,
      name: "KHU President Cup RG"
    });
  } catch (error) {
    console.error(`Confirmation email failed for ${application.id}: ${error}`);
  }
}

function validateApplication(application, pledgeFile) {
  if (!application) {
    return { ok: false, error: "신청 데이터가 없습니다." };
  }

  if (!pledgeFile || !pledgeFile.base64) {
    return { ok: false, error: "서약서 파일을 업로드해야 합니다." };
  }

  const requiredFields = [
    ["participantType", "참가자 유형"],
    ["entryType", "신청 부문"],
    ["email", "이메일"],
  ];

  for (const [field, label] of requiredFields) {
    if (!String(application[field] || "").trim()) {
      return { ok: false, error: `${label} 항목이 누락되었습니다.` };
    }
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(application.email || "").trim())) {
    return { ok: false, error: "이메일 형식이 올바르지 않습니다." };
  }

  if (application.entryType === "심판 제출") {
    const judgeFields = [
      ["judgeName", "이름"],
      ["judgeGrade", "급수"],
      ["judgeOrganization", "소속명"],
      ["judgeEmail", "이메일"]
    ];

    for (const [field, label] of judgeFields) {
      if (!String(application[field] || "").trim()) {
        return { ok: false, error: `${label} 항목이 누락되었습니다.` };
      }
    }

    return { ok: true };
  }

  const competitorFields = [
    ["athleteName", "선수 이름"],
    ["birthDate", "생년월일"],
    ["phone", "연락처"],
    ["organization", "소속"],
    ["coachName", "지도자명"],
    ["coachPhone", "지도자 연락처"]
  ];

  for (const [field, label] of competitorFields) {
    if (!String(application[field] || "").trim()) {
      return { ok: false, error: `${label} 항목이 누락되었습니다.` };
    }
  }

  const athletes = Array.isArray(application.athletes) ? application.athletes : [];
  if (application.entryType === "단체/그룹" && athletes.length < 5) {
    return { ok: false, error: "단체/그룹은 선수 정보를 최소 5명 입력해야 합니다." };
  }

  const selectedEvents = []
    .concat(Array.isArray(application.routines) ? application.routines : [])
    .concat(Array.isArray(application.apparatus) ? application.apparatus : [])
    .concat(application.groupCategory ? [application.groupCategory] : [])
    .concat(Array.isArray(application.customEvents) ? application.customEvents : [])
    .filter((item) => String(item || "").trim());

  if (!selectedEvents.length) {
    return { ok: false, error: "참가 종목을 하나 이상 선택해야 합니다." };
  }

  return { ok: true };
}

function lookupApplication(email) {
  const normalizedEmail = normalize(email);
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  const applicationSheet = ensureSheet(ss, APPLICATION_SHEET, APPLICATION_HEADERS);
  const scheduleSheet = ensureSheet(ss, SCHEDULE_SHEET, SCHEDULE_HEADERS);
  const rows = readObjects(applicationSheet);
  const applications = rows.filter((row) => {
    return normalize(row.email) === normalizedEmail;
  });

  const scheduleRows = readObjects(scheduleSheet);
  const enriched = applications.map((application) => {
    const schedule = scheduleRows.filter((row) => {
      return normalize(row.id) === normalize(application.id) || normalize(row.email) === normalize(application.email);
    });

    return {
      ...application,
      athletes: parseJsonList(application.athletes),
      customEvents: parseList(application.customEvents),
      routines: parseList(application.routines),
      apparatus: parseList(application.apparatus),
      photoOptions: parseList(application.photoOptions),
      videoOptions: parseList(application.videoOptions),
      schedule
    };
  });

  return {
    ok: true,
    version: API_VERSION,
    applications: enriched,
    debug: {
      queryEmail: normalizedEmail,
      totalRows: rows.length,
      matchedRows: enriched.length,
      availableEmails: rows.map((row) => maskEmail(row.email)).filter(Boolean).slice(-10)
    }
  };
}

function getSchedule(query) {
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  const sheet = ensureSheet(ss, SCHEDULE_SHEET, SCHEDULE_HEADERS);
  const normalized = normalize(query);
  const schedule = readObjects(sheet).filter((row) => {
    return normalize(row.id) === normalized || normalize(row.email) === normalized;
  });
  return { ok: true, version: API_VERSION, schedule };
}

function getPublicSchedule() {
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  const sheet = ensureSheet(ss, SCHEDULE_SHEET, SCHEDULE_HEADERS);
  const schedule = readObjects(sheet)
    .filter((row) => String(row.isPublic || "").toLowerCase() !== "false")
    .sort((a, b) => {
      const left = `${a.date || ""} ${a.time || ""}`;
      const right = `${b.date || ""} ${b.time || ""}`;
      return left.localeCompare(right);
    });
  return { ok: true, version: API_VERSION, schedule };
}

function savePledgeFile(id, application, pledgeFile) {
  if (!pledgeFile || !pledgeFile.base64) {
    return { name: "", url: "" };
  }

  const musicFolder = DriveApp.getFolderById(DRIVE_FOLDER_ID);
  const parentFolder = getParentFolder(musicFolder);
  const folder = getOrCreateSubfolder(parentFolder, PLEDGE_FOLDER_NAME);
  const bytes = Utilities.base64Decode(pledgeFile.base64);
  const safeFileName = buildSubmissionFileName(id, application, "서약서", pledgeFile.name || "pledge");
  const blob = Utilities.newBlob(bytes, pledgeFile.mimeType || "application/octet-stream", safeFileName);
  const file = folder.createFile(blob);
  return { name: file.getName(), url: file.getUrl() };
}

function saveMusicFile(id, application, musicFile) {
  if (!musicFile || !musicFile.base64) {
    return { name: "", url: "" };
  }

  const folder = DriveApp.getFolderById(DRIVE_FOLDER_ID);
  const bytes = Utilities.base64Decode(musicFile.base64);
  const safeFileName = buildSubmissionFileName(id, application, "음악", musicFile.name || "music");
  const blob = Utilities.newBlob(bytes, musicFile.mimeType || "application/octet-stream", safeFileName);
  const file = folder.createFile(blob);
  return { name: file.getName(), url: file.getUrl() };
}

function buildSubmissionFileName(id, application, fileKind, originalName) {
  const team = application.organization || application.judgeOrganization || "소속없음";
  const athlete = application.athleteName || application.judgeName || application.englishName || "참가자";
  const entryType = application.entryType || application.division || "신청";
  const parts = [team, athlete, entryType, fileKind, id, originalName];
  return parts.map((part) => sanitizeFileNamePart(part)).filter(Boolean).join("_");
}

function sanitizeFileNamePart(value) {
  return sanitizeFileName(value).replace(/\s+/g, " ").trim() || "미입력";
}

function getOrCreateSubfolder(parentFolder, name) {
  const folders = parentFolder.getFoldersByName(name);
  return folders.hasNext() ? folders.next() : parentFolder.createFolder(name);
}

function getParentFolder(folder) {
  const parents = folder.getParents();
  return parents.hasNext() ? parents.next() : folder;
}

function ensureSheet(ss, name, headers) {
  const sheet = ss.getSheetByName(name) || ss.insertSheet(name);
  const existing = sheet.getRange(1, 1, 1, Math.max(headers.length, sheet.getLastColumn() || 1)).getValues()[0];
  const needsHeaders = headers.some((header, index) => existing[index] !== header);
  if (needsHeaders) {
    sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  }
  return sheet;
}

function readObjects(sheet) {
  const lastRow = sheet.getLastRow();
  const lastColumn = sheet.getLastColumn();
  if (lastRow < 2 || lastColumn < 1) return [];

  const values = sheet.getRange(1, 1, lastRow, lastColumn).getValues();
  const headers = values.shift();

  return values
    .filter((row) => row.some((cell) => cell !== ""))
    .map((row) => {
      const object = {};
      headers.forEach((header, index) => {
        const key = String(header || "").trim();
        if (key) object[key] = formatSheetValue(key, row[index]);
      });
      return object;
    });
}

function formatSheetValue(key, value) {
  if (Object.prototype.toString.call(value) === "[object Date]" && !isNaN(value)) {
    const timezone = Session.getScriptTimeZone() || "Asia/Seoul";

    if (key === "date" || key === "birthDate") {
      return Utilities.formatDate(value, timezone, "yyyy-MM-dd");
    }

    if (key === "time") {
      return Utilities.formatDate(value, timezone, "HH:mm");
    }

    if (key === "createdAt" || key === "updatedAt") {
      return Utilities.formatDate(value, timezone, "yyyy-MM-dd HH:mm:ss");
    }

    return Utilities.formatDate(value, timezone, "yyyy-MM-dd HH:mm:ss");
  }

  return value;
}

function stringifyList(value) {
  return Array.isArray(value) ? value.join(", ") : value || "";
}

function parseList(value) {
  return String(value || "")
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

function parseJsonList(value) {
  try {
    const parsed = JSON.parse(String(value || "[]"));
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    return [];
  }
}

function normalize(value) {
  return String(value || "").trim().toLowerCase();
}

function sanitizeFileName(value) {
  return String(value || "").replace(/[\\/:*?"<>|#%{}$!'@+`=]/g, "_");
}

function maskEmail(value) {
  const email = normalize(value);
  if (!email) return "";
  const parts = email.split("@");
  if (parts.length !== 2) return email.slice(0, 2) + "***";
  return `${parts[0].slice(0, 2)}***@${parts[1]}`;
}

function jsonResponse(payload) {
  return ContentService.createTextOutput(JSON.stringify(payload)).setMimeType(ContentService.MimeType.JSON);
}
