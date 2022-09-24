import { useRouter } from 'next/router';
import React from 'react'
import PDFComponent from '../../../../components/PDFComponent';
import APIS from '../../../../helpers/EndPoints';
import useGetHook from '../../../../hooks/useGetHooks';

type Props = {}

const NoteView = (props: Props) => {
  const router = useRouter()
  const {noteID} = router.query


  const { isLoading: noteDetailDataLoading, data: noteDetailData } = useGetHook(
    {
      queryKey: "noteDetailslists",
      url: `${APIS.NOTES}${noteID}`,
      parma: "",
      auth: true,
    }
  );



  return (
    <div className="p-4 h-full h-[1000px] bg-white rounded-lg font-Inter text-[15px] ">
      <PDFComponent file={noteDetailData?.attachment ? noteDetailData?.attachment : 'sorry no content found!'} showToolBar={true} />
    </div>
  )
}

export default NoteView;