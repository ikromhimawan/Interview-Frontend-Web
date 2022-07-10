import React, { useEffect, useState } from "react";
import { useRouter } from "next/router"


const Index = () => {
  var router = useRouter()
  useEffect(() => {
    router.push("/frontend/web/question/one")
  }, [])
  return <></>
}
export default Index