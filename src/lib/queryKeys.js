import { getMe } from "@/api/authAPI"
import { useQuery } from "@tanstack/react-query"




//로그인 상태 쿼리키 
export const useMe = () => {
  return useQuery({
    queryKey: ['me'],
    queryFn: getMe,
    retry:false,
  })
}