import { useGatMacQuery } from '@/services'
import React from 'react'

const AppleWatch = () => {
  const {data}=useGatMacQuery({
    variables:{
      where:{
        parent:{
          equals:6
        }
      }
    }
  })
  return (
    <div className='flex justify-between mt-20'>
      {data?.GetManyCategory?.result?.items?.map((item)=>
      <div className='bg-emerald-300 font-black'>
        {item.faName}
      </div>
      )}
    </div>
  )
}

export default AppleWatch