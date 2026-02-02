"use client"; // 클릭 이벤트가 필요하므로 클라이언트 컴포넌트

import { getUserData } from "@/src/api/user";

export default function UserRefreshButton() {
  const handleRefresh = async () => {
    const data = await getUserData();
    console.log("새 데이터:", data);
    // 이후 상태 업데이트나 토스트 알림 등 로직 처리
  };

  return (
    <button
      type="button"
      onClick={handleRefresh}
      className="p-2 bg-blue-500 text-white cursor-pointer rounded"
    >
      사용자 정보 새로고침
    </button>
  );
}
