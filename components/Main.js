
import { useState } from 'react';
import Inputform from './form';
import ReportTable from './ReportTable';
import Footer from '../components/Footer'

const Main = () => {
  // const [Hours, setHours] = useState(['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'])
  // const [cookieStandFormData,setCookieStandFormData] = useState([])
  // const [totals, setdaytotals] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])

  // const formHandler =(e)=>{
  //   e.preDefault();
  //   let data ={
  //     Location : e.target.Location.value ,
  //     Minimum : e.target.minimum.value ,
  //     Maximum : e.target.Maximum.value ,
  //     Avarage : e.target.Avarage.value,
  //   }

  //   let sum =0 ;

  //   // setCookieStandFormData([...data , cookieStandFormData ]);
  //   setCookieStandFormData(JSON.stringify(data))
  const [workingHours, setworkingHours] = useState(['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'])
  const [report, setallstores] = useState([])
  const [totals, setbranchestotals] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])


  const formHandler =(e) => {

    e.preventDefault();

    let minCustomers = parseInt(e.target.minimum.value)
    let maxCustomers = parseInt(e.target.Maximum.value)
    let avgCookies = parseInt(e.target.Avarage.value)

    let sum = 0


    const store = {
      location: e.target.Location.value,
      hourlySales: workingHours.map(() => Math.ceil(avgCookies * (Math.ceil(Math.random() * (maxCustomers - minCustomers) + minCustomers)))),
    }

    for (let i = 0; i < store.hourlySales.length; i++) {
      sum = sum + store.hourlySales[i]
    }
    store.total = sum

    setallstores([...report, store])


    let total_sum = totals.map((item, idx) => {
      if (idx === totals.length - 1) {
        return item + store.total
      }
      return item + store.hourlySales[idx]
    })

    setbranchestotals(total_sum)

  }

return (
  <>
    <div className='bg-green-50' >

      <main className="flex flex-col items-center flex-1 m-10 text-center">
        <Inputform formHandler={formHandler} />
        <ReportTable report={report} workingHours={workingHours} totals={totals} />
        <Footer report={report} />
      </main>


    </div>

    {/* <div>
      <h2 className='text-lg text-center' > Report table coming soon .. </h2>





    </div> */}
  </>

)
}

export default Main