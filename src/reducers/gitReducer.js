// gitRepo 목록 정보를 저장
let gitRepos= [];

export default function(state=gitRepos, action){
  switch (action.type) {
    case "Get_Repos": { 
			gitRepos = action.payload;
      // console.log('action', action);
      return gitRepos;
    }
  }
  return gitRepos;
}