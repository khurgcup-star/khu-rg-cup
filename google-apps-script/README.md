# Google Apps Script 연결 방법

이 폴더의 `Code.gs`를 Google Apps Script 프로젝트에 붙여 넣으면 됩니다.

## 준비

1. 개인 Google Sheet 생성
2. 음악 파일을 저장할 Google Drive 폴더 생성
3. `Code.gs` 상단의 값을 교체

```js
const SPREADSHEET_ID = "개인 구글시트 ID";
const DRIVE_FOLDER_ID = "구글 드라이브 폴더 ID";
```

## 배포

1. Apps Script에서 `배포 > 새 배포`
2. 유형: `웹 앱`
3. 실행 사용자: `나`
4. 액세스 권한: `모든 사용자`
5. 배포 URL을 복사
6. 홈페이지의 `config.js`에 붙여넣기

`Code.gs`를 수정한 뒤에는 기존 배포 URL이 자동으로 최신 코드가 되지 않습니다.
Apps Script에서 `배포 관리 > 수정 > 버전: 새 버전`을 선택해 다시 배포해야 홈페이지 조회에도 반영됩니다.

```js
window.KHU_CUP_CONFIG = {
  GOOGLE_APPS_SCRIPT_URL: "배포 URL",
  DEMO_MODE: false
};
```

## 시트 구조

앱이 처음 실행되면 아래 시트를 자동 생성합니다.

- `Applications`: 참가 신청, 결제 상태, 음악 확인 상태, 확정 상태
- `Schedule`: 개인 일정표

`Applications`에서 운영자가 바꿀 주요 값:

- `status`: `접수대기`, `확인중`, `신청완료`, `보완요청`
- `paymentStatus`: `미확인`, `확인중`, `확인완료`
- `musicStatus`: `미제출`, `확인중`, `확인완료`
- `adminMemo`: 참가자에게 보여줄 운영 메모

`Schedule`에는 일정을 넣으면 홈페이지 전체 일정표와 신청 확인 페이지에 표시됩니다.

- 전체 일정표: `isPublic`이 비어 있거나 `true`이면 표시됩니다.
- 개인 일정표: `id` 또는 `email`이 참가자와 일치하면 신청 확인 페이지에 표시됩니다.
- 공개하고 싶지 않은 개인 일정은 `isPublic`에 `false`를 넣으면 됩니다.

`Schedule` 시트 작성 예시:

```text
id | email | athleteName | date | time | label | location | memo | isPublic | updatedAt
   |       |             | 2026-08-22 | 09:00 | 참가자 접수 | 경희대학교 체육관 | 음악 확인 및 번호표 배부 | true | 2026-05-11
   |       |             | 2026-08-22 | 10:00 | 개회식 | Main Floor | 전체 참가자 대기 | true | 2026-05-11
KHU-2026-962446 | adsf@naver.com | 김몽징 | 2026-08-22 | 11:20 | 개인 리허설 | Warm-up Area | 지도자 동반 | false | 2026-05-11
```

위 예시에서 첫째, 둘째 줄은 홈페이지 전체 일정표에 표시됩니다. 셋째 줄은 `isPublic=false`라서 전체 일정표에는 숨겨지고, 해당 참가자가 신청 확인을 할 때만 개인 일정으로 표시됩니다.

## 신청 후 자동 이메일

신청이 `Applications` 시트에 저장되면 참가자 이메일로 접수 안내 메일을 자동 발송합니다.
메일에는 아래 항목이 포함됩니다.

- 신청 상태
- 입금 상태
- 음악 상태
- 신청 확인 안내

Apps Script 최초 승인 시 Gmail/Mail 발송 권한이 추가로 요청될 수 있습니다.

## 배포 확인

웹앱 배포 후 홈페이지에서 조회가 안 되면 Apps Script가 최신 버전인지 먼저 확인합니다.
`lookupApplication`은 이메일만으로 신청 데이터를 조회해야 합니다.

현재 코드의 확인용 버전 값:

```text
2026-05-11-email-lookup
```

## 운영자가 주로 수정하는 컬럼

참가자 신청 데이터는 대부분 자동으로 들어옵니다. 운영자는 보통 아래 컬럼만 바꾸면 됩니다.

```text
status
paymentStatus
musicStatus
adminMemo
```

예시:

```text
status: 신청완료
paymentStatus: 확인완료
musicStatus: 확인완료
adminMemo: 신청 확정되었습니다.
```

홈페이지 신청 확인 화면은 이 값을 그대로 읽어서 보여줍니다.

## 현재 적용된 최소 검증

- 신청 저장 전 필수값이 비어 있으면 저장하지 않습니다.
- 이메일 형식이 맞지 않으면 저장하지 않습니다.
- 참가 종목이 하나도 없으면 저장하지 않습니다.
- 신청 조회는 이메일이 맞는 신청 데이터를 반환합니다.
