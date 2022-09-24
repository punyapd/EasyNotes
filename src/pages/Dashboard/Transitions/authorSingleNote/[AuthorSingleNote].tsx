import { useRouter } from 'next/router'
import React from 'react'
import ViewNote from '../../../../components/backend/notes/ViewNotes'
import APIS from '../../../../helpers/EndPoints'
import useGetHook from '../../../../hooks/useGetHooks'

type Props = {}

const AuthorSinlgeNote = (props: Props) => {
  const router = useRouter()
  const {AuthorSingleNote} = router.query;
 
  const { isLoading: authorStatisticsDataLoading, data: authorStatisticsData } =
    useGetHook({
      queryKey: `${APIS.NOTES}?{AuthorSingleNote}`,
      url: `${APIS.NOTES}${AuthorSingleNote}`,
      parma: "",
      auth: true,
    });
     
 

  return (
    <div>
        <ViewNote noteData={authorStatisticsData} />
      
    </div>
  )
}

export default AuthorSinlgeNote