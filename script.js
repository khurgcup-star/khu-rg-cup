const STORAGE_KEY = "khu-president-cup-applications";
const LANGUAGE_KEY = "khu-president-cup-language";

const phraseMap = {
  "대회 안내": "Guide",
  "신규 신청": "New Application",
  "신청 확인": "Check Application",
  "일정표": "Schedule",
  "메뉴 열기": "Open menu",
  "모바일 메뉴": "Mobile menu",
  "주요 메뉴": "Main menu",
  "홈으로 이동": "Go home",
  "경희대학교 총장배 리듬체조 대회": "Kyung Hee University President's Cup Rhythmic Gymnastics",
  "신청, 종목 선택, 촬영 옵션, 음악 제출, 접수 확인까지 분리된 페이지에서 처리합니다.": "Apply, choose events, request photo or video options, submit music, and check application status through separate pages.",
  "대회일": "Event Date",
  "장소": "Venue",
  "경희대학교 체육관": "Kyung Hee University Gymnasium",
  "신청 마감": "Application Deadline",
  "조회 방식": "Lookup Method",
  "전체 일정": "Full Schedule",
  "일정표 보기": "View Schedule",
  "이메일": "Email",
  "신청은 단계별 화면으로 받습니다": "Applications Are Collected Step by Step",
  "참가 유형, 대회 부문, 참가 형태, 참가자 정보, 종목, 촬영 및 음악 파일을 순서대로 입력합니다.": "Enter participant type, division, entry type, athlete information, events, media options, and music files in order.",
  "이메일로 신청 내역과 접수 상태를 조회합니다.": "Check application details and status with an email address.",
  "확정 상태는 데이터로 관리합니다": "Confirmation Status Is Managed as Data",
  "실제 운영에서는 신청 폼 데이터를 Google Sheets, Airtable, Supabase 같은 저장소로 받고, 운영자가 상태를 접수대기, 결제확인, 확정, 보완요청으로 바꿉니다.": "For live operation, form submissions should be stored in Google Sheets, Airtable, Supabase, or a similar database. Staff then update the status to pending, payment confirmed, confirmed, or needs revision.",
  "확정": "Confirmed",
  "윤시연": "Yun Siyeon",
  "부문": "Division",
  "종목": "Events",
  "지도자": "Coach",
  "대회 관련 문의": "Event Inquiry",
  "문의하기": "Contact",
  "대회 운영 현황": "Competition Operations",
  "전체 일정표": "Full Schedule",
  "운영진이 Google Sheet의 Schedule 시트를 업데이트하면 이 페이지에 전체 일정이 표시됩니다. 개인별 상세 일정은 신청 확인 페이지에서 확인할 수 있습니다.": "When staff update the Schedule sheet in Google Sheets, the full schedule appears on this page. Personal schedules are available on the check application page.",
  "일정을 불러오는 중입니다.": "Loading schedule.",
  "Google Sheet 연동 후 자동 표시됩니다.": "This appears automatically after Google Sheets is connected.",

  "신청 메뉴": "Application Menu",
  "신청 단계": "Application Steps",
  "참가유형": "Participant Type",
  "대회부문": "Division",
  "참가형태": "Entry Type",
  "참가자정보": "Participant Info",
  "종목선택": "Events",
  "추가옵션": "Options",
  "동의 & 확인": "Consent & Review",
  "참가자 유형 선택": "Select Participant Type",
  "국내 참가자": "Korean Participant",
  "대회 부문 선택": "Select Division",
  "리듬체조 선수부문": "Rhythmic Gymnastics Athlete Division",
  "비선수 부문": "Non-athlete Division",
  "성인부": "Adult",
  "성인 참가자 부문": "Adult Participant Division",
  "갈라 공연 부문": "Gala Performance Division",
  "참가형태 선택": "Select Entry Type",
  "개인": "Individual",
  "1인 참가": "Individual entry",
  "그룹 / 단체": "Group / Team",
  "5-6명 팀 참가": "5-6 member team entry",
  "참가자 정보 입력": "Enter Participant Information",
  "선수 정보": "Athlete Information",
  "선수 이름 *": "Athlete Name *",
  "선수 이름": "Athlete name",
  "영문 이름 *": "English Name *",
  "영문 이름": "English name",
  "국가 / 국적 *": "Country / Nationality *",
  "국가 / 국적": "Country / nationality",
  "생년월일 *": "Date of Birth *",
  "연락처 *": "Phone *",
  "이메일 *": "Email *",
  "소속 팀/학원 *": "Team / Club *",
  "소속 팀/학원": "Team / club",
  "지도자 정보": "Coach Information",
  "지도자명 *": "Coach Name *",
  "지도자명": "Coach name",
  "지도자 연락처 *": "Coach Phone *",
  "종목 선택": "Select Events",
  "규정 종목": "Required / Program Events",
  "자유 종목": "Free Events",
  "후프": "Hoop",
  "볼": "Ball",
  "곤봉": "Clubs",
  "리본": "Ribbon",
  "줄": "Rope",
  "맨손자유": "Freehand",
  "추가 옵션": "Additional Options",
  "사진 촬영 신청": "Photo Request",
  "영상 촬영 신청": "Video Request",
  "음악 파일 제출": "Music File Submission",
  "MP3, WAV, M4A 파일을 업로드하세요. 실제 운영 시 파일은 Jotform 또는 서버 저장소로 전송됩니다.": "Upload an MP3, WAV, or M4A file. In live operation, files should be sent to Jotform or a server storage.",
  "클릭하여 파일 선택": "Click to choose a file",
  "선택된 파일 없음": "No file selected",
  "동의 및 확인": "Consent and Review",
  "개인정보 수집 및 이용에 동의합니다.": "I agree to the collection and use of personal information.",
  "대회 사진 및 영상 촬영/활용 안내를 확인했습니다.": "I have reviewed the photo and video recording/use notice.",
  "대회 규정, 환불 규정, 안전 수칙을 확인했습니다.": "I have reviewed the competition rules, refund policy, and safety rules.",
  "← 이전": "← Back",
  "다음 →": "Next →",
  "신청 완료": "Submit Application",
  "확인 내용": "Review",
  "규정 종목 또는 자유 종목을 하나 이상 선택해주세요.": "Select at least one required/program event or free event.",
  "먼저 종목을 선택해주세요.": "Select events first.",
  "대한체조협회 맨손 규정": "KGA freehand program",
  "대한체조협회 수구 규정": "KGA apparatus program",
  "자유 종목 · 후프": "Free event · Hoop",
  "자유 종목 · 볼": "Free event · Ball",
  "자유 종목 · 곤봉": "Free event · Clubs",
  "자유 종목 · 리본": "Free event · Ribbon",
  "자유 종목 · 줄": "Free event · Rope",
  "자유 종목 · 맨손자유": "Free event · Freehand",
  "선택 종목": "Selected event",

  "신청 내역 조회": "Application Lookup",
  "조회": "Search",
  "신청할 때 입력한 이메일로 조회할 수 있습니다.": "Use the email address submitted with the application.",
  "대회 참가에 대해 궁금한 점이 있으시면 운영사무국으로 연락해주세요.": "Contact the event office if you have any questions about participation.",
  "참가유형": "Participant Type",
  "결제": "Payment",
  "운영 메모": "Admin Memo",
  "조회된 신청 내역이 없습니다.": "No application was found.",
  "조회된 신청 내역이 없습니다. 신청할 때 입력한 이메일과 같은지 확인해주세요.": "No application was found. Check that this is the same email used for the application.",

  "신규 신청 | 경희대학교 총장배 리듬체조 대회": "New Application | Kyung Hee University President's Cup Rhythmic Gymnastics",
  "신청 확인 | 경희대학교 총장배 리듬체조 대회": "Check Application | Kyung Hee University President's Cup Rhythmic Gymnastics",
  "일정표 | 경희대학교 총장배 리듬체조 대회": "Schedule | Kyung Hee University President's Cup Rhythmic Gymnastics"
};

const statusMap = {
  "접수대기": "Pending",
  "미확인": "Unconfirmed",
  "결제확인": "Payment Confirmed",
  "확정": "Confirmed",
  "보완요청": "Needs Revision",
  "확인중": "Checking",
  "확인완료": "Checked",
  "신청완료": "Application Complete",
  "미제출": "Not Submitted",
  "운영진 확인 전": "Awaiting staff review",
  "신청 확정": "Application confirmed"
};

const sampleApplications = [
  {
    id: "KHU-2026-0001",
    createdAt: "2026-04-25",
    status: "확정",
    participantType: "국내 참가자",
    country: "Korea",
    division: "Dreamer",
    entryType: "Individual",
    athleteName: "윤시연",
    englishName: "Yun Siyeon",
    birthDate: "",
    email: "gunhee121@naver.com",
    phone: "010-0000-0000",
    organization: "KHU RG",
    coachName: "송지영",
    coachPhone: "010-0000-0000",
    routines: ["Level 1", "Ball"],
    apparatus: ["Ball"],
    photoOptions: ["Level 1"],
    videoOptions: ["Ball"],
    musicFileName: "",
    paymentStatus: "결제확인",
    musicStatus: "확인완료",
    schedule: [
      {
        date: "2026-08-22",
        time: "10:30",
        label: "Warm-up",
        location: "Sub floor",
        memo: "Arrive 30 minutes early"
      },
      {
        date: "2026-08-22",
        time: "11:20",
        label: "Competition",
        location: "Main floor",
        memo: "Ball"
      }
    ],
    adminMemo: "신청 확정"
  }
];

function currentLanguage() {
  return localStorage.getItem(LANGUAGE_KEY) || "ko";
}

function translateText(text, lang = currentLanguage()) {
  if (lang === "ko") return text;
  return phraseMap[text] || statusMap[text] || text;
}

function translateDynamic(text) {
  return translateText(text);
}

function setupLanguageToggle() {
  document.querySelectorAll(".topbar").forEach((topbar) => {
    if (topbar.querySelector(".language-toggle")) return;
    const toggle = document.createElement("div");
    toggle.className = "language-toggle";
    toggle.setAttribute("aria-label", "Language");
    toggle.innerHTML = `
      <button type="button" data-language-option="ko">KO</button>
      <button type="button" data-language-option="en">EN</button>
    `;
    topbar.insertBefore(toggle, topbar.querySelector("[data-mobile-menu-button]"));
  });

  document.querySelectorAll("[data-language-option]").forEach((button) => {
    button.addEventListener("click", () => {
      localStorage.setItem(LANGUAGE_KEY, button.dataset.languageOption);
      document.dispatchEvent(new Event("languagechange"));
      applyTranslations();
    });
  });
}

function translateTextNodes(root, lang) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      if (!node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
      if (["SCRIPT", "STYLE"].includes(node.parentElement?.tagName)) return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    }
  });

  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);

  nodes.forEach((node) => {
    if (!node.sourceText) node.sourceText = node.nodeValue.trim();
    const leading = node.nodeValue.match(/^\s*/)?.[0] || "";
    const trailing = node.nodeValue.match(/\s*$/)?.[0] || "";
    node.nodeValue = `${leading}${translateText(node.sourceText, lang)}${trailing}`;
  });
}

function translateAttributes(lang) {
  document.querySelectorAll("[placeholder]").forEach((element) => {
    if (!element.dataset.sourcePlaceholder) element.dataset.sourcePlaceholder = element.getAttribute("placeholder");
    element.setAttribute("placeholder", translateText(element.dataset.sourcePlaceholder, lang));
  });

  document.querySelectorAll("[aria-label]").forEach((element) => {
    if (!element.dataset.sourceAriaLabel) element.dataset.sourceAriaLabel = element.getAttribute("aria-label");
    element.setAttribute("aria-label", translateText(element.dataset.sourceAriaLabel, lang));
  });
}

function updateLanguageButtons(lang) {
  document.querySelectorAll("[data-language-option]").forEach((button) => {
    button.classList.toggle("active", button.dataset.languageOption === lang);
  });
}

function applyTranslations() {
  const lang = currentLanguage();
  document.documentElement.lang = lang;
  translateTextNodes(document.body, lang);
  translateAttributes(lang);
  updateLanguageButtons(lang);

  const sourceTitle = document.titleSource || document.title;
  document.titleSource = sourceTitle;
  document.title = translateText(sourceTitle, lang);
}

const mobileButton = document.querySelector("[data-mobile-menu-button]");
const mobileMenu = document.querySelector("[data-mobile-menu]");
mobileButton?.addEventListener("click", () => mobileMenu?.classList.toggle("open"));

function apiConfig() {
  return window.KHU_CUP_CONFIG || {};
}

function hasRemoteApi() {
  const config = apiConfig();
  return Boolean(config.GOOGLE_APPS_SCRIPT_URL) && config.DEMO_MODE !== true;
}

async function callRemote(action, payload = {}) {
  const response = await fetch(apiConfig().GOOGLE_APPS_SCRIPT_URL, {
    method: "POST",
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify({ action, ...payload })
  });

  if (!response.ok) {
    throw new Error(`Google Apps Script request failed: ${response.status}`);
  }

  const result = await response.json();
  if (!result.ok) {
    throw new Error(result.error || "Google Apps Script returned an error.");
  }
  return result;
}

function readFileAsPayload(file) {
  return new Promise((resolve, reject) => {
    if (!file) {
      resolve(null);
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      const dataUrl = String(reader.result || "");
      const base64 = dataUrl.split(",")[1] || "";
      resolve({
        name: file.name,
        mimeType: file.type || "application/octet-stream",
        size: file.size,
        base64
      });
    };
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(file);
  });
}

function getStoredApplications() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
  } catch {
    return [];
  }
}

function saveApplication(application) {
  const applications = getStoredApplications();
  applications.unshift(application);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(applications));
}

function getAllApplications() {
  return [...getStoredApplications(), ...sampleApplications];
}

function getCheckedValues(form, name) {
  return Array.from(form.querySelectorAll(`input[name="${name}"]:checked`)).map((input) => input.value);
}

function getRadioValue(form, name) {
  return form.querySelector(`input[name="${name}"]:checked`)?.value || "";
}

function getSelectedEventValues(form) {
  return [...getCheckedValues(form, "routine"), ...getCheckedValues(form, "apparatus")];
}

function describeEvent(eventName) {
  const freeEvents = {
    Hoop: "자유 종목 · 후프",
    Ball: "자유 종목 · 볼",
    Clubs: "자유 종목 · 곤봉",
    Ribbon: "자유 종목 · 리본",
    Rope: "자유 종목 · 줄",
    FH: "자유 종목 · 맨손자유"
  };

  if (/^Level/.test(eventName)) {
    return "대한체조협회 맨손 규정";
  }

  if (["Hoop", "Ball", "Clubs", "Ribbon", "Rope"].includes(eventName)) {
    return "대한체조협회 수구 규정";
  }

  return freeEvents[eventName] || "선택 종목";
}

function syncMediaOptions(form) {
  const selectedEvents = getSelectedEventValues(form);
  const containers = Array.from(form.querySelectorAll("[data-dynamic-options]"));
  const summary = form.querySelector("[data-selected-event-summary]");

  if (summary) {
    summary.innerHTML = selectedEvents.length
      ? selectedEvents
          .map(
            (eventName) => `
              <article class="selected-event-card">
                <strong>${eventName}</strong>
                <span>${translateText(describeEvent(eventName))}</span>
              </article>
            `
          )
          .join("")
      : `<span class="empty-options">${translateText("먼저 종목을 선택해주세요.")}</span>`;
  }

  containers.forEach((container) => {
    const optionName = container.dataset.dynamicOptions;
    const previousValues = getCheckedValues(form, optionName);

    if (!selectedEvents.length) {
      container.innerHTML = `<span class="empty-options">${translateText("먼저 종목을 선택해주세요.")}</span>`;
      return;
    }

    container.innerHTML = selectedEvents
      .map((eventName) => {
        const checked = previousValues.includes(eventName) ? "checked" : "";
        return `
          <label class="media-option">
            <input type="checkbox" name="${optionName}" value="${eventName}" ${checked} />
            <span class="media-option-check"></span>
            <span class="media-option-copy">
              <strong>${eventName}</strong>
              <small>${translateText(describeEvent(eventName))}</small>
            </span>
          </label>
        `;
      })
      .join("");
  });
}

function createApplicationFromForm(form) {
  const formData = new FormData(form);
  const now = new Date();
  const id = `KHU-2026-${String(Date.now()).slice(-6)}`;
  const musicFile = form.querySelector('input[name="musicFile"]')?.files?.[0];

  return {
    id,
    createdAt: now.toISOString().slice(0, 10),
    status: "접수대기",
    participantType: getRadioValue(form, "participantType"),
    country: String(formData.get("country") || ""),
    division: getRadioValue(form, "division"),
    entryType: getRadioValue(form, "entryType"),
    athleteName: String(formData.get("athleteName") || ""),
    englishName: String(formData.get("englishName") || ""),
    birthDate: String(formData.get("birthDate") || ""),
    email: String(formData.get("email") || ""),
    phone: String(formData.get("phone") || ""),
    organization: String(formData.get("organization") || ""),
    coachName: String(formData.get("coachName") || ""),
    coachPhone: String(formData.get("coachPhone") || ""),
    routines: getCheckedValues(form, "routine"),
    apparatus: getCheckedValues(form, "apparatus"),
    photoOptions: getCheckedValues(form, "photoOptions"),
    videoOptions: getCheckedValues(form, "videoOptions"),
    musicFileName: musicFile?.name || "",
    musicFileSize: musicFile?.size || 0,
    paymentStatus: "미확인",
    musicStatus: musicFile ? "확인중" : "미제출",
    schedule: [],
    adminMemo: "운영진 확인 전"
  };
}

async function buildSubmissionPayload(form) {
  const application = createApplicationFromForm(form);
  const musicFile = form.querySelector('input[name="musicFile"]')?.files?.[0];
  const musicFilePayload = await readFileAsPayload(musicFile);
  return { application, musicFile: musicFilePayload };
}

function validateCurrentStep(form, stepIndex) {
  const step = form.querySelector(`[data-step="${stepIndex}"]`);
  const controls = Array.from(step.querySelectorAll("input, select, textarea"));
  for (const control of controls) {
    if (!control.checkValidity()) {
      control.reportValidity();
      return false;
    }
  }

  if (stepIndex === 4) {
    if (!getSelectedEventValues(form).length) {
      form.querySelector("[data-form-message]").textContent = translateText("규정 종목 또는 자유 종목을 하나 이상 선택해주세요.");
      return false;
    }
  }

  form.querySelector("[data-form-message]").textContent = "";
  return true;
}

function setupWizard() {
  const form = document.querySelector("[data-application-wizard]");
  if (!form) return;

  const steps = Array.from(form.querySelectorAll("[data-step]"));
  const dots = Array.from(form.querySelectorAll("[data-step-dot]"));
  const prevButton = form.querySelector("[data-prev]");
  const nextButton = form.querySelector("[data-next]");
  const submitButton = form.querySelector("[data-submit]");
  const receiptPreview = form.querySelector("[data-receipt-preview]");
  let currentStep = 0;

  function render() {
    steps.forEach((step, index) => step.classList.toggle("active", index === currentStep));
    dots.forEach((dot, index) => {
      dot.classList.toggle("active", index === currentStep);
      dot.classList.toggle("done", index < currentStep);
    });
    prevButton.style.visibility = currentStep === 0 ? "hidden" : "visible";
    nextButton.classList.toggle("hidden", currentStep === steps.length - 1);
    submitButton.classList.toggle("hidden", currentStep !== steps.length - 1);

    if (currentStep === steps.length - 1) {
      const preview = createApplicationFromForm(form);
      receiptPreview.innerHTML = `
        <strong>${translateDynamic("확인 내용")}</strong><br />
        ${preview.athleteName || "-"} / ${preview.division || "-"} / ${preview.entryType || "-"}<br />
        ${translateDynamic("국가 / 국적")}: ${preview.country || "-"}<br />
        ${translateDynamic("종목")}: ${[...preview.routines, ...preview.apparatus].join(", ") || "-"}<br />
        ${translateDynamic("이메일 *").replace(" *", "")}: ${preview.email || "-"}
      `;
    }
  }

  prevButton.addEventListener("click", () => {
    currentStep = Math.max(0, currentStep - 1);
    render();
  });

  nextButton.addEventListener("click", () => {
    if (!validateCurrentStep(form, currentStep)) return;
    currentStep = Math.min(steps.length - 1, currentStep + 1);
    if (currentStep === 5) syncMediaOptions(form);
    render();
  });

  form.querySelectorAll('input[name="routine"], input[name="apparatus"]').forEach((input) => {
    input.addEventListener("change", () => syncMediaOptions(form));
  });

  form.querySelector('input[name="musicFile"]')?.addEventListener("change", (event) => {
    const label = form.querySelector("[data-file-name]");
    label.textContent = event.target.files?.[0]?.name || translateText("선택된 파일 없음");
  });

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (!validateCurrentStep(form, currentStep)) return;

    const message = form.querySelector("[data-form-message]");
    message.textContent = currentLanguage() === "en" ? "Submitting application..." : "신청서를 제출하는 중입니다.";

    try {
      const payload = await buildSubmissionPayload(form);

      if (hasRemoteApi()) {
        const result = await callRemote("submitApplication", payload);
        payload.application.id = result.application?.id || payload.application.id;
        payload.application.status = result.application?.status || payload.application.status;
        payload.application.musicFileUrl = result.application?.musicFileUrl || "";
      } else {
        saveApplication(payload.application);
      }

      message.textContent =
        currentLanguage() === "en"
          ? "Application saved. You can check it with your email address."
          : "신청이 저장되었습니다. 이메일로 신청 내역을 조회할 수 있습니다.";
      setTimeout(() => {
        window.location.href = `check.html?email=${encodeURIComponent(payload.application.email)}`;
      }, 800);
    } catch (error) {
      console.error(error);
      message.textContent =
        currentLanguage() === "en"
          ? "Submission failed. Please try again or contact the event office."
          : "전송에 실패했습니다. 다시 시도하거나 운영사무국으로 문의해주세요.";
    }
  });

  document.addEventListener("languagechange", render);

  syncMediaOptions(form);
  render();
}

function statusClass(status) {
  if (status === "확정") return "confirmed";
  if (status === "보완요청") return "review";
  return "pending";
}

function renderApplication(application) {
  const events = [...(application.routines || []), ...(application.apparatus || [])].join(", ") || "-";
  const displayName = currentLanguage() === "en" && application.englishName ? application.englishName : application.athleteName;
  const schedule = Array.isArray(application.schedule) ? application.schedule : [];
  return `
    <article class="result-card">
      <div class="result-head">
        <div>
          <h2>${displayName || "-"}</h2>
          <small>${application.createdAt || "-"}</small>
        </div>
        <span class="status ${statusClass(application.status)}">${translateDynamic(application.status)}</span>
      </div>
      <dl>
        <div><dt>${translateDynamic("부문")}</dt><dd>${application.division || "-"} - ${application.entryType || "-"}</dd></div>
        <div><dt>${translateDynamic("참가유형")}</dt><dd>${translateDynamic(application.participantType || "-")}</dd></div>
        <div><dt>${translateDynamic("국가 / 국적")}</dt><dd>${application.country || "-"}</dd></div>
        <div><dt>${translateDynamic("종목")}</dt><dd>${events}</dd></div>
        <div><dt>${translateDynamic("지도자")}</dt><dd>${application.coachName || "-"}</dd></div>
        <div><dt>${translateDynamic("결제")}</dt><dd>${translateDynamic(application.paymentStatus || "-")}</dd></div>
        <div><dt>${currentLanguage() === "en" ? "Music" : "음악"}</dt><dd>${translateDynamic(application.musicStatus || "-")}</dd></div>
        <div><dt>${translateDynamic("운영 메모")}</dt><dd>${translateDynamic(application.adminMemo || "-")}</dd></div>
      </dl>
      ${
        schedule.length
          ? `
            <div class="personal-schedule">
              <h3>${currentLanguage() === "en" ? "Personal Schedule" : "개인 일정표"}</h3>
              ${schedule
                .map(
                  (item) => `
                    <div class="schedule-row">
                      <strong>${item.time || "-"} · ${item.label || "-"}</strong>
                      <span>${item.date || "-"} / ${item.location || "-"} / ${item.memo || "-"}</span>
                    </div>
                  `
                )
                .join("")}
            </div>
          `
          : ""
      }
    </article>
  `;
}

function setupLookup() {
  const form = document.querySelector("[data-lookup-form]");
  if (!form) return;

  const results = document.querySelector("[data-lookup-results]");

  async function search(criteria) {
    const email = String(criteria.email || "").trim().toLowerCase();
    results.innerHTML = `<article class="result-card">${currentLanguage() === "en" ? "Checking..." : "조회 중입니다."}</article>`;

    try {
      const matches = hasRemoteApi()
        ? (await callRemote("lookupApplication", { email })).applications || []
        : getAllApplications().filter((application) => {
            return String(application.email || "").toLowerCase() === email;
          });

      results.innerHTML = matches.length
        ? matches.map(renderApplication).join("")
        : `<article class="result-card">${translateDynamic("조회된 신청 내역이 없습니다. 신청할 때 입력한 이메일과 같은지 확인해주세요.")}</article>`;
    } catch (error) {
      console.error(error);
      results.innerHTML = `<article class="result-card">${
        currentLanguage() === "en"
          ? `Lookup failed. ${error.message || "Please try again."}`
          : `조회에 실패했습니다. ${error.message || "다시 시도해주세요."}`
      }</article>`;
    }
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    search({
      email: formData.get("email") || ""
    });
  });

  document.addEventListener("languagechange", () => {
    if (form.email.value) {
      search({ email: form.email.value });
    }
  });

  const params = new URLSearchParams(window.location.search);
  const email = params.get("email");
  if (email) {
    form.email.value = email;
    search({ email });
  }
}

const fallbackPublicSchedule = [
  {
    date: "2026-08-22",
    time: "09:00",
    label: "접수 및 리허설",
    location: "경희대학교 체육관",
    memo: "참가자 등록 및 음악 확인"
  },
  {
    date: "2026-08-22",
    time: "10:30",
    label: "개회식",
    location: "Main floor",
    memo: "전체 참가자 대기"
  },
  {
    date: "2026-08-22",
    time: "11:00",
    label: "경기 시작",
    location: "Main floor",
    memo: "세부 순서는 개인 일정표에서 확인"
  }
];

function renderPublicSchedule(schedule) {
  const target = document.querySelector("[data-public-schedule]");
  if (!target) return;

  target.innerHTML = schedule.length
    ? schedule
        .map(
          (item) => `
            <article class="public-schedule-row">
              <time>${item.date || "-"} · ${item.time || "-"}</time>
              <strong>${item.label || "-"}</strong>
              <span>${item.location || "-"}${item.memo ? ` / ${item.memo}` : ""}</span>
            </article>
          `
        )
        .join("")
    : `<article class="schedule-row"><strong>등록된 일정이 없습니다.</strong><span>운영진이 Schedule 시트를 업데이트하면 표시됩니다.</span></article>`;
}

async function setupPublicSchedule() {
  const target = document.querySelector("[data-public-schedule]");
  if (!target) return;

  if (!hasRemoteApi()) {
    renderPublicSchedule(fallbackPublicSchedule);
    return;
  }

  try {
    const result = await callRemote("getPublicSchedule");
    renderPublicSchedule(result.schedule || []);
  } catch (error) {
    console.error(error);
    renderPublicSchedule(fallbackPublicSchedule);
  }
}

setupLanguageToggle();
setupWizard();
setupLookup();
setupPublicSchedule();
applyTranslations();
