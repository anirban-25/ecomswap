import React from 'react'
import { useRouter, useSearchParams } from "next/navigation";

type Props = {}

const page = (props: Props) => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const id = searchParams.get("id");
    

  return (
    <div>page</div>
  )
}

export default page