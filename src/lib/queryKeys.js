import { getMe } from "@/api/authAPI"
import { challengeById, challengeList } from "@/api/challenges.API"
import { useQuery } from "@tanstack/react-query"


//챌린지 리스트 +페이지네이션
export const useChallengeList = (params={}) => {
  return useQuery({
    queryKey: ['challenges', params],
    queryFn:()=>challengeList(params)
  })
}

//챌린지 상세 페이지
export const useChallengeDetail = (id) => {
  return useQuery({
    queryKey: ['challenges', id],
    queryFn:()=>challengeById(id)
  })
}



//로그인 상태 쿼리키 
export const useMe = () => {
  return useQuery({
    queryKey: ['me'],
    queryFn: getMe,
    retry: false,
    throwOnError: false,
  })
}