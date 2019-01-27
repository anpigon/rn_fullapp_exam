// 선택한 gitRepo 정보를 저장
export default function(state=null, action){
  switch (action.type) {
    case "Repo_Selected": return action.payload;
  }
  return state;
}