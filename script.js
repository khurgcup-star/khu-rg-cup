const STORAGE_KEY = "khu-president-cup-applications";
const LANGUAGE_KEY = "khu-president-cup-language";

const phraseMap = {
  "대회 안내": "Guide",
  "신규 신청": "New Application",
  "신청 확인": "Check Application",
  "일정표": "Schedule",
  "대회 사진": "Gallery",
  "오시는 길": "Directions",
  "메뉴 열기": "Open menu",
  "모바일 메뉴": "Mobile menu",
  "주요 메뉴": "Main menu",
  "홈으로 이동": "Go home",
  "경희대학교 총장배 리듬체조 대회": "Kyung Hee University President's Cup Rhythmic Gymnastics",
  "경희대학교 총장배": "Kyung Hee University President's Cup",
  "리듬체조 대회": "Rhythmic Gymnastics Competition",
  "개인, 단체/그룹, 성인부, 갈라쇼, 심판 제출 신청과 접수 확인을 안내합니다.": "Apply for individual, group/team, adult, gala show, judge submission, and check application status.",
  "대회일": "Event Date",
  "장소": "Venue",
  "경희대학교 체육관": "Kyung Hee University Gymnasium",
  "신청 마감": "Application Deadline",
  "조회 방식": "Lookup Method",
  "전체 일정": "Full Schedule",
  "일정표 보기": "View Schedule",
  "이메일": "Email",
  "신청은 단계별 화면으로 받습니다": "Applications Are Collected Step by Step",
  "참가 유형, 신청 부문, 정보, 종목을 순서대로 입력합니다.": "Enter participant type, application type, information, and events in order.",
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
  "운영진이 연결된 Schedule 시트를 업데이트하면 이 페이지에 전체 일정이 자동 표시됩니다. 일정표를 HTML로 별도 제작하지 않고, 엑셀/시트 원본을 기준으로 보여줍니다.": "When staff update the connected Schedule sheet, the full schedule appears here automatically. The page displays the spreadsheet source instead of maintaining a separate HTML schedule.",
  "참가자 등록": "Participant Check-in",
  "안내 데스크 / 접수 확인 및 배번 수령": "Information desk / application check and bib pickup",
  "안내 데스크": "Information Desk",
  "접수 확인 및 배번 수령": "application check and bib pickup",
  "음악 확인": "Music Check",
  "운영석 / 제출 음악 최종 확인": "Operations desk / final submitted music check",
  "운영석": "Operations Desk",
  "제출 음악 최종 확인": "final submitted music check",
  "개인 경기 세션": "Individual Competition Session",
  "Main Floor / 개인 경기 진행": "Main Floor / individual competition",
  "개인 경기 진행": "individual competition",
  "시상식": "Awards Ceremony",
  "Main Floor / 부문별 시상 진행": "Main Floor / awards by division",
  "부문별 시상 진행": "awards by division",
  "등록된 일정이 없습니다.": "No schedule has been added.",
  "운영진이 Schedule 시트를 업데이트하면 표시됩니다.": "This will appear when staff update the Schedule sheet.",
  "운영진 공지 기준": "Based on staff notice",
  "성인부 / 갈라쇼": "Adult / Gala Show",
  "대회 요약": "Competition Summary",
  "2026년 9월 19일(토) - 9월 20일(일)": "September 19 (Sat) - September 20 (Sun), 2026",
  "리듬체조 대회의 생생한 순간을 전합니다. 2026년 대회 사진은 9월 19일과 20일 행사 종료 후 순차적으로 공개됩니다.": "Relive the competition highlights. Photos from September 19 and 20, 2026 will be published after each event day.",
  "지난 대회 현장": "Previous Competition",
  "대회 현장 스케치": "Competition Highlights",
  "첫째 날 경기와 시상식 사진을 대회 종료 후 공개합니다.": "Day 1 competition and awards photos will be published after the event.",
  "경기 및 시상식": "Competition and Awards",
  "둘째 날 경기와 참가자들의 순간을 순차적으로 공개합니다.": "Day 2 competition and participant moments will be published in sequence.",
  "신청 마감": "Application Deadline",
  "필독 공지": "Important Notices",
  "대회장 이용 전 필독사항": "Important Venue Notices",
  "관중석 입장과 촬영은 경기 운영과 안전에 직접 영향을 주는 항목입니다.": "Spectator entry and photography directly affect competition operations and safety.",
  "주차장과 선승관 이동 동선은 오시는 길 페이지에서 확인할 수 있습니다.": "Parking and Seonseungwan routes are available on the directions page.",
  "2층 관중석 음식물 반입 금지": "No Food in Second-Floor Seating",
  "물만 반입 가능하며 커피와 음식물은 반입할 수 없습니다. 관중석 입장 시 음식물 검사가 진행됩니다.": "Only water is allowed. Coffee and food are not permitted, and food checks will be conducted at spectator entry.",
  "1층 관계자 외 출입 제한": "First Floor Access Restricted",
  "학부모 및 관중은 체육관 입장 후 2층 관객석으로 이동해주세요.": "Parents and spectators should move to the second-floor seating area after entering the gymnasium.",
  "촬영 장비 제한": "Photography Equipment Restricted",
  "관중석에서는 스마트폰을 제외한 사진 기기 사용이 불가합니다. 경기 중 플래시가 켜지지 않도록 확인해주세요.": "Only smartphones may be used for photos in the seating area. Please make sure flash is turned off during competition.",
  "지정 주차장 이용": "Use Designated Parking",
  "안내된 주차장 외 주차와 불법 주차는 경기 운영에 차질을 줄 수 있어 금지됩니다.": "Parking outside designated areas and illegal parking are prohibited because they may disrupt competition operations.",
  "신청 전 아래 내용을 준비해주세요": "Prepare the Following Before Applying",
  "신청 완료 후 신청 확인 페이지에서 입금 확인, 보완요청,": "After submitting, use the check application page to view payment confirmation, revision requests,",
  "최종 신청완료 여부와 개인 일정표를 확인할 수 있습니다.": "final application status, and personal schedules.",
  "신규 신청 시작": "Start New Application",
  "신청 내역 조회": "Application Lookup",
  "오시는 길 및 주차 안내": "Directions and Parking Guide",
  "참가 대상": "Entry Categories",
  "국내 참가자 / 심판 제출": "Korean Participant / Judge Submission",
  "꿈나무부 / 선수부": "Dreamer Division / Athlete Division",
  "개인 / 단체·그룹 / 성인부 / 갈라쇼": "Individual / Group-Team / Adult / Gala Show",
  "개인 / 단체 · 성인부 / 갈라쇼": "Individual / Group-Team · Adult / Gala Show",
  "기본 정보": "Basic Information",
  "선수 이름, 생년월일": "Athlete name and date of birth",
  "대표 연락처, 이메일, 소속 팀": "Primary phone, email, and team",
  "단체·그룹은 5-6명 선수 정보": "Group/team entries require 5-6 athletes",
  "지도자 이름": "Coach name",
  "지도자 연락처": "Coach phone",
  "운영진 연락용 이메일": "Email for staff contact",
  "제출 자료": "Submission Items",
  "참가 종목 선택": "Select participation events",
  "사진·영상은 종목별 별도 신청": "Request photo and video coverage separately by event",
  "음악 파일 선택 제출": "Optional music file submission",
  "성인부와 갈라쇼는 종목명 직접 입력": "Adult and gala show entries enter event names manually",
  "심판 제출은 이름, 급수, 소속명, 이메일": "Judge submissions require name, grade, organization, and email",
  "신청 순서": "Application Steps",
  "신규 신청 클릭": "Click New Application",
  "상단 또는 이 페이지의 신규 신청 버튼으로 접수를 시작합니다.": "Start registration using the New Application button at the top or on this page.",
  "참가 기준 선택": "Select Entry Criteria",
  "국내 참가자 또는 심판 제출을 선택한 뒤, 참가자는 꿈나무부와 선수부 등 대회 부문을 선택합니다.": "Choose Korean Participant or Judge Submission. Participants then select a division such as Dreamer or Athlete.",
  "정보와 종목 입력": "Enter Information and Events",
  "선수·지도자·종목 정보를 입력하고 사진·영상 신청 및 음악 파일을 확인합니다.": "Enter athlete, coach, and event information, then review photo, video, and music options.",
  "동의 후 제출": "Agree and Submit",
  "신청 완료 후 이메일로 신청 확인에서 상태를 조회합니다.": "After submitting, check status by email on the check application page.",
  "신청 후에는 확인 페이지를 이용하세요": "Use the Check Page After Applying",
  "이메일로 신청 내역을 조회할 수 있습니다. 입금, 최종 신청 상태와 개인 일정표는": "You can look up your application by email. Payment, final application status, and personal schedules",
  "운영진 확인 후 업데이트됩니다.": "are updated after staff review.",
  "접수 상태 흐름": "Application Status Flow",
  "입금 확인중": "Payment Checking",
  "입금": "Payment",
  "소속": "Team",
  "송지영": "Song Jiyoung",
  "확인완료": "Checked",
  "후프, 볼": "Hoop, Ball",
  "지도 바로가기": "Map Links",
  "이동 안내": "Route Guide",
  "공과대학 지하주차장에서 선승관까지 도보 이동 지도": "Walking map from Engineering Underground Parking to Seonseungwan",
  "공과대학 지하주차장 지상 출구에서 공학관 앞 보행로를 지나 선승관 입구로 이동하는 경로입니다.": "This route goes from the Engineering Underground Parking ground-level exit, past the Engineering building pedestrian path, to the Seonseungwan entrance.",
  "05": "05",
  "06": "06",
  "17": "17",
  "인조잔디구장 / 지하주차장": "Artificial Turf Field / Underground Parking",
  "공학관": "Engineering Building",
  "지하주차장 출구": "Parking Exit",
  "공학관 앞 보행로": "Engineering Walkway",
  "선승관 입구": "Seonseungwan Entrance",
  "공과대학 지하주차장 지상 출구에서 공학관 앞 보행로를 따라 선승관 입구로 이동합니다.": "From the Engineering Underground Parking ground-level exit, follow the pedestrian path in front of the Engineering building to the Seonseungwan entrance.",
  "실제 도보 경로 보기": "Open Walking Route",
  "주차장 위치": "Parking Location",
  "선승관 위치": "Seonseungwan Location",
  "경희대학교 국제캠퍼스 선승관 방문 및 공과대학 지하주차장 이용 안내": "Directions to Kyung Hee University Global Campus Seonseungwan and Engineering Underground Parking",
  "선승관 오시는 길": "Directions to Seonseungwan",
  "대회 장소는 경희대학교 국제캠퍼스 선승관입니다. 차량 이용 시 안내된 주차장만 이용해주시고, 주차 후 교내 운행 버스를 타고 생명과학대에서 하차하면 선승관으로 이동할 수 있습니다.": "The venue is Seonseungwan at Kyung Hee University Global Campus. Please use only the designated parking areas. After parking, take the campus shuttle and get off at the College of Life Sciences to reach Seonseungwan.",
  "대회 장소는 경희대학교 국제캠퍼스 선승관입니다. 차량 이용 시 공과대학 지하주차장에 주차한 뒤 지상 출구로 나와 선승관 방향 보행로를 따라 이동해주세요.": "The venue is Seonseungwan at Kyung Hee University Global Campus. If arriving by car, park in the Engineering Underground Parking lot, exit to ground level, and follow the pedestrian route toward Seonseungwan.",
  "주소": "Address",
  "경기도 용인시 기흥구 덕영대로 1732": "1732 Deogyeong-daero, Giheung-gu, Yongin-si, Gyeonggi-do",
  "경희대학교 국제캠퍼스 선승관": "Kyung Hee University Global Campus Seonseungwan",
  "선승관": "Seonseungwan",
  "선승관 이동 순서와 사진": "Seonseungwan Route Steps and Photos",
  "선승관 오시는 길 제목": "Directions to Seonseungwan Heading",
  "정문 통과": "Pass the Main Gate",
  "경희대학교 국제캠퍼스 정문을 통과합니다.": "Pass through the Kyung Hee University Global Campus main gate.",
  "정문 통과 후 직진": "Go Straight After the Main Gate",
  "보이는 길을 따라 계속 직진합니다.": "Continue straight along the road ahead.",
  "차선 따라 직진": "Follow the Lane Straight",
  "차선을 따라 계속 직진합니다.": "Continue straight along the lane.",
  "표지판 확인": "Check the Sign",
  "오른쪽 표지판과 도로 흐름을 확인하며 이동합니다.": "Check the sign on the right and follow the road flow.",
  "도로 따라 이동": "Follow the Road",
  "갈림길에서 안내 동선과 차선을 따라 이동합니다.": "At the fork, follow the guided route and lane.",
  "진입로 확인": "Check the Entrance Road",
  "선승관 방향 진입로를 확인하고 계속 직진합니다.": "Check the entrance road toward Seonseungwan and continue straight.",
  "차선 따라 이동": "Follow the Lane",
  "선승관 방향 우측 차로를 따라 이동합니다.": "Follow the right lane toward Seonseungwan.",
  "오르막길 이동": "Go Up the Hill",
  "오르막길을 따라 올라갑니다.": "Go up the hill.",
  "오르막길 계속 이동": "Continue Up the Hill",
  "차선을 따라 오르막길을 계속 이동합니다.": "Continue up the hill along the lane.",
  "선승관 방향": "Toward Seonseungwan",
  "선승관 건물이 보이는 방향으로 진입합니다.": "Enter toward the visible Seonseungwan building.",
  "선승관 도착": "Arrive at Seonseungwan",
  "선승관 체육관에 도착합니다.": "Arrive at Seonseungwan Gymnasium.",
  "공대 지하주차장": "Engineering Underground Parking",
  "주차 안내 제목": "Parking Guide Heading",
  "주차 안내": "Parking Guide",
  "공과대학 지하주차장": "Engineering Underground Parking",
  "정문 진입 후 차단기를 통과해 직진하고, 왼쪽 농구장을 지나 계속 직진 후 좌회전합니다.": "After entering through the main gate, pass the barrier and go straight. Continue past the basketball court on the left, then turn left.",
  "내비게이션: 경희대학교 국제캠퍼스 농구장": "Navigation: Kyung Hee University Global Campus Basketball Court",
  "외국어대학 앞 버스 정류장에서 교내 버스 탑승": "Take the campus shuttle at the bus stop in front of the College of Foreign Languages",
  "생명과학대 하차": "Get off at the College of Life Sciences",
  "체육대학 주차장": "College of Physical Education Parking Lot",
  "정문을 통과해 보이는 길을 따라 직진한 뒤 차단기를 통과하고, 차선을 따라 직진 후 좌회전합니다.": "Pass the main gate, go straight along the visible road, pass the barrier, continue along the lane, then turn left.",
  "체육대학 주차장 입구로 진입": "Enter the College of Physical Education parking entrance",
  "사색의 광장 주차장": "Sasaek Plaza Parking Lot",
  "정문과 차단기를 지나 직진하고, 선승관을 지나 안내 동선에 따라 주차장 입구로 진입합니다.": "Pass the main gate and barrier, continue straight past Seonseungwan, and follow the guided route into the parking entrance.",
  "내비게이션: 경희대학교 국제캠퍼스 예술디자인대학관": "Navigation: Kyung Hee University Global Campus College of Art and Design",
  "전자정보대학 앞 사색의 광장 정류장에서 교내 버스 탑승": "Take the campus shuttle at the Sasaek Plaza stop in front of the College of Electronics and Information",
  "주차 요금 및 주의사항": "Parking Fees and Notices",
  "주차요금": "Parking Fees",
  "4시간 2,000원": "4 hours KRW 2,000",
  "6시간 3,000원": "6 hours KRW 3,000",
  "24시간 4,000원": "24 hours KRW 4,000",
  "주의사항": "Notes",
  "안내된 주차장 외 주차는 금지입니다. 타 단과대 주차나 불법 주차는 민원 및 교통 혼잡으로 경기 운영에 차질을 줄 수 있습니다.": "Parking outside the designated areas is prohibited. Parking at other colleges or illegal parking may cause complaints, traffic congestion, and disruptions to competition operations.",
  "상세 주차 동선 제목": "Detailed Parking Route Heading",
  "상세 주차 동선": "Detailed Parking Route",
  "제1주차장 상세 동선": "Parking Lot 1 Detailed Route",
  "제2주차장 상세 동선": "Parking Lot 2 Detailed Route",
  "제3주차장 상세 동선": "Parking Lot 3 Detailed Route",
  "제1주차장 주차 안내": "Parking Lot 1 Guide",
  "제2주차장 주차 안내": "Parking Lot 2 Guide",
  "제3주차장 주차 안내": "Parking Lot 3 Guide",
  "정문에서 진입해 차단기를 통과한 뒤, 농구장 방향으로 직진하다가 주차장 입구로 진입합니다.": "Enter through the main gate, pass the barrier, go straight toward the basketball court, and enter the parking entrance.",
  "경희대학교 정문으로 진입합니다.": "Enter through the Kyung Hee University main gate.",
  "차단기를 통과해 보이는 길을 따라 직진합니다.": "Pass the barrier and continue straight along the road ahead.",
  "주차장 표지를 확인하고 지하주차장 입구로 진입합니다.": "Check the parking sign and enter the underground parking entrance.",
  "주차 후 이동": "After Parking",
  "외국어대학 앞 버스 정류장에서 교내 운행 버스를 탑승한 뒤 생명과학대에서 하차합니다. 교내 버스비는 무료입니다.": "Take the campus shuttle at the bus stop in front of the College of Foreign Languages and get off at the College of Life Sciences. The campus shuttle is free.",
  "정문 통과 후 직진하고, 차선을 따라 이동하다가 체육대학 주차장 입구로 진입합니다.": "After passing the main gate, go straight and follow the lane into the College of Physical Education parking entrance.",
  "경희대학교 국제캠퍼스 정문을 통과합니다.": "Pass through the Kyung Hee University Global Campus main gate.",
  "정문 통과 후 보이는 길을 따라 직진합니다.": "After passing the main gate, continue straight along the road ahead.",
  "차단기를 지나 계속 직진합니다.": "Pass the barrier and keep going straight.",
  "차선을 따라 이동하며 좌회전 지점을 확인합니다.": "Follow the lane and check the left-turn point.",
  "체육대학 주차장 방향으로 진입합니다.": "Enter toward the College of Physical Education parking lot.",
  "체육대학 건물 앞 갈림길에서 주차장 입구 방향을 확인합니다.": "At the fork in front of the College of Physical Education building, check the direction to the parking entrance.",
  "체육대학 주차장 인근에 도착합니다.": "Arrive near the College of Physical Education parking lot.",
  "정문에서 선승관을 지나 사색의 광장 방향으로 이동한 뒤, 안내 동선에 따라 주차장 입구로 진입합니다.": "From the main gate, pass Seonseungwan, move toward Sasaek Plaza, and follow the guided route to the parking entrance.",
  "차단기를 지나 보이는 길을 따라 직진합니다.": "Pass the barrier and continue straight along the road ahead.",
  "11시 방향 오르막길을 따라 올라갑니다.": "Go up the hill at the 11 o'clock direction.",
  "차선을 따라 직진합니다.": "Go straight along the lane.",
  "오르막길을 지나 계속 직진합니다.": "Pass the hill and continue straight.",
  "선승관을 오른쪽에 두고 직진합니다.": "Keep Seonseungwan on your right and continue straight.",
  "좌회전 지점을 확인합니다.": "Check the left-turn point.",
  "차선을 따라 우회전 후 내리막길로 직진합니다.": "Turn right along the lane, then continue straight downhill.",
  "주차장 입구 방향으로 이동합니다.": "Move toward the parking entrance.",
  "안내 동선을 따라 주차장 입구로 진입합니다.": "Follow the guided route into the parking entrance.",
  "사색의 광장 주차장에 도착합니다. 더 안쪽으로 이동하여 주차하여 주세요.": "Arrive at Sasaek Plaza Parking Lot. Please move farther inside to park.",
  "전자정보대학 앞 사색의 광장 버스 정류장에서 교내 운행 버스를 탑승한 뒤 생명과학대에서 하차합니다. 교내 버스비는 무료입니다.": "Take the campus shuttle at the Sasaek Plaza bus stop in front of the College of Electronics and Information and get off at the College of Life Sciences. The campus shuttle is free.",
  "선승관 지도 보기": "Open Seonseungwan Map",
  "캠퍼스 지도": "Campus Map",
  "대중교통 이용": "Public Transit",
  "수원역, 영통역, 망포역 등에서 경희대학교 국제캠퍼스 방면 버스나 택시를 이용해 방문할 수 있습니다.": "Use a bus or taxi toward Kyung Hee University Global Campus from Suwon, Yeongtong, Mangpo, or nearby stations.",
  "경희대학교 국제캠퍼스 정문 또는 캠퍼스 내부 정류장에서 하차": "Get off at the Kyung Hee University Global Campus main gate or an internal campus stop.",
  "하차 후 선승관 또는 체육관 표지를 따라 이동": "After getting off, follow signs for Seonseungwan or the gymnasium.",
  "대회 당일 혼잡할 수 있으니 도보 이동 시간을 여유 있게 확보": "Allow extra walking time because the campus may be crowded on event day.",
  "차량 및 주차": "Driving and Parking",
  "차량 이용 시 내비게이션 목적지를 공과대학 지하주차장으로 설정해주세요.": "If arriving by car, set Engineering Underground Parking as your navigation destination.",
  "캠퍼스 입차 후 공과대학 또는 지하주차장 안내 표지 확인": "After entering campus, follow signs for the Engineering buildings or underground parking.",
  "주차 후 선수 짐과 소지품을 챙겨 선승관 방향으로 이동": "After parking, bring athlete bags and belongings and move toward Seonseungwan.",
  "주차장이 혼잡할 경우 현장 안내 요원의 안내에 따라 이동": "If parking is crowded, follow on-site staff guidance.",
  "주차 후 선승관 이동": "From Parking to Seonseungwan",
  "공과대학 지하주차장에서 지상으로 올라온 뒤 선승관 방향 보행로를 이용합니다.": "From the Engineering Underground Parking lot, go up to ground level and use the pedestrian route toward Seonseungwan.",
  "엘리베이터 또는 계단을 이용해 지상 출구로 이동": "Use the elevator or stairs to reach the ground-level exit.",
  "공과대학 건물 외부에서 선승관 방향 표지 확인": "Outside the Engineering buildings, check signs toward Seonseungwan.",
  "선승관 도착 후 참가자는 접수처로, 관람객은 관람 동선으로 이동": "After arriving at Seonseungwan, participants should go to check-in and spectators should follow the spectator route.",
  "방문 전 안내": "Before You Visit",
  "대회 당일 캠퍼스 내부 차량 통행과 주차장이 혼잡할 수 있습니다. 참가자는 접수 및 준비 시간을 고려해 여유 있게 도착해주세요.": "Campus traffic and parking may be crowded on event day. Participants should arrive with enough time for check-in and preparation.",

  "신청 메뉴": "Application Menu",
  "신청 단계": "Application Steps",
  "참가유형": "Participant Type",
  "대회부문": "Division",
  "정보입력": "Information",
  "종목선택": "Events",
  "추가옵션": "Options",
  "동의 & 확인": "Consent & Review",
  "참가자 유형 선택": "Select Participant Type",
  "참가자의 등록 기준을 선택하세요.": "Select the participant registration type.",
  "국내 참가자": "Korean Participant",
  "대회 부문 선택": "Select Competition Division",
  "참가 기준에 맞는 대회 부문을 선택하세요.": "Select the competition division that matches the participant.",
  "꿈나무부": "Dreamer Division",
  "비선수 참가 부문": "Non-registered athlete division",
  "선수부": "Athlete Division",
  "리듬체조 선수 참가 부문": "Registered rhythmic gymnastics athlete division",
  "성인부": "Adult",
  "성인 참가자 부문": "Adult participant division",
  "종목명을 직접 입력": "Enter event names",
  "갈라쇼": "Gala Show",
  "공연 종목 직접 입력": "Enter performance event names",
  "심판 제출": "Judge Submission",
  "심판 정보만 제출": "Submit judge information only",
  "참가 형태 선택": "Select Entry Type",
  "개인 또는 단체·그룹 참가를 선택하세요.": "Choose an individual or group-team entry.",
  "개인": "Individual",
  "개인 선수 참가": "Individual athlete entry",
  "단체/그룹": "Group / Team",
  "5-6명 팀 참가": "5-6 member team entry",
  "참가자 정보 입력": "Enter Participant Information",
  "연락 및 소속 정보": "Contact and Team Information",
  "선수 정보": "Athlete Information",
  "팀 선수 정보": "Team Athlete Information",
  "최소 5명, 최대 6명까지 입력할 수 있습니다.": "Enter at least 5 and up to 6 athletes.",
  "+ 선수 추가": "+ Add Athlete",
  "선수 이름 *": "Athlete Name *",
  "선수 이름": "Athlete name",
  "영문 이름 *": "English Name *",
  "국가 / 국적 *": "Country / Nationality *",
  "국가 / 국적": "Country / nationality",
  "생년월일 *": "Date of Birth *",
  "연락처 *": "Phone *",
  "이메일 *": "Email *",
  "소속 팀 *": "Team *",
  "소속 팀": "Team",
  "지도자 정보": "Coach Information",
  "지도자명 *": "Coach Name *",
  "지도자명": "Coach name",
  "지도자 연락처 *": "Coach Phone *",
  "종목 선택": "Select Events",
  "개인 종목 선택": "Individual Events",
  "규정 부문": "Regulation Division",
  "맨손": "Freehand",
  "수구": "Apparatus",
  "자유 부문": "Free Division",
  "단체/그룹 종목 선택": "Group Events",
  "심판란 제출": "Judge Submission",
  "이름 *": "Name *",
  "이름": "Name",
  "급수 *": "Grade *",
  "급수": "Grade",
  "소속명 *": "Organization *",
  "소속명": "Organization",
  "성인부 종목": "Adult Events",
  "갈라쇼 종목": "Gala Show Events",
  "시니어": "Senior",
  "주니어(2011-2013)": "Junior (2011-2013)",
  "프리주니어(2014-2017)": "Pre-Junior (2014-2017)",
  "+ 종목 추가": "+ Add Event",
  "심판 제출은 종목 선택 없이 다음 단계로 이동할 수 있습니다.": "Judge submissions can continue without selecting events.",
  "후프": "Hoop",
  "볼": "Ball",
  "곤봉": "Clubs",
  "리본": "Ribbon",
  "줄": "Rope",
  "맨손자유": "Freehand",
  "추가 옵션": "Additional Options",
  "촬영 신청 대상 종목": "Events for Media Requests",
  "사진·영상 촬영은 참가비와 별도 비용입니다.": "Photo and video coverage is charged separately from the entry fee.",
  "원하는 종목을 사진과 영상으로 각각 선택하세요. 금액과 결제 방법은 운영진이 별도로 안내합니다.": "Select the events you want photographed and filmed. Staff will provide pricing and payment instructions separately.",
  "대회 사진 신청": "Competition Photo Request",
  "사진 촬영을 신청할 종목을 선택하세요.": "Select the events for photo coverage.",
  "대회 영상 신청": "Competition Video Request",
  "영상 촬영을 신청할 종목을 선택하세요.": "Select the events for video coverage.",
  "별도 비용": "Separate Fee",
  "사진 별도 신청": "Separate photo request",
  "영상 별도 신청": "Separate video request",
  "신청 안 함": "Not requested",
  "서약서 제출": "Pledge Submission",
  "서약서 양식 다운로드": "Download pledge form",
  "서약서 파일을 드래그하거나 클릭하여 선택": "Drag the signed pledge here or click to choose",
  "PDF, HWP, HWPX, JPG, PNG 파일만 업로드할 수 있습니다.": "Only PDF, HWP, HWPX, JPG, and PNG files can be uploaded.",
  "서약서 파일을 업로드해주세요.": "Please upload the signed pledge file.",
  "서약서가 서버에 저장되지 않았습니다. Apps Script 배포를 확인해주세요.": "The pledge was not saved on the server. Check the Apps Script deployment.",
  "음악 파일 제출": "Music File Submission",
  "음악은 선택 제출입니다. MP3, WAV, M4A 파일을 업로드하세요.": "Music is optional. Upload an MP3, WAV, or M4A file.",
  "MP3, WAV, M4A 파일을 업로드하세요. 실제 운영 시 파일은 Jotform 또는 서버 저장소로 전송됩니다.": "Upload an MP3, WAV, or M4A file. In live operation, files should be sent to Jotform or a server storage.",
  "파일을 드래그하거나 클릭하여 선택": "Drag a file here or click to choose",
  "선택된 파일 없음": "No file selected",
  "MP3, WAV, M4A 파일만 업로드할 수 있습니다.": "Only MP3, WAV, and M4A files can be uploaded.",
  "동의 및 확인": "Consent and Review",
  "개인정보 수집 및 이용에 동의합니다.": "I agree to the collection and use of personal information.",
  "대회 사진 및 영상 촬영/활용 안내를 확인했습니다.": "I have reviewed the photo and video recording/use notice.",
  "대회 규정, 환불 규정, 안전 수칙을 확인했습니다.": "I have reviewed the competition rules, refund policy, and safety rules.",
  "← 이전": "← Back",
  "다음 →": "Next →",
  "신청 완료": "Submit Application",
  "확인 내용": "Review",
  "종목을 하나 이상 선택하거나 입력해주세요.": "Select or enter at least one event.",
  "단체/그룹은 선수 정보를 최소 5명 입력해주세요.": "Group/team entries require at least 5 athletes.",
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
  "참가형태": "Entry Type",
  "결제": "Payment",
  "운영 메모": "Admin Memo",
  "조회된 신청 내역이 없습니다.": "No application was found.",
  "조회된 신청 내역이 없습니다. 신청할 때 입력한 이메일과 같은지 확인해주세요.": "No application was found. Check that this is the same email used for the application.",

  "신규 신청 | 경희대학교 총장배 리듬체조 대회": "New Application | Kyung Hee University President's Cup Rhythmic Gymnastics",
  "신청 확인 | 경희대학교 총장배 리듬체조 대회": "Check Application | Kyung Hee University President's Cup Rhythmic Gymnastics",
  "일정표 | 경희대학교 총장배 리듬체조 대회": "Schedule | Kyung Hee University President's Cup Rhythmic Gymnastics",
  "오시는 길 | 경희대학교 총장배 리듬체조 대회": "Directions | Kyung Hee University President's Cup Rhythmic Gymnastics"
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
    division: "선수부",
    entryType: "개인",
    athleteName: "윤시연",
    englishName: "Yun Siyeon",
    birthDate: "",
    email: "gunhee121@naver.com",
    phone: "010-0000-0000",
    organization: "KHU RG",
    coachName: "송지영",
    coachPhone: "010-0000-0000",
    athletes: [{ name: "윤시연", birthDate: "" }],
    groupCategory: "",
    customEvents: [],
    routines: [],
    apparatus: ["Ball"],
    photoOptions: [],
    videoOptions: ["Ball"],
    musicFileName: "",
    paymentStatus: "결제확인",
    musicStatus: "확인완료",
    schedule: [
      {
        date: "2026-09-19",
        time: "10:30",
        label: "Warm-up",
        location: "Sub floor",
        memo: "Arrive 30 minutes early"
      },
      {
        date: "2026-09-19",
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

function escapeRegExp(value) {
  return String(value).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function translateText(text, lang = currentLanguage()) {
  const normalized = String(text || "").trim();
  if (lang === "ko") return text;
  const customEventMatch = normalized.match(/^(\d+)\.\s*종목 기입란 \*$/);
  if (customEventMatch) return `${customEventMatch[1]}. Event *`;

  const customEventPlaceholderMatch = normalized.match(/^종목\s*(\d+)$/);
  if (customEventPlaceholderMatch) return `Event ${customEventPlaceholderMatch[1]}`;

  const athleteCountMatch = normalized.match(/^(\d+)명$/);
  if (athleteCountMatch) return `${athleteCountMatch[1]} athlete${athleteCountMatch[1] === "1" ? "" : "s"}`;

  const exact = phraseMap[normalized] || statusMap[normalized];
  if (exact) return exact;

  let translated = normalized;
  const dictionary = { ...phraseMap, ...statusMap };
  Object.keys(dictionary)
    .filter((key) => /[가-힣]/.test(key) && key.replace(/\s/g, "").length >= 6 && normalized.includes(key))
    .sort((left, right) => right.length - left.length)
    .forEach((key) => {
      translated = translated.replace(new RegExp(escapeRegExp(key), "g"), dictionary[key]);
    });

  return translated === normalized ? text : translated;
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

function refreshTranslations() {
  if (document.body) applyTranslations();
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

function isAcceptedMusicFile(file) {
  if (!file) return false;
  const name = String(file.name || "").toLowerCase();
  const type = String(file.type || "").toLowerCase();
  return /\.(mp3|wav|m4a)$/.test(name) || ["audio/mpeg", "audio/wav", "audio/x-wav", "audio/x-m4a", "audio/mp4"].includes(type);
}

function isAcceptedPledgeFile(file) {
  if (!file) return false;
  const name = String(file.name || "").toLowerCase();
  const type = String(file.type || "").toLowerCase();
  return /\.(pdf|hwp|hwpx|jpe?g|png)$/.test(name) || ["application/pdf", "image/jpeg", "image/png"].includes(type);
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
  return Array.from(form.querySelectorAll(`input[name="${name}"]:checked`))
    .filter((input) => !input.disabled)
    .map((input) => input.value);
}

function getRadioValue(form, name) {
  return form.querySelector(`input[name="${name}"]:checked:not(:disabled)`)?.value || "";
}

function getCustomEventValues(form) {
  return Array.from(form.querySelectorAll('input[name="customEvent"]:not(:disabled)'))
    .map((input) => input.value.trim())
    .filter(Boolean);
}

function getSelectedEventChoices(form) {
  const choices = Array.from(
    form.querySelectorAll('input[name="routine"]:checked, input[name="apparatus"]:checked')
  )
    .filter((input) => !input.disabled)
    .map((input) => {
      const section = input.dataset.eventSection || "";
      return {
        title: input.value,
        section,
        value: section ? `${section} · ${input.value}` : input.value
      };
    });

  const groupCategory = getRadioValue(form, "groupCategory");
  if (groupCategory) {
    choices.push({
      title: groupCategory,
      section: "단체/그룹",
      value: groupCategory
    });
  }

  getCustomEventValues(form).forEach((eventName) => {
    choices.push({
      title: eventName,
      section: entryType(form),
      value: eventName
    });
  });

  return choices;
}

function getSelectedEventValues(form) {
  return getSelectedEventChoices(form).map((eventChoice) => eventChoice.value);
}

function translateEventText(text) {
  return String(text || "")
    .split(" · ")
    .map((part) => translateDynamic(part))
    .join(" · ");
}

function formatEventList(events) {
  return events.map((eventName) => translateEventText(eventName)).join(", ");
}

function collectAthletes(form) {
  return Array.from(form.querySelectorAll("[data-athlete-card]"))
    .map((card) => ({
      name: card.querySelector('input[name="athleteName"]')?.value.trim() || "",
      birthDate: card.querySelector('input[name="birthDate"]')?.value || ""
    }))
    .filter((athlete) => athlete.name || athlete.birthDate);
}

function setPanelEnabled(panel, enabled) {
  if (!panel) return;
  panel.hidden = !enabled;
  panel.querySelectorAll("input, select, textarea, button").forEach((control) => {
    control.disabled = !enabled;
  });
}

function participantType(form) {
  return getRadioValue(form, "participantType");
}

function division(form) {
  return getRadioValue(form, "division");
}

function entryType(form) {
  if (isJudgeParticipant(form)) return "심판 제출";
  const selectedDivision = division(form);
  if (["성인부", "갈라쇼"].includes(selectedDivision)) return selectedDivision;
  return getRadioValue(form, "entryType");
}

function isJudgeParticipant(form) {
  return participantType(form) === "심판 제출";
}

function isJudgeEntry(form) {
  return isJudgeParticipant(form) || getRadioValue(form, "entryType") === "심판 제출";
}

function isGroupEntry(form) {
  return entryType(form) === "단체/그룹";
}

function usesCustomEvents(form) {
  return ["성인부", "갈라쇼"].includes(entryType(form));
}

function createAthleteCard(index) {
  const article = document.createElement("article");
  article.className = "athlete-card";
  article.dataset.athleteCard = "";
  article.innerHTML = `
    <strong class="member-index">${index + 1}</strong>
    <div class="form-grid">
      <label>선수 이름 *<input name="athleteName" type="text" placeholder="선수 이름" required /></label>
      <label>생년월일 *<input name="birthDate" type="date" required /></label>
    </div>
  `;
  return article;
}

function syncAthleteCards(form) {
  const list = form.querySelector("[data-athlete-list]");
  if (!list) return;

  const targetCount = isGroupEntry(form) ? Math.max(5, list.children.length || 5) : 1;
  while (list.children.length < targetCount) {
    list.appendChild(createAthleteCard(list.children.length));
  }
  while (list.children.length > targetCount) {
    list.lastElementChild?.remove();
  }

  Array.from(list.children).forEach((card, index) => {
    card.querySelector(".member-index").textContent = String(index + 1);
  });
}

function addAthleteCard(form) {
  const list = form.querySelector("[data-athlete-list]");
  if (!list || list.children.length >= 6) return;
  list.appendChild(createAthleteCard(list.children.length));
  refreshTranslations();
}

function createCustomEventRow(index) {
  const label = document.createElement("label");
  label.className = "custom-event-row";
  label.innerHTML = `${index + 1}. 종목 기입란 *<input name="customEvent" type="text" placeholder="종목 ${index + 1}" required />`;
  return label;
}

function syncCustomEventRows(form) {
  const list = form.querySelector("[data-custom-event-list]");
  if (!list) return;
  if (!list.children.length) {
    list.appendChild(createCustomEventRow(0));
  }
  Array.from(list.children).forEach((row, index) => {
    row.firstChild.textContent = `${index + 1}. 종목 기입란 *`;
    row.querySelector("input").placeholder = `종목 ${index + 1}`;
  });
  refreshTranslations();
}

function addCustomEventRow(form) {
  const list = form.querySelector("[data-custom-event-list]");
  if (!list) return;
  list.appendChild(createCustomEventRow(list.children.length));
  refreshTranslations();
}

function createEmptyOptions(message) {
  const empty = document.createElement("span");
  empty.className = "empty-options";
  empty.textContent = translateText(message);
  return empty;
}

function syncMediaOptions(form) {
  const selectedEvents = getSelectedEventChoices(form);
  const summary = form.querySelector("[data-selected-event-summary]");

  if (summary) {
    summary.replaceChildren();
    if (!selectedEvents.length) {
      summary.appendChild(createEmptyOptions("먼저 종목을 선택해주세요."));
    } else {
      selectedEvents.forEach((eventChoice) => {
        const card = document.createElement("article");
        const title = document.createElement("strong");
        const description = document.createElement("span");
        card.className = "selected-event-card";
        title.textContent = translateEventText(eventChoice.title);
        description.textContent = translateEventText(eventChoice.section || "선택 종목");
        card.append(title, description);
        summary.appendChild(card);
      });
    }
  }

  form.querySelectorAll("[data-dynamic-options]").forEach((container) => {
    const optionName = container.dataset.dynamicOptions;
    const previousValues = new Set(getCheckedValues(form, optionName));
    const optionDescription = optionName === "photoOptions" ? "사진 별도 신청" : "영상 별도 신청";
    container.replaceChildren();

    if (!selectedEvents.length) {
      container.appendChild(createEmptyOptions("먼저 종목을 선택해주세요."));
      return;
    }

    selectedEvents.forEach((eventChoice) => {
      const label = document.createElement("label");
      const input = document.createElement("input");
      const check = document.createElement("span");
      const copy = document.createElement("span");
      const title = document.createElement("strong");
      const description = document.createElement("small");

      label.className = "media-option";
      input.type = "checkbox";
      input.name = optionName;
      input.value = eventChoice.value;
      input.checked = previousValues.has(eventChoice.value);
      check.className = "media-option-check";
      copy.className = "media-option-copy";
      title.textContent = translateEventText(eventChoice.title);
      description.textContent = [eventChoice.section, optionDescription]
        .filter(Boolean)
        .map((part) => translateEventText(part))
        .join(" · ");
      copy.append(title, description);
      label.append(input, check, copy);
      container.appendChild(label);
    });
  });
}

function syncFormForEntryType(form) {
  const type = entryType(form);
  const judgeSelected = isJudgeEntry(form);
  const standardDivision = ["꿈나무부", "선수부"].includes(division(form));
  const entryTypeChoice = form.querySelector("[data-entry-type-choice]");
  const competitorFields = form.querySelector("[data-competitor-fields]");
  const judgeFields = form.querySelector("[data-judge-fields]");
  const individualEvents = form.querySelector("[data-individual-events]");
  const groupEvents = form.querySelector("[data-group-events]");
  const customEvents = form.querySelector("[data-custom-events]");
  const judgeEventNote = form.querySelector("[data-judge-event-note]");
  const mediaOptions = form.querySelector("[data-media-options]");
  const musicUpload = form.querySelector("[data-music-upload]");
  const groupHelper = form.querySelector("[data-group-helper]");
  const addAthleteButton = form.querySelector("[data-add-athlete]");
  const memberTitle = form.querySelector("[data-member-title]");
  const customTitle = form.querySelector("[data-custom-event-title]");

  form.querySelectorAll('input[name="division"]').forEach((input) => {
    input.disabled = judgeSelected;
  });

  syncAthleteCards(form);
  syncCustomEventRows(form);

  setPanelEnabled(entryTypeChoice, !judgeSelected && standardDivision);
  setPanelEnabled(competitorFields, !judgeSelected);
  setPanelEnabled(judgeFields, judgeSelected);
  setPanelEnabled(individualEvents, type === "개인");
  setPanelEnabled(groupEvents, type === "단체/그룹");
  setPanelEnabled(customEvents, usesCustomEvents(form));
  setPanelEnabled(judgeEventNote, judgeSelected);
  setPanelEnabled(mediaOptions, !judgeSelected);
  setPanelEnabled(musicUpload, !judgeSelected);

  if (memberTitle) memberTitle.textContent = isGroupEntry(form) ? "팀 선수 정보" : "선수 정보";
  if (groupHelper) groupHelper.hidden = !isGroupEntry(form);
  if (addAthleteButton) {
    addAthleteButton.hidden = !isGroupEntry(form);
    addAthleteButton.disabled = !isGroupEntry(form);
  }
  if (customTitle) customTitle.textContent = type === "갈라쇼" ? "갈라쇼 종목" : "성인부 종목";

  syncMediaOptions(form);
  refreshTranslations();
}

function createApplicationFromForm(form) {
  const formData = new FormData(form);
  const now = new Date();
  const id = `KHU-2026-${String(Date.now()).slice(-6)}`;
  const musicFile = form.querySelector('input[name="musicFile"]')?.files?.[0];
  const pledgeFile = form.querySelector('input[name="pledgeFile"]')?.files?.[0];
  const athletes = collectAthletes(form);
  const firstAthlete = athletes[0] || {};
  const judgeEmail = String(formData.get("judgeEmail") || "");
  const judgeName = String(formData.get("judgeName") || "");
  const judgeSelected = isJudgeEntry(form);
  const selectedEntryType = entryType(form);
  const groupCategory = getRadioValue(form, "groupCategory");
  const applicationEmail = judgeSelected ? judgeEmail : String(formData.get("email") || "");
  const customEvents = getCustomEventValues(form);
  const routineEvents = getCheckedValues(form, "routine");

  return {
    id,
    createdAt: now.toISOString().slice(0, 10),
    status: "접수대기",
    participantType: getRadioValue(form, "participantType"),
    country: judgeSelected ? "심판 제출" : String(formData.get("country") || getRadioValue(form, "participantType") || ""),
    division: judgeSelected ? "심판 제출" : getRadioValue(form, "division"),
    entryType: selectedEntryType,
    athleteName: firstAthlete.name || judgeName,
    englishName: judgeSelected ? judgeName : String(formData.get("englishName") || ""),
    birthDate: judgeSelected ? "1900-01-01" : firstAthlete.birthDate || "",
    email: applicationEmail,
    phone: judgeSelected ? "심판 제출" : String(formData.get("phone") || ""),
    organization: judgeSelected ? String(formData.get("judgeOrganization") || "") : String(formData.get("organization") || ""),
    coachName: judgeSelected ? judgeName : String(formData.get("coachName") || ""),
    coachPhone: judgeSelected ? "심판 제출" : String(formData.get("coachPhone") || ""),
    athletes,
    groupCategory,
    customEvents,
    judgeName,
    judgeGrade: String(formData.get("judgeGrade") || ""),
    judgeOrganization: String(formData.get("judgeOrganization") || ""),
    judgeEmail,
    routines: judgeSelected ? ["심판 제출"] : routineEvents,
    apparatus: getCheckedValues(form, "apparatus"),
    photoOptions: getCheckedValues(form, "photoOptions"),
    videoOptions: getCheckedValues(form, "videoOptions"),
    pledgeFileName: pledgeFile?.name || "",
    pledgeFileSize: pledgeFile?.size || 0,
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
  const pledgeFile = form.querySelector('input[name="pledgeFile"]')?.files?.[0];
  const musicFilePayload = await readFileAsPayload(musicFile);
  const pledgeFilePayload = await readFileAsPayload(pledgeFile);
  return { application, musicFile: musicFilePayload, pledgeFile: pledgeFilePayload };
}

function validateCurrentStep(form, stepIndex) {
  const step = form.querySelector(`[data-step="${stepIndex}"]`);
  const controls = Array.from(step.querySelectorAll("input, select, textarea")).filter((control) => !control.disabled);
  for (const control of controls) {
    if (!control.checkValidity()) {
      control.reportValidity();
      return false;
    }
  }

  if (stepIndex === 2 && isGroupEntry(form)) {
    const completedAthletes = collectAthletes(form).filter((athlete) => athlete.name && athlete.birthDate);
    if (completedAthletes.length < 5) {
      form.querySelector("[data-form-message]").textContent = translateText("단체/그룹은 선수 정보를 최소 5명 입력해주세요.");
      return false;
    }
  }

  if (stepIndex === 3 && !isJudgeEntry(form)) {
    if (!getSelectedEventValues(form).length) {
      form.querySelector("[data-form-message]").textContent = translateText("종목을 하나 이상 선택하거나 입력해주세요.");
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

  function isStepSkipped(stepIndex) {
    return isJudgeEntry(form) && (stepIndex === 1 || stepIndex === 3);
  }

  function nextStepIndex(fromIndex) {
    let target = Math.min(steps.length - 1, fromIndex + 1);
    while (target < steps.length - 1 && isStepSkipped(target)) {
      target += 1;
    }
    return target;
  }

  function prevStepIndex(fromIndex) {
    let target = Math.max(0, fromIndex - 1);
    while (target > 0 && isStepSkipped(target)) {
      target -= 1;
    }
    return target;
  }

  function render() {
    steps.forEach((step, index) => step.classList.toggle("active", index === currentStep));
    dots.forEach((dot, index) => {
      dot.classList.toggle("active", index === currentStep);
      dot.classList.toggle("done", index < currentStep);
      dot.classList.toggle("skipped", isStepSkipped(index));
    });
    prevButton.style.visibility = currentStep === 0 ? "hidden" : "visible";
    nextButton.classList.toggle("hidden", currentStep === steps.length - 1);
    submitButton.classList.toggle("hidden", currentStep !== steps.length - 1);

    if (currentStep === 3) {
      syncMediaOptions(form);
    }

    if (currentStep === steps.length - 1) {
      const preview = createApplicationFromForm(form);
      const events = formatEventList(getSelectedEventValues(form)) || "-";
      const photos = formatEventList(preview.photoOptions) || translateDynamic("신청 안 함");
      const videos = formatEventList(preview.videoOptions) || translateDynamic("신청 안 함");
      const displayName = preview.judgeName || preview.athleteName || "-";
      receiptPreview.innerHTML = `
        <strong>${translateDynamic("확인 내용")}</strong><br />
        ${displayName} / ${translateDynamic(preview.division || "-")} / ${translateDynamic(preview.entryType || "-")}<br />
        ${translateDynamic("종목")}: ${events}<br />
        ${translateDynamic("대회 사진 신청")}: ${photos}<br />
        ${translateDynamic("대회 영상 신청")}: ${videos}<br />
        ${translateDynamic("이메일 *").replace(" *", "")}: ${preview.email || "-"}
      `;
    }
  }

  prevButton.addEventListener("click", () => {
    currentStep = prevStepIndex(currentStep);
    render();
  });

  nextButton.addEventListener("click", () => {
    syncFormForEntryType(form);
    if (!validateCurrentStep(form, currentStep)) return;
    currentStep = nextStepIndex(currentStep);
    render();
  });

  form.querySelectorAll('input[name="participantType"]').forEach((input) => {
    input.addEventListener("change", () => {
      syncFormForEntryType(form);
      if (isStepSkipped(currentStep)) currentStep = nextStepIndex(0);
      render();
    });
  });

  form.querySelectorAll('input[name="entryType"]').forEach((input) => {
    input.addEventListener("change", () => syncFormForEntryType(form));
  });

  form.querySelectorAll('input[name="division"]').forEach((input) => {
    input.addEventListener("change", () => {
      syncFormForEntryType(form);
      render();
    });
  });

  form.addEventListener("change", (event) => {
    if (event.target.matches('input[name="routine"], input[name="apparatus"], input[name="groupCategory"]')) {
      syncMediaOptions(form);
    }
  });

  form.addEventListener("input", (event) => {
    if (event.target.matches('input[name="customEvent"]')) {
      syncMediaOptions(form);
    }
  });

  form.querySelector("[data-add-athlete]")?.addEventListener("click", () => addAthleteCard(form));
  form.querySelector("[data-add-event]")?.addEventListener("click", () => {
    addCustomEventRow(form);
    syncMediaOptions(form);
  });

  function setupFileDrop(inputSelector, labelSelector, validateFile, invalidMessage) {
    const input = form.querySelector(inputSelector);
    const drop = input?.closest(".file-drop");
    const label = form.querySelector(labelSelector);
    if (!input || !drop || !label) return;

    function setFile(file) {
      if (!file) return;
      const message = form.querySelector("[data-form-message]");
      if (!validateFile(file)) {
        input.value = "";
        label.textContent = translateText("선택된 파일 없음");
        if (message) message.textContent = translateText(invalidMessage);
        return;
      }

      const transfer = new DataTransfer();
      transfer.items.add(file);
      input.files = transfer.files;
      label.textContent = file.name;
      if (message) message.textContent = "";
    }

    input.addEventListener("change", (event) => {
      const file = event.target.files?.[0];
      if (file && !validateFile(file)) {
        event.target.value = "";
        label.textContent = translateText("선택된 파일 없음");
        form.querySelector("[data-form-message]").textContent = translateText(invalidMessage);
        return;
      }
      label.textContent = file?.name || translateText("선택된 파일 없음");
    });

    ["dragenter", "dragover"].forEach((type) => {
      drop.addEventListener(type, (event) => {
        event.preventDefault();
        drop.classList.add("dragging");
      });
    });

    ["dragleave", "drop"].forEach((type) => {
      drop.addEventListener(type, () => {
        drop.classList.remove("dragging");
      });
    });

    drop.addEventListener("drop", (event) => {
      event.preventDefault();
      setFile(event.dataTransfer?.files?.[0]);
    });
  }

  setupFileDrop(
    'input[name="pledgeFile"]',
    "[data-pledge-file-name]",
    isAcceptedPledgeFile,
    "PDF, HWP, HWPX, JPG, PNG 파일만 업로드할 수 있습니다."
  );
  setupFileDrop(
    'input[name="musicFile"]',
    "[data-music-file-name]",
    isAcceptedMusicFile,
    "MP3, WAV, M4A 파일만 업로드할 수 있습니다."
  );

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (!validateCurrentStep(form, currentStep)) return;

    const message = form.querySelector("[data-form-message]");
    message.textContent = currentLanguage() === "en" ? "Submitting application..." : "신청서를 제출하는 중입니다.";

    try {
      const payload = await buildSubmissionPayload(form);

      if (hasRemoteApi()) {
        const result = await callRemote("submitApplication", payload);
        if (!result.application?.pledgeFileUrl) {
          throw new Error(translateText("서약서가 서버에 저장되지 않았습니다. Apps Script 배포를 확인해주세요."));
        }
        payload.application.id = result.application?.id || payload.application.id;
        payload.application.status = result.application?.status || payload.application.status;
        payload.application.pledgeFileUrl = result.application?.pledgeFileUrl || "";
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
      const detail = error?.message ? ` ${error.message}` : "";
      message.textContent =
        currentLanguage() === "en"
          ? `Submission failed.${detail} Please try again or contact the event office.`
          : `전송에 실패했습니다.${detail} 다시 시도하거나 운영사무국으로 문의해주세요.`;
    }
  });

  document.addEventListener("languagechange", () => {
    syncMediaOptions(form);
    render();
  });

  syncFormForEntryType(form);
  render();
}

function statusClass(status) {
  if (status === "확정") return "confirmed";
  if (status === "보완요청") return "review";
  return "pending";
}

function formatStoredRoutineEvent(eventName, application) {
  const normalized = String(eventName || "");
  if (!normalized || normalized.includes(" · ")) return normalized;

  const nonRoutineEvents = new Set([
    application.groupCategory,
    ...(Array.isArray(application.customEvents) ? application.customEvents : []),
    "심판 제출"
  ]);
  if (nonRoutineEvents.has(normalized)) return normalized;

  const section = /^Level\s+[123]$/i.test(normalized) ? "규정 부문 · 맨손" : "규정 부문 · 수구";
  return `${section} · ${normalized}`;
}

function formatStoredFreeEvent(eventName) {
  const normalized = String(eventName || "");
  if (!normalized || normalized.includes(" · ")) return normalized;
  return `자유 부문 · ${normalized}`;
}

function renderApplication(application) {
  const events = Array.from(
    new Set(
      [
        ...(application.routines || []).map((eventName) => formatStoredRoutineEvent(eventName, application)),
        ...(application.apparatus || []).map((eventName) => formatStoredFreeEvent(eventName)),
        application.groupCategory,
        ...(application.customEvents || [])
      ].filter(Boolean)
    )
  );
  const eventsText = formatEventList(events) || "-";
  const photoOptions = Array.isArray(application.photoOptions) ? application.photoOptions : [];
  const videoOptions = Array.isArray(application.videoOptions) ? application.videoOptions : [];
  const photosText = formatEventList(photoOptions) || translateDynamic("신청 안 함");
  const videosText = formatEventList(videoOptions) || translateDynamic("신청 안 함");
  const displayName =
    application.judgeName ||
    (currentLanguage() === "en" && application.englishName ? application.englishName : application.athleteName);
  const schedule = Array.isArray(application.schedule) ? application.schedule : [];
  const athleteCount = Array.isArray(application.athletes) ? application.athletes.length : 0;
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
        <div><dt>${translateDynamic("대회부문")}</dt><dd>${translateDynamic(application.division || "-")}</dd></div>
        <div><dt>${translateDynamic("참가형태")}</dt><dd>${translateDynamic(application.entryType || "-")}</dd></div>
        <div><dt>${translateDynamic("참가유형")}</dt><dd>${translateDynamic(application.participantType || "-")}</dd></div>
        <div><dt>${translateDynamic("소속명 *").replace(" *", "")}</dt><dd>${application.organization || application.judgeOrganization || "-"}</dd></div>
        <div><dt>${translateDynamic("종목")}</dt><dd>${eventsText}</dd></div>
        <div><dt>${translateDynamic("지도자")}</dt><dd>${application.coachName || application.judgeGrade || "-"}</dd></div>
        <div><dt>${translateDynamic("선수 정보")}</dt><dd>${athleteCount ? translateDynamic(`${athleteCount}명`) : "-"}</dd></div>
        <div><dt>${translateDynamic("대회 사진 신청")}</dt><dd>${photosText}</dd></div>
        <div><dt>${translateDynamic("대회 영상 신청")}</dt><dd>${videosText}</dd></div>
        <div><dt>${translateDynamic("결제")}</dt><dd>${translateDynamic(application.paymentStatus || "-")}</dd></div>
        <div><dt>${currentLanguage() === "en" ? "Pledge" : "서약서"}</dt><dd>${translateDynamic(application.pledgeStatus || (application.pledgeFileUrl ? "제출완료" : "-"))}</dd></div>
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

const fallbackPublicSchedule = [];

function renderPublicSchedule(schedule) {
  const target = document.querySelector("[data-public-schedule]");
  if (!target) return;

  target.innerHTML = schedule.length
    ? schedule
        .map(
          (item) => `
            <article class="public-schedule-row">
              <time>${item.date || "-"} · ${item.time || "-"}</time>
              <strong>${translateDynamic(item.label || "-")}</strong>
              <span>${translateDynamic(item.location || "-")}${item.memo ? ` / ${translateDynamic(item.memo)}` : ""}</span>
            </article>
          `
        )
        .join("")
    : `<article class="schedule-row"><strong>${translateDynamic("등록된 일정이 없습니다.")}</strong><span>${translateDynamic("운영진이 Schedule 시트를 업데이트하면 표시됩니다.")}</span></article>`;
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
